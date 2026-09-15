import { posts } from "./posts.js"
import { formatDate } from "./utils.js";

const recentPostContainer = document.getElementById("recent-post-container");
const previousButton = document.getElementById("previous-post");
const nextButton = document.getElementById("next-post");
const currentPostId = Number(new URLSearchParams(window.location.search).get("id"));
const recentPosts = posts.filter(post => post.id !== currentPostId);
let currentIndex = recentPosts.length - 1;

function  renderRecentPost() {
    const post = recentPosts[currentIndex];

    recentPostContainer.innerHTML = `
    <article class="recent-post">
        <img class="recent-post-image" src="${post.image}" alt="${post.title}">
        <h3 class="recent-post-title">${post.title}</h3>
        <time class="recent-post-date" datetime="${post.date}">${formatDate(post.date)}</time>
        <a class="recent-post-link" href="post.html?id=${post.id}">Read post</a>
        </article>
    `;
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === recentPosts.length - 1;
}
previousButton.addEventListener("click", () => {
    if (currentIndex > 0) {
    currentIndex -= 1;
    renderRecentPost();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < recentPosts.length -1) {
    currentIndex += 1;
    renderRecentPost();
    }
})
renderRecentPost();