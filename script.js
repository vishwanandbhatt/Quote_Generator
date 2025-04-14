const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn  = document.getElementById('new-quote')


// Get quotes from an API

let apiQuotes = [];

// Show new quote 

function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //  Check if author text is blank and replace it with unknown
    if (!quote.author) {
        authorText.textContent = "Unknown" ;
    } else {
        authorText.textContent = quote.author;
    }
    quoteText.textContent = quote.text;
}

async function getQuotes() {
    const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        // console.log(apiQuotes);
        newQuote();
    } catch (error) {
        // handle error

    }
}

function tweetQuote () {
    const twitterURL = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}` ;
    window.open(twitterURL, '_blank');
}

// Event Listeners for btns

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();