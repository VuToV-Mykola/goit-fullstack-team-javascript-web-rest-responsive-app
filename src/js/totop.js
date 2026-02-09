const toTopBtn = document.getElementById("toTopBtn");

// Слідкуємо за скролом вікна
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  // Прокрутка за 300px — показуємо кнопку
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
}

// Підйом вгору
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Плавний скрол
  });
});