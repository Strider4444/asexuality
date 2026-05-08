const articles = document.querySelectorAll("article");

for (let i = 0; i < articles.length; i++) {
    randomness(i)
}

function randomness(i) {
    articles.item(i).style.marginTop = Math.random() * 20 + "%"
    articles.item(i).style.marginLeft = Math.random() * 10 + "%"
    articles.item(i).style.marginRight = Math.random() * 10 + "%"
}