const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const quoteBtn = document.querySelector(".quote-btn");

function getQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((data) => {
      if ((data.statusCode = 200)) {
        return data.json();
      }
    })

    .then((data) => {
      quoteText.innerText = data.data[0].quoteText;
      quoteAuthor.innerText = data.data[0].quoteAuthor;
    });

  quoteBtn.addEventListener("click", getQuote);
}
getQuote();
