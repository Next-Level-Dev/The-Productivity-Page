(function() {
    let count = 0; // Number of clicks
    let goal = 0; // User-defined goal

    const countDisplay = document.getElementById('countDisplay');
    const clickButton = document.getElementById('clickButton');
    const goalInput = document.getElementById('goalInput');
    const setGoalButton = document.getElementById('setGoalButton');

    // Function to update the display
    function updateDisplay() {
        countDisplay.textContent = `${count}/${goal}`;
    }

    // Event listener for setting the goal
    setGoalButton.addEventListener('click', () => {
        const inputGoal = parseInt(goalInput.value, 10);
        if (inputGoal > 0) {
            goal = inputGoal; // Set the goal
            updateDisplay(); // Update the display
            goalInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid goal greater than 0.');
        }
    });

    // Event listener for the click button
    clickButton.addEventListener('click', () => {
        count++; // Increment the click count
        updateDisplay(); // Update the display
    });
})();