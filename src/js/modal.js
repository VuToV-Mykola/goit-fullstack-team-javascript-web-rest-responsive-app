;(() => {
  const mobileMenu = document.querySelector(".js-menu-container")
  const openMenuBtn = document.querySelector(".js-open-menu")
  const closeMenuBtn = document.querySelector(".js-close-menu")

  // ✅ FIX: Перевірка наявності елементів перед ініціалізацією
  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) {
    console.warn("Mobile menu elements not found. Skipping mobile menu initialization.")
    return
  }

  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]')
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen)
    mobileMenu.classList.toggle("is-open")

    // ✅ FIX: Перевірка наявності bodyScrollLock перед використанням
    if (typeof bodyScrollLock !== "undefined") {
      const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll"
      bodyScrollLock[scrollLockMethod](document.body)
    }

    if (anchors.length === 0) return

    if (!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener("click", toggleMenu)
      })
      return
    }

    anchors.forEach(anchor => {
      anchor.removeEventListener("click", toggleMenu)
    })
  }

  openMenuBtn.addEventListener("click", toggleMenu)
  closeMenuBtn.addEventListener("click", toggleMenu)

  // ✅ Вказати брейкпоінт після якого повинна зачинятися
  window.matchMedia("(min-width: 375px)").addEventListener("change", e => {
    if (!e.matches) return
    mobileMenu.classList.remove("is-open")
    openMenuBtn.setAttribute("aria-expanded", false)

    // ✅ FIX: Перевірка наявності bodyScrollLock
    if (typeof bodyScrollLock !== "undefined") {
      bodyScrollLock.enableBodyScroll(document.body)
    }
  })
})()
