(function() {
    let count1 = 0; // Counter 1
    let count2 = 0; // Counter 2
    let goal = 0; // User-defined goal

    const countDisplay1 = document.getElementById('countDisplay1');
    const countDisplay2 = document.getElementById('countDisplay2');
    const goalInput = document.getElementById('goalInput');

    // Function to update the displays
    function updateDisplays() {
        countDisplay1.value = count1; // Update the first counter display
        countDisplay2.value = count2; // Update the second counter display
    }

    // Event listeners for the first counter
    document.getElementById('incrementButton1').addEventListener('click', () => {
        count1++; // Increment the first counter
        updateDisplays(); // Update the displays
    });

    document.getElementById('decrementButton1').addEventListener('click', () => {
        if (count1 > 0) count1--; // Decrement the first counter
        updateDisplays(); // Update the displays
    });

    // Event listeners for the second counter
    document.getElementById('incrementButton2').addEventListener('click', () => {
        count2++; // Increment the second counter
        updateDisplays(); // Update the displays
    });

    document.getElementById('decrementButton2').addEventListener('click', () => {
        if (count2 > 0) count2--; // Decrement the second counter
        updateDisplays(); // Update the displays
    });
})();