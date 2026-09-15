import { posts } from "./posts.js"
import { formatDate } from "./utils.js";

const postContainer = document.getElementById("post-container");
const postId = Number(new URLSearchParams(window.location.search).get("id"));
const post = posts.find(post => post.id === postId);

if (post) {
    document.title = `${post.title} | Front-End Learning Journal`;
    postContainer.innerHTML = `
    <div class="journal-post-content">
        <img class="journal-post-image" src="${post.image}" alt="${post.title}">
            <div class="journal-titledate-wrapper">
                <h1 class="journal-post-title">${post.title}</h1>
                <time class="journal-post-date" datetime="${post.date}">
                ${formatDate(post.date)}
                </time>
            </div>
            <hr>
        ${post.content
            .map(paragraph => `<p class="journal-post-content-text">${paragraph}</p>`)
            .join("")}
        </div>
        `;
    } else {
        document.title = "Post Not Found | Front-End Learning Journal";
        postContainer.innerHTML = "<p>Post not found.</p>";
    }
