export function header() {
    const body = document.body;
    const headerInner = document.querySelector('.header__top-right');
    const menuBtn = document.querySelector('.menu-btn--header');
    const anchors = document.querySelectorAll('a[href*="#"]');

    menuBtn.addEventListener('click', () => {
        body.classList.toggle('body--active');
        headerInner.classList.toggle('active');
        menuBtn.classList.toggle('active');
        menuBtn.blur();
    });

    function scrollToTarget(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            body.classList.remove('body--active');
            headerInner.classList.remove('active');
            menuBtn.classList.remove('active');
            setTimeout(() => {
                const targetOffset = targetSection.offsetTop;
                window.scrollTo({top: targetOffset, behavior: 'smooth'});
            }, 300);
        }
    }

    function handleAnchorClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        scrollToTarget(targetId);
    }

    for (const anchor of anchors) {
        anchor.addEventListener('click', handleAnchorClick);
        anchor.addEventListener('touchstart', handleAnchorClick);
    }

    const menuLinks = document.querySelectorAll('.header__link');
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', handleAnchorClick);
        menuLink.addEventListener('touchstart', handleAnchorClick);
    });
}