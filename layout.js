const headerMarkup = `
            <div class="site-header-container"> 
            <img src="./images/books.png" alt="books image">
            <h1 class="site-title">Front-End Learning Journal</h1>
            <nav aria-label="Main navigation">
			    <a href="index.html">Home</a>
			    <a href="about.html" ${window.location.pathname.endsWith('/about.html') ?  'aria-current="page"' : ""}>About</a>
		    </nav>
        </div>
`;

const footerMarkup = `
  <div class="site-footer">
    Built with vague understanding by
    <a href="https://github.com/tywin1"  rel="noreferrer" target="_blank">Ramon E</a>
    in 2026
  </div>
`;

const footerContainer = document.getElementById("footer");
const siteHeaderContainer = document.getElementById("site-header");

if (siteHeaderContainer) {
    siteHeaderContainer.innerHTML = headerMarkup;
}
if (footerContainer) {
    footerContainer.innerHTML = footerMarkup;
}
