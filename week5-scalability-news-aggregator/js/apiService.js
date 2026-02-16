const NEWS_API_KEY = "YOUR_NEWSAPI_KEY";
const GUARDIAN_API_KEY = "YOUR_GUARDIAN_API_KEY";
const NYT_API_KEY = "YOUR_NYT_API_KEY";

// API URLs
const NEWS_API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;
const GUARDIAN_API = `https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}`;
const NYT_API = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NYT_API_KEY}`;

export async function fetchNews() {
    try {
        const responses = await Promise.allSettled([
            fetch(NEWS_API),
            fetch(GUARDIAN_API),
            fetch(NYT_API)
        ]);

        const results = await Promise.all(
            responses.map(async (res, index) => {
                if (res.status === "fulfilled" && res.value.ok) {
                    return await res.value.json();
                } else {
                    console.warn(`API ${index + 1} failed.`);
                    return null;
                }
            })
        );

        return results;
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}
