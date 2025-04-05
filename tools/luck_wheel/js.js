const results = [];
const wheel = document.getElementById('wheel');
const resultDisplay = document.getElementById('resultDisplay');

document.getElementById('addButton').addEventListener('click', () => {
    const result = document.getElementById('result').value;
    const chance = parseInt(document.getElementById('chance').value);

    if (result && chance > 0) {
        results.push({ result, chance });
        updateWheel();
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
    let currentAngle = 0;

    results.forEach(item => {
        const sliceAngle = (item.chance / totalChances) * 360;
        const slice = document.createElement('div');
        slice.style.transform = `rotate(${currentAngle}deg)`;
        slice.style.backgroundColor = getRandomColor();
        currentAngle += sliceAngle;
        wheel.appendChild(slice);
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