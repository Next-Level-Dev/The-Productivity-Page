(function() {
    let count1 = 0; // Counter 1
    let count2 = 0; // Counter 2

    const countDisplay1 = document.getElementById('countDisplay1');
    const countDisplay2 = document.getElementById('countDisplay2');

    // Function to update the displays
    function updateDisplays() {
        countDisplay1.value = count1; // Update the first counter display
        countDisplay2.value = count2; // Update the second counter display
    }

    // Event listeners for the first counter
    document.getElementById('incrementButton1').addEventListener('click', () => {
        count1 += 25; // Increment the first counter by 25
        updateDisplays(); // Update the displays
    });

    document.getElementById('incrementButton1Small').addEventListener('click', () => {
        count1 += 1; // Increment the first counter by 1
        updateDisplays(); // Update the displays
    });

    document.getElementById('decrementButton1').addEventListener('click', () => {
        count1 -= 25; // Decrement the first counter by 25
        if (count1 < 0) count1 = 0; // Prevent negative values
        updateDisplays(); // Update the displays
    });

    document.getElementById('decrementButton1Small').addEventListener('click', () => {
        count1 -= 1; // Decrement the first counter by 1
        if (count1 < 0) count1 = 0; // Prevent negative values
        updateDisplays(); // Update the displays
    });

    // Event listeners for the second counter
    document.getElementById('incrementButton2').addEventListener('click', () => {
        count2 += 25; // Increment the second counter by 25
        updateDisplays(); // Update the displays
    });

    document.getElementById('incrementButton2Small').addEventListener('click', () => {
        count2 += 1; // Increment the second counter by 1
        updateDisplays(); // Update the displays
    });

    document.getElementById('decrementButton2').addEventListener('click', () => {
        count2 -= 25; // Decrement the second counter by 25
        if (count2 < 0) count2 = 0; // Prevent negative values
        updateDisplays(); // Update the displays
    });

    document.getElementById('decrementButton2Small').addEventListener('click', () => {
        count2 -= 1; // Decrement the second counter by 1
        if (count2 < 0) count2 = 0; // Prevent negative values
        updateDisplays(); // Update the displays
    });

    // Allow users to manually edit the counter values
    countDisplay1.addEventListener('input', () => {
        const value = parseInt(countDisplay1.value, 10);
        if (!isNaN(value) && value >= 0) {
            count1 = value; // Update count1 with the input value
        } else {
            countDisplay1.value = count1; // Reset to the current count if invalid
        }
    });

    countDisplay2.addEventListener('input', () => {
        const value = parseInt(countDisplay2.value, 10);
        if (!isNaN(value) && value >= 0) {
            count2 = value; // Update count2 with the input value
        } else {
            countDisplay2.value = count2; // Reset to the current count if invalid
        }
    });

    // Initialize displays
    updateDisplays();
})();