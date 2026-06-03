const menuButton = document.querySelector('.menu-button');
const navigationLinks = document.querySelector('[data-navigation-links]');

if (menuButton && navigationLinks) {
    menuButton.addEventListener('click', () => {
        const isOpen = navigationLinks.classList.toggle('is-open');
        document.body.classList.toggle('menu-open', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navigationLinks.querySelectorAll('a').forEach((navigationLink) => {
        navigationLink.addEventListener('click', () => {
            navigationLinks.classList.remove('is-open');
            document.body.classList.remove('menu-open');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });
}
