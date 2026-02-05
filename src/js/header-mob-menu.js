document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-toggle').checked = false;
  });
});

// 4 На мобільних пристроях навігаційне меню ховається в бургер-меню.