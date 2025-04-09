function stringToSeed(str) {
    // Simple hash function to convert a string to a number
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash); // hash * 31 + charCode
    }
    return Math.abs(hash); // Ensure the seed is a positive number
}

function seededRandom(seed) {
    // Simple seeded random number generator
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

document.getElementById('generateButton').addEventListener('click', function() {
    const seedInput = document.getElementById('seedInput').value;
    const seed = isNaN(seedInput) ? stringToSeed(seedInput) : parseInt(seedInput);
    
    const randomNumber = Math.floor(seededRandom(seed) * 100) + 1; // Generate number between 1 and 100
    document.getElementById('generatedNumber').textContent = randomNumber;
    document.getElementById('usedSeed').textContent = seed;
});