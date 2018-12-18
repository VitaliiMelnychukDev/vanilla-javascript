const leftMenuLies = document.querySelectorAll("#left-menu ul .article-headline");

leftMenuLies.forEach((value) => {
    value.addEventListener("mouseover", (el) => {
        el.currentTarget.parentElement.querySelector(".li-popup").classList.remove("hidden");
    });

    value.addEventListener("mouseout", (el) => {
        el.currentTarget.parentElement.querySelector(".li-popup").classList.add("hidden");
    });

    value.addEventListener("click", (e) => {
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

const emailForm = document.forms.emailForm;

emailForm.querySelectorAll(".text-input").forEach((input) => {
    input.onfocus = function () {
        input.classList.add("input-onfocus");
    };
    input.onblur = function () {
        input.classList.remove("input-onfocus");
    };

    input.oninput = function () {
        input.classList.remove("input-error");
    }
});

emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let error = false;
    const inputName = e.currentTarget.elements.name;
    if (inputName.value.length < 3) {
        inputName.classList.add("input-error");
        error = true;
    }

    const inputQuestion = e.currentTarget.elements.question;
    if (inputQuestion.value.length < 10) {
        inputQuestion.classList.add("input-error");
        error = true;
    }

    const inputEmail = e.currentTarget.elements.email;
    if (!isStrEmail(inputEmail.value)) {
        inputEmail.classList.add("input-error");
        error = true;
    }

    if (!error) {
        const formHint = emailForm.querySelector(".hint");
        formHint.classList.remove("hidden");
        formHint.textContent = "There is no opportunity to ask questions at the moment. Please try later!";
    }
});

function isStrEmail(str) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
}
