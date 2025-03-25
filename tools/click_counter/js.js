(function() {
    let count1 = 0; // Counter 1
    let count2 = 0; // Counter 2
    let goal = 0; // User-defined goal

    const countDisplay1 = document.getElementById('countDisplay1');
    const countDisplay2 = document.getElementById('countDisplay2');
    const goalInput = document.getElementById('goalInput');
    const setGoalButton = document.getElementById('setGoalButton');
    const goalDisplay = document.getElementById('goalDisplay');

    // Function to update the displays
    function updateDisplays() {
        countDisplay1.textContent = count1;
        countDisplay2.textContent = count2;
        goalDisplay.textContent = `Goal: ${goal}`;
    }

    // Event listener for setting the goal
    setGoalButton.addEventListener('click', () => {
        const inputGoal = parseInt(goalInput.value, 10);
        if (inputGoal > 0) {
            goal = inputGoal; // Set the goal
            updateDisplays(); // Update the displays
            goalInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid goal greater than 0.');
        }
    });

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