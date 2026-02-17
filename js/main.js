import { fetchNews } from "./apiService.js";
import { createNewsCard } from "./newsCard.js";
import { showSkeletons, removeSkeletons } from "./skeleton.js";
import { filterBySource } from "./filter.js";
import { sortByDate } from "./sort.js";

const container = document.getElementById("newsContainer");
let articles = [];

async function loadNews() {
    container.innerHTML = "";
    showSkeletons(container, 6);

    const [newsAPI, guardianAPI, nytAPI] = await fetchNews();
    articles = [...newsAPI.articles, ...guardianAPI.results, ...nytAPI.results];

    removeSkeletons();
    displayNews(articles);
}

function displayNews(filteredArticles) {
    container.innerHTML = "";
    filteredArticles.forEach(article => {
        container.appendChild(createNewsCard(article));
    });
}

document.getElementById("sourceFilter").addEventListener("change", (event) => {
    const selectedSource = event.target.value;
    if (selectedSource === "all") {
        displayNews(articles);
    } else {
        displayNews(filterBySource(articles, selectedSource));
    }
});

document.getElementById("sortByDate").addEventListener("click", () => {
    displayNews(sortByDate(articles));
});

loadNews();
