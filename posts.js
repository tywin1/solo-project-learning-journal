export const posts = [
     {
        image: "images/stick man.jpg",
        title: "Learning through April",
        content: [
        "If you're reading this, \"Load More\" functionality is working. Hooray!"
        ],
        date: "2026-04-01",
        id: 1
    },
     {
        image: "images/stick man.jpg",
        title: "Learning through May",
        content: [
        "If you're reading this, \"Load More\" functionality is working. Hooray!"
        ],
        date: "2026-05-01",
        id: 2
    },
     {
        image: "images/stick man.jpg",
        title: "Learning through June",
        content: [
        "If you're reading this, \"Load More\" functionality is working. Hooray!"
        ],
        date: "2026-06-01",
        id: 3
    },
    {
        image: "images/stick man.jpg",
        title: "Learning through July",
        content: [
        "Concepts and projects I learned through July - very basic stuff - the simple elements of websites, basic layouts and styling.  The Basketball Scoreboard project was the most difficult one - figuring out the layout and the Javascript to make the buttons work.",
        "The rest sort of fell into place once I understood it - Blackjack, a random password generator (including copy to clipboard function), and a unit converter.  The one that was most out of my comfort zone was understanding how to use Firebase DB (at a basic level).  This would come in handy for a future solo project"
        ],
        date: "2026-07-01",
        id: 4
    },
    {
        image: "images/stick man.jpg",
        title: "Learning through August",
        content: [
        "Learned a lot more of the more difficult CSS/JS concepts.  Position: absolute was a bit of a head scratcher.  Meme Picker took a bit of understanding, there was a lot of new JS code to learn and the syntax can be difficult - especially when you start writing individual functions - understanding how they all work together is challenging.",
        "You'd think given how simple the end result is (click a radio button to select a mood and get a random cat image), the reality of the code behind the scenes is pretty complex.  Oldagram and Twimba were my first introductions to rendering a page based on database content - I think the way it works is pretty awesome (its how this site works too!)",
        "Twimba's stretch goals introduced me to Firebase DB, and running all functions of the page through it - very cool.  Somewhat complex but also kind of simple given what it does.  Lastly the Ordering App - learned a better way to store and use a colour pallette.  LOTS of CSS, lots of JS - restricting data in forms, hiding the modal if you click the window behind it, hiding/displaying lots of elements based on button clicks, and a cleaner-looking UI."
        ],
        date: "2026-08-01",
        id: 5
    },
    {
        image: "images/stick man.jpg",
        title: "Learning through September",
        content: [
        "Slowed down a little bit in September, more learning and not as much big projects - I really wanted to dive into understanding APIs and how to send/receive data.  The responsive splash page was useful, learning how grid layouts function - very cool and a little different to flexboxes.",
        "I then switched to creating two Chrome extensions for work use -",
        "- A bike specifications scraper for our brands, that exports to CSV - works great and will save hours (and hours and hours) of work compared to the previous method I used. (Can you guess how I used to do it?  It involved CTRL + C and CTRL + V repeatedly.)",
        "- A general-purpose extension for Netsuite that has a \"New Sales Order\" tab with pre-filled data for quicker order creation and an export to CSV function.  And an \"Item Lookup\" tab that searches via desc/sku/apn, displays the result with pricing/gp% info and stock info (including incoming) and for bikes it also displays specifications pulled from the parent code."
        ],
        date: "2026-09-01",
        id: 6
    },
    {
        image: "images/stick man.jpg",
        title: "Learning through September (continued)",
        content: [
        "Got the two Scrimba solo projects sorted - this Learning Journal, and a Color Picker that uses an API to fetch color palettes.  Thought I'd learn a bit more about tidier CSS practices so dived into root variables for this journal project (I think that's what they're called?) so easy changes in those variables spread across an entire site to keep things consistent.  Super cool - I'll be designing pages like from the beginning now.",
        "Enlisted AI help to improve my work extensions project otherwise -",
        "- Instead of three separate extensions (did that for proof of concept), it's now one extension with a tab for each function.",
        "- Unified the design across the three separate extensions - the UI was a bit of a mess, it's much cleaner now.  There's also no headers anymore (the tab names are clear enough).",
        "- The three extensions still function somewhat independently, to make maintenance or changes easier.  Running all of them from one codebase would be too much work, better to be somewhat modular.",
        "One other project I began is a page where you tick a box for the function you want (the first function I built is a bike specifications cleaner), and then drag the relevant csv or excel file into the drop target.  It cleans up the text, prefixes the file with cleaned_ and autodownloads it.",
        "Going to dig a bit deeper into this - there's a lot of repetitive cleanup work it could do internally to save a lot of time.  Just need to get more solid use cases for where it would be needed and useful."
        ],
        date: "2026-09-20",
        id: 7
    },
    {
        image: "images/stick man.jpg",
        title: "Learning through October",
        content: [
        "Lots of learning about APIs in the past week (lets include some of September as well).  The War card game project  was a very cool way to understand fetching/displaying data from an API.  I feel like it solidified my understanding of how to build and nest Javascript functions as well (was a little hazy before).",
        "I veered off-track a little in terms of completing Scrimba stuff - for good reason though.  Firstly, I got stuck into creating a file drag-and-drop page (mostly thanks to AI!) that 1. takes supplier specification data and cleans up all the text to make it more suitable for our b2b, 2. reformats it into a CSV that NetSuite can immediately upload and 3. immediately downloads it.  Incredibly useful and saves a LOT of time.  Next step is to figure out an effective way to look up the supplier bike descriptions, and tie them to a parent SKU.",
        "Secondly, I created a personal JavaScript/CSS \"cheat sheet\" to quickly reference commonly used functions, properties, and patterns.  It displays 3 examples - beginner, intermediate, and advanced, with the code on the left and the result on the right.  This saves me having to constantly Google \"how to do X in JavaScript\" or lookup and reunderstand grid or flex selectors and properties and all that complexity.",
        "Thirdly (that sounds weird), I got AI to create the boilerplate for a Call Logger extension which is used all the time at work now. It has a couple of cool features that makes logging a call quicker, but mainly it was useful for learning how the Javascript works in tandem with the Apps Script that runs on the logger sheet, so I've effectively put my new API knowledge into real-world use, which is great.  AU is using it now as well so I'm pretty stoked about that.  3 months ago, I had no idea what an API really was, let alone how it works, or how to build one and use it.",
        "Similar to the above, one more thing I noted down to reference when necessary is a CSS best-practise explainer.  This'll (I hope) fast-track my understanding of how to structure HTML & CSS efficiently from the get-go, in a standardized modern-use kind of way, instead of learning through trial and error every time.",
        "Last thing of note, I'm currently working on the Movie Database solo project (using API data from OMDB) and am applying all the new Javascript, HTML and CSS best-practices as I go.  No stretch goals were given for this one, so I'll make them up when I see the end-result and see where it can be improved."
        ],
        date: "2026-10-03",
        id: 8
    }
]