function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    if (navLinks && burgerMenu) {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('open');
    }
}

