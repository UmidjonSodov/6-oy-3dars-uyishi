const BASE_URL = "https://newsapi.org/v2/everything?q=tesla&from=2025-09-18&sortBy=publishedAt&apiKey=072a027b4d0642bf9aea3f353960ed3b";

export const fetchNews = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;    
};
