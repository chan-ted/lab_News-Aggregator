export function sortByDate(articles) {
    return articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
