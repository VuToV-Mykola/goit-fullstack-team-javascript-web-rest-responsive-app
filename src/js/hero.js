/**
 * Підключає плавний скрол до секції #artists по кліку на кнопку Explore Artists.
 */
function setupExploreScroll() {
  const exploreBtn = document.querySelector('#btn-hero-js');

  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      const targetSection = document.querySelector('#artists');
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }
}

// Ініціалізація Hero після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  setupExploreScroll();
});
