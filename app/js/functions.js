export function initFunctions() {
    const buttons = document.querySelectorAll('.functions__btn');
    let activeButton = document.querySelector('.buttons-tabs__btn--active');

    const buttonText = {
        cars: [
            'Расскажем все об автомобиле',
            'Отзывы о машинах',
            'Оплата штрафов в пару кликов',
            'Гарантируем безопасную сделку',
            'Анализ владельца и автомобиля от нейросети',
            'Официальный реестр',
        ],
        people: [
            'Анализ продавца на перекупа',
            'Контактные данные ',
            'История владений авто',
            'Отзывы о владельце',
            'История объявлений владельца',
            'Рейтинг доверия продавца',
        ]
    };

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (activeButton) {
                activeButton.classList.remove('buttons-tabs__btn--active')
                activeButton.removeAttribute('tabindex');
                activeButton.blur();
            }

            button.classList.add('buttons-tabs__btn--active');
            button.setAttribute('tabindex', '-1');
            button.blur();
            activeButton = button;

            const target = button.getAttribute('data-target');
            const textArray = buttonText[target];
            if (textArray) {
                const benefitsList = document.querySelector('.benefits-list');
                benefitsList.innerHTML = '';
                textArray.forEach((text) => {
                    const li = document.createElement('li');
                    li.textContent = text;
                    li.className = 'benefits-list__item true';
                    benefitsList.append(li);
                });
            }
        })
    });
}