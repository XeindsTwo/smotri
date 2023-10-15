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
const tariffSection = document.getElementById('tariff');
const footer = document.getElementById('footer');
const triggerDistance = tariffSection.offsetTop + tariffSection.clientHeight;
const footerHeight = footer.clientHeight;
const transitionDuration = 0.6; // длительность анимации в секундах

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const visibleDistance = Math.max(0, triggerDistance - scrollY - windowHeight + footerHeight);

    footer.style.transition = `bottom ${transitionDuration}s ease-in-out`;
    footer.style.bottom = `-${visibleDistance}px`;
});*/