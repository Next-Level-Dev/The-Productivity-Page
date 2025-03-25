// Language translations object
const translations = {
    en: {
        pageTitle: "Tool Hub",
        toolbarTitle: "Tool Hub",
        selectToolTitle: "Select a Tool",
        welcomeMessage: "Welcome! Select a tool from the menu above.",
        
        click_counter: {
            title: "Click Counter",
            goalLabel: "Set your goal:",
            setGoalButton: "Set Goal",
            clickButton: "Click Me!",
            countDisplay: "0/0"
        },
    },
    tr: {
        pageTitle: "Araç Merkezi",
        toolbarTitle: "Araç Merkezi",
        selectToolTitle: "Bir Araç Seçin",
        welcomeMessage: "Hoş geldiniz! Yukarıdaki menüden bir araç seçin.",
        
        click_counter: {
            title: "Tıklama Sayacı",
            goalLabel: "Hedefinizi belirleyin:",
            setGoalButton: "Hedef Belirle",
            clickButton: "Bana Tıkla!",
            countDisplay: "0/0"
        },
    }
};

// Variable to track the current language
let currentLanguage = 'en'; // Default language

// Function to set the language
function setLanguage(lang) {
    currentLanguage = lang; // Update the current language
    // Update main page translations
    document.getElementById('pageTitle').innerText = translations[lang].pageTitle;
    document.getElementById('toolbarTitle').innerText = translations[lang].toolbarTitle;
    document.getElementById('selectToolTitle').innerText = translations[lang].selectToolTitle;
    document.getElementById('welcomeMessage').innerText = translations[lang].welcomeMessage;
    // Update tool translations if a tool is currently loaded
    const currentTool = document.getElementById('content').firstElementChild.id; // Get the current tool ID
    applyTranslations(currentTool);
}

// Function to load a tool
function loadTool(toolName) {
    // Load HTML
    fetch(`tools/${toolName}/index.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
            loadCSS(toolName);
            loadJS(toolName);
            applyTranslations(toolName); // Apply translations for the loaded tool
        })
        .catch(error => console.error('Error loading page:', error));
}

// Function to apply translations to the loaded content
function applyTranslations(toolName) {
    const lang = currentLanguage; // Get the current language
    const toolTranslations = translations[lang][toolName]; // Get the translations for the specific tool

    // Loop through the keys in the toolTranslations object
    for (const key in toolTranslations) {
        const element = document.getElementById(key);
        if (element) {
            element.innerText = toolTranslations[key]; // Set the translated text
        }
    }
}