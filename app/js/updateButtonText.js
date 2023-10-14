export function updateButtonText(buttonCases) {
    function updateText() {
        if (window.innerWidth < 600) {
            buttonCases.textContent = 'Кейсы';
        } else {
            buttonCases.textContent = 'Успешные кейсы';
        }
    }

    window.addEventListener('load', updateText);
    window.addEventListener('resize', updateText);
}