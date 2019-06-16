const quotes =[
    {
        name:'author1',
        quote:'quote1'
    },
    {
        name:'author2',
        quote:'quote2'
    },
    {
        name:'author3',
        quote:'quote3'
    }
]

const quoteBtn = document.querySelector('#quotesBtn');
const quoteAuthor = document.querySelector('#quoteAuther');
const quote = document.querySelector('#quote');

console.log('quoteAuthor',quoteAuthor)
console.log('quote.innerHTML',quote)


quoteBtn.addEventListener('click', displayquote);

function displayquote(){
    let number = Math.floor(Math.random () * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}