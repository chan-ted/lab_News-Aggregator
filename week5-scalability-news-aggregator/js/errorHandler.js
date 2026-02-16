export function showErrorMessage() {
    const container = document.getElementById("newsContainer");
    container.innerHTML = `
        <p class="text-danger">Some news sources failed to load. Please try again.</p>
        <button class="btn btn-warning" onclick="loadNews()">Retry</button>
    `;
}
