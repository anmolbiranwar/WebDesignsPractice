const API_KEY="6f21bc8a66854dc18cd05c1c31a2c579";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=> fetchNews("India"));

async function fetchNews(query){
    const res=await fetch(`${url}&apiKey${API_KEY}`);
    const data=await res.json();
    console.log(data);
}