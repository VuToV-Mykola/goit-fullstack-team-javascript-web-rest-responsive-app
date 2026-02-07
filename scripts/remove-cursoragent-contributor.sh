#!/usr/bin/env bash
# Скрипт для видалення cursoragent з Contributors на GitHub
# Переписує автора комітів cursoragent на VuToV-Mykola
# Використання: ./scripts/remove-cursoragent-contributor.sh

set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

NEW_NAME="VuToV-Mykola"
NEW_EMAIL="vutov_nikola@icloud.com"

echo "🔍 Шукаю коміти від cursoragent..."

# Можливі варіанти авторів cursoragent
CURSOR_PATTERNS=(
  "cursoragent"
  "Cursor Agent"
  "cursor-agent"
  "cursoragent@users.noreply.github.com"
  "199161495+cursoragent@users.noreply.github.com"
)

FOUND=0
for pattern in "${CURSOR_PATTERNS[@]}"; do
  if git log --all --format='%an %ae' | grep -qi "$pattern"; then
    echo "✅ Знайдено коміти з: $pattern"
    FOUND=1
  fi
done

if [ "$FOUND" -eq 0 ]; then
  echo "⚠️  Комітів від cursoragent не знайдено в локальній історії."
  echo "   cursoragent може з'являтися через:"
  echo "   - Кеш contrib.rocks (оновіть сторінку через кілька годин)"
  echo "   - Коміти з іншого клону/машини, які ще не запушені"
  echo "   - Co-author у merge комітах"
  echo ""
  echo "Якщо cursoragent з'являється на GitHub — перевірте налаштування Git у Cursor:"
  echo "  git config user.name"
  echo "  git config user.email"
  echo ""
  read -p "Все одно виконати перепис історії? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 0
  fi
fi

echo ""
echo "📝 Перепис історії: cursoragent → $NEW_NAME <$NEW_EMAIL>"
echo "⚠️  Це змінить хеші комітів. Потрібен force push."
echo ""
read -p "Продовжити? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  exit 0
fi

# Перевірка на чисте робоче дерево
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
  echo "❌ Збережіть або відкладіть зміни перед виконанням"
  exit 1
fi

# Використовуємо git filter-branch (вбудовано в git)
git filter-branch -f --env-filter '
  case "$GIT_AUTHOR_NAME" in
    cursoragent|"Cursor Agent"|cursor-agent) NEED_FIX=1 ;;
    *) NEED_FIX=0 ;;
  esac
  case "$GIT_AUTHOR_EMAIL" in
    *cursoragent*) NEED_FIX=1 ;;
  esac
  if [ "$NEED_FIX" = "1" ]; then
    export GIT_AUTHOR_NAME="VuToV-Mykola"
    export GIT_AUTHOR_EMAIL="vutov_nikola@icloud.com"
  fi
  NEED_FIX=0
  case "$GIT_COMMITTER_NAME" in
    cursoragent|"Cursor Agent"|cursor-agent) NEED_FIX=1 ;;
  esac
  case "$GIT_COMMITTER_EMAIL" in
    *cursoragent*) NEED_FIX=1 ;;
  esac
  if [ "$NEED_FIX" = "1" ]; then
    export GIT_COMMITTER_NAME="VuToV-Mykola"
    export GIT_COMMITTER_EMAIL="vutov_nikola@icloud.com"
  fi
' --tag-name-filter cat -- --all

echo ""
echo "✅ Історію переписано. Для застосування на GitHub виконайте:"
echo "   git push origin --force --all"
echo "   git push origin --force --tags"
echo ""
echo "⚠️  Попередьте команду! Force push перезапише віддалену історію."
