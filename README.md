# solo-project-learning-journal
scrimba learning journal

This one was fun - rendering posts from an array to a post.html template that also defines the URL - didnt know websites could work that way.  So clean and easy(ish)!

"Recent Posts" was a neat function to add as well, though the code to make it work correctly was tricky (dont render current page, disable if at end of posts, etc)

Learned about kind of siloing JS stuff so it only runs if it needs to.  Other notes -

posts.js + index.html (array for rendering posts on main page), post.js + post.html for rendering a specific post
recent-posts.js for the recent posts mini box with arrows that dont move/resize when the previous/next post is rendered
layout.js for defining the header and footer to render on each page
about.js + about.html to function the same way as post.js + post.html
utils.js to format dates - function stays in one place but any page can import and invoke it
nav links have an underline to show what page you're on
3 posts load for small screens, 4 posts load for big screens.  "Load More" button loads 3 posts per click.

UI looks nice and is responsive, could do with more screen size variants but I stuck to 768px and 1280px as breakpoints
