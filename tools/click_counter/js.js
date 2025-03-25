(function() {
    // Declare variables inside the IIFE to avoid global scope pollution
    let count = 0;
    const countDisplay = document.getElementById('count');
    const clickButton = document.getElementById('clickButton');

    // Check if elements exist before adding event listeners
    if (countDisplay && clickButton) {
        clickButton.addEventListener('click', () => {
            count++;
            countDisplay.textContent = count;
        });
    }
})();