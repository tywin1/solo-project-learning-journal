const postContainer = document.getElementById("post-container");

if (postContainer) {
    postContainer.innerHTML = `
        <div class="journal-post-content about-post-content">
            <div class="about-post-header">
                <img class="profile-picture" src="images/avatar-ramon.png" alt="Ramon">
                <h1 class="about-post-title">Hi, I'm Ramon.</h1>
            </div>

            <hr>

            <p class="journal-post-content-text">This is my learning journal, part of a solo project at Scrimba. After several months of learning, a lot of things are starting to click - though a new project always begins with "wait, how do I do this again?". After that it's smooth(ish) sailing - I'll be stoked when it starts to feel second nature.</p>

            <h2 class="journal-post-title">What I'm learning</h2>

            <p class="journal-post-content-text">Front-end development. <strong>JavaScript, CSS, HTML, APIs</strong>, all that good stuff.  Breaking down how familiar I am with each of them:</p>

            <p class="journal-post-content-text"><strong>JavaScript</strong> - Makes intuitive sense to me now, though a lot of functions are tricky - like nested functions, or the Recent Posts section of this very site. The code to make the left/right arrows function correctly and become disabled if there's no more posts was not what I'd call obvious to figure out - but struggling through it is pretty enjoyable.</p>

            <p class="journal-post-content-text"><strong>CSS</strong> - More difficult for me to remember at times, because there are so many properties, selectors, and layout techniques to keep track of.  Where do I use flex/grid?  Which nested element gets flex as well?  Which one do you align?  It's a bit complex right now but will hopefully make sense with a bit of time.</p>

            <p class="journal-post-content-text"><strong>HTML</strong> - This is the easiest, it makes intuitive sense for the most part, and generally isnt that complex.  It's just a container to hold Javascript and CSS.</p>

            <p class="journal-post-content-text"><strong>APIs</strong> - Still new to how to receive and send data with APIs but it also makes a lot of sense intuitively - the difficulty comes with using the correct syntax.</p>
        </div>
    `;
}