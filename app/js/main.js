import {header} from './header.js';
import {mechanism} from './mechanism.js';
import {initTariff} from './tariff.js';
import {footer} from './footer.js';
import {updateButtonText} from './updateButtonText.js';
import {initFunctions} from './functions.js';

const buttonCases = document.getElementById('btn-cases');
const buttonCasesTwo = document.getElementById('btn-cases-two');

header();
mechanism();
initTariff();
footer();

updateButtonText(buttonCases);
updateButtonText(buttonCasesTwo);
initFunctions();

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    navigation: {
        prevEl: '.cases__btn--prev',
        nextEl: '.cases__btn--next'
    }
});

/*
document.addEventListener('DOMContentLoaded', function () {
    const historySection = document.getElementById('history');
    const footer2 = document.getElementById('footer');
    const footerBtn = document.querySelector('.menu-btn--footer');
    const footerMenu = footer2.querySelector('.footer__nav-right--mobile');
    const footerHeight = footer2.clientHeight;
    const additionalTriggerOffset = 0.2 * window.innerHeight;

    const triggerDistance = historySection.offsetTop + historySection.clientHeight + additionalTriggerOffset - window.innerHeight;

    footer2.style.bottom = `-${footerHeight}px`;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateFooterPosition() {
        if (lastScrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            footer2.style.bottom = '0px';
            ticking = false;
            return;
        }

        let overlayEffect = lastScrollY - triggerDistance;

        if (overlayEffect < 0) {
            overlayEffect = 0;
        } else if (overlayEffect > footerHeight) {
            overlayEffect = footerHeight;
        }

        footer2.style.bottom = `-${footerHeight - overlayEffect}px`;

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (currentScrollY < lastScrollY && currentScrollY < maxScroll - 10) {
            if (footerMenu && footerMenu.classList.contains('footer__nav-right--active')) {
                footerMenu.classList.remove('footer__nav-right--active');
                footerBtn.classList.remove('active');
                footerMenu.style.height = '0';
                footerMenu.style.opacity = '0';
            }
        }

        lastScrollY = currentScrollY;

        if (!ticking) {
            window.requestAnimationFrame(updateFooterPosition);
            ticking = true;
        }
    });
});*/

document.addEventListener('DOMContentLoaded', function () {
    const historySection = document.getElementById('history');
    const footer = document.querySelector('.footer');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const triggerDistance = historySection.offsetTop;

        if (scrollY >= triggerDistance) {
            footer.style.maxHeight = `${footer.scrollHeight}px`;
        } else {
            footer.style.maxHeight = '100px';
        }
    });
});