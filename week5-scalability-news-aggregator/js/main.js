import { fetchNews } from "./apiService.js";
import { createNewsCard } from "./newsCard.js";
import { showSkeletons, removeSkeletons } from "./skeleton.js";
import { showErrorMessage } from "./errorHandler.js";

const container = document.getElementById("newsContainer");

async function loadNews() {
    container.innerHTML = "";
    showSkeletons(container, 6); // Show placeholders

    try {
        const [newsAPI, guardianAPI, nytAPI] = await fetchNews();
        const articles = [...newsAPI.articles, ...guardianAPI.results, ...nytAPI.results];

        removeSkeletons();

        if (articles.length === 0) {
            showErrorMessage();
        } else {
            articles.forEach(article => {
                container.appendChild(createNewsCard(article));
            });
        }
    } catch (error) {
        removeSkeletons();
        showErrorMessage();
    }
}

document.getElementById("retryButton").addEventListener("click", loadNews);
loadNews();
