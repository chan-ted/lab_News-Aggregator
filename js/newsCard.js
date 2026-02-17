export function createNewsCard(article) {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";

    // Standardise properties across APIs
    const title = article.title || article.webTitle || "No title available";
    const description = article.description || "No description available";
    const image = article.urlToImage || article.image_url || "./assets/default.png"; // Placeholder if no image
    const url = article.url || article.webUrl || "#";
    const source = (article.source && article.source.name) || article.sectionName || article.source_id || "Unknown Source";

    card.innerHTML = `
        <div class="card shadow-sm">
            <img src="${image}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p><small class="text-muted">${source}</small></p>
                <a href="${url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
        </div>
    `;
    return card;
}
