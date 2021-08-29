const loadQuotes = () =>{
    fetch("http://api.kanye.rest/")
    .then(res => res.json())
    .then(data => displayQuotes(data));
}

const displayQuotes = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote; 
    // for showing object here i have used "quote.quote"
}