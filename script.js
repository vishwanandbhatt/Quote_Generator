const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterbtn = document.getElementById('twitter')
const newQuotebtn  = document.getElementById('new-quote')




// Get quotes from an API

let apiQuotes = [];

// Show new quote 

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
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

getQuotes();