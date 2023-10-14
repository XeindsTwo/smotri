export function mechanism() {
    const mechanismItems = document.getElementById("mechanismItems");
    const items = document.querySelectorAll(".mechanism__item");
    items.forEach((item) => {
        const clonedItem = item.cloneNode(true);
        mechanismItems.appendChild(clonedItem);
    });

    let scrollAmount = 0;

    function scrollItems() {
        scrollAmount += 1;
        mechanismItems.style.transform = `translateX(-${scrollAmount}px)`;
        if (scrollAmount >= mechanismItems.offsetWidth / 2) {
            scrollAmount = 0;
            mechanismItems.style.transform = "translateX(0)";
        }
    }

    setInterval(scrollItems, 10);
}