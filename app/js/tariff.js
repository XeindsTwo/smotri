export function initTariff() {
    const buttons = document.querySelectorAll('.tariff__buttons button');
    const price = document.querySelector('.tariff__price .tariff__value');
    let activeButton = document.querySelector('.tariff__buttons .buttons-tabs__btn--active');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (activeButton) {
                activeButton.classList.remove('buttons-tabs__btn--active');
                activeButton.removeAttribute('tabindex');
                activeButton.blur();
            }

            button.classList.add('buttons-tabs__btn--active');
            button.setAttribute('tabindex', '-1');
            button.blur();
            activeButton = button;
            const tariff = button.getAttribute('data-tariff');
            price.textContent = tariff === 'month' ? '1300₽/месяц' : tariff === 'week' ? '600₽/неделя' : '5850₽/полгода';
        });
    });
}