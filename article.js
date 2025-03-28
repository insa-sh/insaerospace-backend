import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const token = "03ac41323372c84ab3dcecf66ea77746181e035f239e1bc9e7a8b27e0906ca7fe20b9a5ef2da7985337316b4199ea2e9b96c6c8f989c6b901ae9f4ee37f65be01fb20864035a711cde28b2aa6750951ce79abd8b31c57ebc09ec036ef092f430e933882aac27de5f493d4b7b641a3f54eb42adaef9e0f693cfb3c96be6b7ef44";

async function fetchArticles() {
    try {
        const response = await fetch('http://127.0.0.1:1337/api/articles?populate[0]=author&populate[1]=content', {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        // console.log(data); // Log the entire response to see its structure
        const articles = data.data; // Access the articles array
        if (Array.isArray(articles)) {
            document.body.innerHTML = articles.map(article => {
                const date = new Date(article.createdAt);
                const formattedDate = date.toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                const content = article.content.map(item => marked(item.body)).join('<br>'); // Convert Markdown to HTML
                return `
                    <div class="article">
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <p><strong>Auteur:</strong> ${article.author ? article.author.name : 'Anonyme'}</p>
                        <p><strong>Date:</strong> ${formattedDate}</p>
                        <div>${content || 'No content available'}</div>
                    </div>
                `;
            }).join('');
        } else {
            console.error('Expected an array but got:', articles);
        }
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

fetchArticles();