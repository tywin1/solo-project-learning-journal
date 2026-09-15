import { posts } from "./posts.js"
import { formatDate } from "./utils.js";

const journalContainer = document.getElementById("journal-container");
const mediaQuery = window.matchMedia("(min-width: 768px)");
let visibleCount = mediaQuery.matches ? 4 : 3;

mediaQuery.addEventListener("change", () => {
    const minimumVisibleCount = mediaQuery.matches ? 4 : 3;
    visibleCount = Math.max(visibleCount, minimumVisibleCount);
    renderPosts();
});

function getHtml() {
    if (!posts || posts.length === 0) {
        return `<p>No posts available.</p>`;
    }

    const visiblePosts = [...posts]
                        .reverse()
                        .slice(0, visibleCount);
    let html = visiblePosts.map(post => `
        <div class="journal-post">
            <div class="journal-post-content">
                <img class="journal-post-image" src="${post.image}" alt="${post.title}">
                <div class="journal-titledate-wrapper">
                <h2 class="journal-post-title">${post.title}</h2>
                <time class="journal-post-date" datetime="${post.date}">
                ${formatDate(post.date)}
                </time>
                </div>
                <hr>
                <p class="journal-post-content-text">${post.content[0]}</p>
                <a class="journal-post-link" href="post.html?id=${post.id}">Click to view post</a>
            </div>
        </div>
    `).join('');

    if (visibleCount < posts.length) {
        html += `<button id="load-more">Load More</button>`;
    }       

    return html;
}

function renderPosts() {
    if (journalContainer) {
        journalContainer.innerHTML = getHtml();
    }
}

if (journalContainer) {
    journalContainer.addEventListener("click", event => {
        if (event.target.id === "load-more") {
            visibleCount += 3;
            renderPosts();
        }
    });

    renderPosts();
}