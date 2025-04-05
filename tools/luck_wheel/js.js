const results = [];
const wheel = document.getElementById('wheel');
const resultDisplay = document.getElementById('resultDisplay');
const resultsList = document.getElementById('resultsList');

document.getElementById('addButton').addEventListener('click', () => {
    const result = document.getElementById('result').value;
    const chance = parseInt(document.getElementById('chance').value);

    if (result && chance > 0) {
        results.push({ result, chance });
        updateWheel();
        updateResultsList();
        document.getElementById('result').value = '';
        document.getElementById('chance').value = '';
    } else {
        alert('Please enter a valid result and chance.');
    }
});

document.getElementById('spinButton').addEventListener('click', () => {
    if (results.length === 0) {
        alert('Please add results to the wheel before spinning.');
        return;
    }

    const totalChances = results.reduce((sum, item) => sum + item.chance, 0);
    const randomNum = Math.random() * totalChances;
    let cumulativeChance = 0;

    for (const item of results) {
        cumulativeChance += item.chance;
        if (randomNum < cumulativeChance) {
            resultDisplay.textContent = `Result: ${item.result}`;
            break;
        }
    }
});

function updateWheel() {
    wheel.innerHTML = '';
    const totalChances = results.reduce((sum, item) => sum + item.chance, 0);
    let currentWidth = 0;

    results.forEach(item => {
        const sliceWidth = (item.chance / totalChances) * 100; // Percentage width
        const slice = document.createElement('div');
        slice.style.width = `${sliceWidth}%`;
        slice.style.backgroundColor = getRandomColor();
        slice.textContent = item.result; // Display the result name
        wheel.appendChild(slice);
    });
}

function updateResultsList() {
    resultsList.innerHTML = '';
    results.forEach((item, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.textContent = `${item.result} (Chance: ${item.chance})`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            results.splice(index, 1);
            updateWheel();
            updateResultsList();
        };
        
        resultItem.appendChild(removeButton);
        resultsList.appendChild(resultItem);
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}