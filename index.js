let quote = document.getElementById("content");
let auther = document.getElementById("auther");
// fetch api 
let randomQuote = "https://api.quotable.io/random";
async function getquote(url) {
  let response = await fetch(url);
  let data = await response.json();
 
  quote.innerHTML = data.content;
  auther.innerHTML = data.author;
}
getquote(randomQuote);

// add event on button 