/** Імпорт зображень для оцінки **/
import starFilled from '../img/feedback/star-filled.webp';
import starEmpty from '../img/feedback/star-empty.webp';

/** Імпорт бібліотеки Swiper **/
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/** Імпорт бібліотеки raty-js **/
import Raty from 'raty-js';

/** Імпорт функції fetchFeedbacks з файлу api-artists.js **/
import {fetchFeedbacks} from './api-artists.js';
import {FEEDBACKS_LIMIT} from './config.js';

/** Нормалізує відповідь fetchFeedbacks() */
function getFeedbacksList(response) {
  if (Array.isArray(response)) {
    return response;
  }
  if (response && typeof response.data !== 'undefined') {
    return response.data;
  }

  return [];
}

/** Функція округлення рейтингу **/
function roundRating(value) {
  return Math.round(Number(value));
}

/** Функція створення HTML-коду слайда **/
function getSlideHtml(item) {
  const score = roundRating(item.rating);
  const text = String(item.descr ?? '');
  const name = String(item.name ?? '');

  return `
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="feedback-rating" data-score="${score}"></div>
        <p class="feedback-text">${text}</p>
        <p class="feedback-author">${name}</p>
      </div>
    </div>
  `;
}

/** Функція ініціалізації оцінки **/
function initStars() {
  const ratingElements = document.querySelectorAll('.feedback-rating');
  ratingElements.forEach(element => {
    const score = parseInt(element.getAttribute('data-score'), 10);
    if (Number.isNaN(score)) return;
    const raty = new Raty(element, {
      starOn: starFilled,
      starOff: starEmpty,
      score,
      readOnly: true,
    });
    raty.init();
  });
}

let previousSlideIndex = 0;

function getActiveBulletIndex(swiper) {
  const total = swiper.slides.length;
  const index = swiper.activeIndex;

  if (total <= 1) return 0;

  /* Обчислюємо середній індекс колекції */
  const middleIndex = Math.ceil(total / 2);

  /* Визначаємо напрямок гортання */
  const isMovingBackward = index < previousSlideIndex;
  previousSlideIndex = index;

  /* Логіка для гортання справа наліво */
  if (isMovingBackward || index === total - 1) {
    /* Права крапка: від останнього до (середній + 1) */
    if (index >= middleIndex) return 2;
    /* Ліва крапка: тільки перший відгук */
    if (index === 0) return 0;
    /* Середня крапка: від середнього до (перший + 1) */
    return 1;
  }

  /* Логіка для гортання зліва направо (вперед) */
  /* Ліва крапка: від 1-го до (середній - 1) */
  if (index < middleIndex - 1) return 0;
  /* Права крапка: останній відгук */
  if (index === total - 1) return 2;
  /* Середня крапка: від середнього до передостаннього */
  return 1;
}

/** Підсвічує активну крапку пагінації (1-ша / середня / 10-та). */
function setActiveBullet(swiper) {
  const bullets = swiper.pagination.bullets;
  if (!bullets || bullets.length === 0) return;

  bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));
  const bulletIndex = getActiveBulletIndex(swiper);
  if (bullets[bulletIndex]) {
    bullets[bulletIndex].classList.add('swiper-pagination-bullet-active');
  }
}

/**
 1-ша → слайд 1, середня → 5-й відгук, 3-тя → 10-й відгук.
 */
function bindPaginationClicks(swiper) {
  const bullets = swiper.pagination.bullets;
  if (!bullets || bullets.length < 3) return;

  const total = swiper.slides.length;
  const middleSlideIndex = total >= 5 ? 4 : Math.floor(total / 2);

  bullets[0].addEventListener('click', () => swiper.slideTo(0));
  bullets[1].addEventListener('click', () => swiper.slideTo(middleSlideIndex));
  bullets[2].addEventListener('click', () => swiper.slideTo(total - 1));
}

/** Функція ініціалізації секції відгуків **/
async function initFeedbackSection() {
  const wrapper = document.querySelector('.feedback-swiper .swiper-wrapper');
  if (!wrapper) {
    return;
  }

  try {
    const response = await fetchFeedbacks();
    const list = getFeedbacksList(response);
    const items = list.slice(0, FEEDBACKS_LIMIT);

    if (items.length === 0) {
      wrapper.innerHTML = `
        <div class="swiper-slide">
          <div class="feedback-card">
            <p class="feedback-text">Відгуки тимчасово недоступні.</p>
          </div>
        </div>
      `;
    } else {
      wrapper.innerHTML = items.map(getSlideHtml).join('');
      initStars();
    }

    const swiper = new Swiper('.feedback-swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: false,
      autoHeight: true,
      grabCursor: true,
      simulateTouch: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      mousewheel: {
        eventsTarget: '.feedback-swiper',
      },
      navigation: {
        nextEl: '.feedback-nav-next',
        prevEl: '.feedback-nav-prev',
      },
      pagination: {
        el: '.feedback-swiper .swiper-pagination',
        clickable: false,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        renderBullet(index, className) {
          if (index >= 3) return '';
          return `<span class="${className}" role="button" tabindex="0"></span>`;
        },
      },
    });

    bindPaginationClicks(swiper);
    swiper.on('slideChange', () => setActiveBullet(swiper));
    setActiveBullet(swiper);
  } catch (err) {
    wrapper.innerHTML = `
      <div class="swiper-slide">
        <div class="feedback-card">
          <p class="feedback-text">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>
        </div>
      </div>
    `;
  }
}

initFeedbackSection();
