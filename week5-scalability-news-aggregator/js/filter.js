export function filterBySource(articles, source) {
    return articles.filter(article => {
        if (source === "newsAPI") {
            return "author" in article && "source" in article; // NewsAPI articles have an 'author' field
        }
        if (source === "guardianAPI") {
            return "sectionId" in article && "webTitle" in article; // Guardian articles have 'sectionId'
        }
        if (source === "theNewsAPI") {
            return "uuid" in article && "title" in article; // The News API articles have 'uuid'
        }
        return false;
    });
}
