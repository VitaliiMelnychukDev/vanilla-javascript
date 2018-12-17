const leftMenuLies = document.querySelectorAll("#left-menu ul .article-headline");

leftMenuLies.forEach((value) => {
    value.addEventListener("mouseover", (e) => {
        e.currentTarget.parentElement.querySelector(".li-popup").classList.remove("hidden");
    });

    value.addEventListener("mouseout", (e) => {
        e.currentTarget.parentElement.querySelector(".li-popup").classList.add("hidden");
    });

    value.addEventListener('click', (e) => {
        let articleHeadline = e.currentTarget.parentElement.dataset.article;
        buildArticleElement(articles[articleHeadline]);
        document.querySelectorAll("article .detail-item .detail-name").forEach((el) => {
            el.classList.remove("hidden");
        });
    })
});


function buildArticleElement(article) {
    const articleHeadline = document.querySelector("article .article-headline");
    articleHeadline.textContent = article.headline;

    const articleAuthor = document.querySelector("article .article-author .detail-value");
    articleAuthor.textContent = article.author;

    const articleDate = document.querySelector("article .article-date .detail-value");
    articleDate.textContent = article.date;

    const articleContent = document.querySelector("article .article-content");
    articleContent.textContent = article.content;
}