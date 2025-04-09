function loadTool(toolName) {
    // Load HTML
    fetch(`tools/${toolName}/html.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            // Create a unique container for the tool
            const container = document.createElement('div');
            container.className = `tool-container-${toolName}`; // Unique class
            container.innerHTML = html;

            // Clear previous content and append the new container
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = ''; // Clear previous content
            contentDiv.appendChild(container);

            loadCSS(toolName);
            loadJS(toolName);
        })
        .catch(error => console.error('Error loading page:', error));
}

function loadCSS(toolName) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `tools/${toolName}/css.css`;
    document.head.appendChild(link);
}

function loadJS(toolName) {
    const script = document.createElement('script');
    script.src = `tools/${toolName}/js.js`;
    document.body.appendChild(script);
}