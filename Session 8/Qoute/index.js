let Randomize
let Reload = document.getElementById("load");
let qoute = document.getElementById("quote");
let author = document.getElementById('author');

Reload.addEventListener("click",() => {
    h();
})
function h() {
 Randomize = x[Math.floor(Math.random()*x.length)];
 qoute.innerHTML= Randomize.quoteText ;
 author.innerHTML= Randomize.quoteAuthor;
};
