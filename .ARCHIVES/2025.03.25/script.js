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
            document.getElementById('content').innerHTML = html;
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