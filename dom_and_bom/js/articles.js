const articles = [];
articles["css3"] = {
    headline: "css3",
    short_description: "CSS3 is a new CSS standart",
    author: "Taras",
    content: "" +
        "CSS3 is a new standard of CSS. There was added a lot if things like animation, " +
        "gradient,etc Unlike CSS 2, which is a large single specification defining various features, " +
        "CSS 3 is divided into several separate documents called 'modules'" +
        "Each module adds new capabilities or extends features defined in CSS 2, preserving backward compatibility. " +
        "Work on CSS level 3 started around the time of publication of the original CSS 2 recommendation." +
        " The earliest CSS 3 drafts were published in June 1999.[44]",
    date: "21-09-2017"
};

articles["html5"] = {
    headline: "html5",
    short_description: "HTML5 came in 2014 year",
    author: "Oleg",
    content: "HTML5 came in 2014 year. There were added new tags like <header>, <footer>, <article>, etc ",
    date: "29-03-2018"
};

articles["es6"] = {
    headline: "es6",
    short_description: "ES6 gives opportunity to create classes",
    author: "John",
    content: "ES6 gives opportunity to create classes, promises, generators, etc.",
    date: "10-02-2018"
};

function buildArticleNavItem(article) {
    const articleItem = document.createElement("li");
    articleItem.dataset.article = article.headline;

    const itemHeadline = document.createElement("span");
    itemHeadline.classList.add("article-headline");
    itemHeadline.textContent = article.headline;
    articleItem.appendChild(itemHeadline);

    const itemHint = document.createElement("div");
    itemHint.classList.add("li-popup");
    itemHint.classList.add("hidden");
    itemHint.appendChild(document.createTextNode(article.short_description));

    const hintEnd = document.createElement("span");
    hintEnd.classList.add("read-article");
    hintEnd.appendChild(document.createTextNode("..."));
    itemHint.appendChild(hintEnd);

    articleItem.appendChild(itemHint);

    return articleItem;
}

const articlesList = document.querySelector("#left-menu ul");

for (let articleKey in articles) {
    articlesList.appendChild(buildArticleNavItem(articles[articleKey]));
}