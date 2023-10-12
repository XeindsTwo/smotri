/*document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menuBtn');
    const headerInner = document.querySelector('.header__inner');
    const body = document.body;
    const anchors = document.querySelectorAll('a[href*="#"]');

    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (headerInner.classList.contains('header__inner--active')) {
            headerInner.style.height = '90px';
            body.classList.remove('body--active');
        } else {
            headerInner.style.height = 'auto';
            const headerHeight = headerInner.clientHeight;
            headerInner.style.height = '90px';
            setTimeout(() => {
                headerInner.style.height = headerHeight + 'px';
                body.classList.add('body--active');
            }, 0);
        }
        headerInner.classList.toggle('header__inner--active');
        menuBtn.classList.toggle('active');
    }

    function scrollToTarget(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            menuBtn.classList.remove("active");
            headerInner.classList.remove("header__inner--active");
            headerInner.style.height = '90px';
            body.classList.remove("body--active");
            setTimeout(function () {
                const targetOffset = targetSection.offsetTop;
                window.scrollTo({top: targetOffset, behavior: "smooth"});
            }, 300);
        }
    }

    function handleAnchorClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        scrollToTarget(targetId);
    }

    for (let anchor of anchors) {
        anchor.addEventListener("click", handleAnchorClick);
        anchor.addEventListener("touchstart", handleAnchorClick);
    }

    const menuLinks = document.querySelectorAll(".header__link");
    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener("click", handleAnchorClick);
        menuLink.addEventListener("touchstart", handleAnchorClick);
    });
});*/

const buttons = document.querySelectorAll('.tariff__buttons button');
const price = document.querySelector('.tariff__price .tariff__value');
let activeButton = document.querySelector('.tariff__buttons .tariff__btn--active');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        activeButton.classList.remove('tariff__btn--active');
        activeButton.removeAttribute('tabindex');

        button.classList.add('tariff__btn--active');
        button.setAttribute('tabindex', '-1');
        activeButton = button;
        const tariff = button.getAttribute('data-tariff');
        price.textContent = tariff === 'month' ? '1500₽/мес.' : tariff === 'week' ? '800₽/неделя' : '5000₽/навсегда';
    });
});

window.addEventListener('scroll', function () {
    const tariffSection = document.getElementById('tariff');
    const footer = document.getElementById('footer');
    const scrollY = window.scrollY;
    const tariffSectionHeight = tariffSection.clientHeight;
    const triggerDistance = 100;

    const distanceToFooter = tariffSectionHeight - scrollY;
    const visibleDistance = Math.max(0, distanceToFooter - triggerDistance);
    footer.style.bottom = `-${visibleDistance}px`;
});