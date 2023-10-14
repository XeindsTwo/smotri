export function footer() {
    const btnFooter = document.querySelector('.menu-btn--footer');
    const menuFooter = document.querySelector('.footer__nav-right--mobile');

    btnFooter.addEventListener('click', () => {
        menuFooter.classList.toggle('footer__nav-right--active');
        btnFooter.classList.toggle('active');
        btnFooter.blur();

        if (menuFooter.classList.contains('footer__nav-right--active')) {
            menuFooter.style.height = menuFooter.scrollHeight + 'px';
            menuFooter.style.opacity = '1';
        } else {
            menuFooter.style.height = '0';
            menuFooter.style.opacity = '0';
        }
    });
}