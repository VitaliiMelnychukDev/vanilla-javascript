const positionOfLastSlash = window.location.href.lastIndexOf("/");
const baseUrl = window.location.href.substr(0, positionOfLastSlash + 1);

const ulItems = window.document.querySelectorAll("#left-menu ul li .movie-headline");
ulItems.forEach((el) => {
    el.addEventListener("click", (el) => {
        const itemName = el.currentTarget.parentElement.dataset.movie;
        if (itemName === "avatar") {
            showArticleMovieDetail();
        } else if (itemName === "a-beautiful-mind") {
            showABeautifulMindMovieDetail();
        } else if (itemName === "avengers-infinity-war") {
            showAvengersInfinityWarMovieDetail();
        }
    });
});

function showArticleMovieDetail() {
    const avatarUrl = baseUrl + "avatar" + ".html";
    fetch(avatarUrl, {
        method: "GET"
    }).then(result => {
        if (result.status === 200) {
            return result.json();
        } else {
            showPage404();
        }
    }).then(data => {
        setMovieHtmlElement(data.html);
    }).catch(() => {
        showPage404();
    });
}

async function showABeautifulMindMovieDetail() {
    const aBeautifulMovieUrl = baseUrl + "a-beautiful-mind" + ".html";
    try {
        const result = await fetch(aBeautifulMovieUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: 'message=hello'
        });
        if (result.status === 200) {
            const html = await result.text();
            setMovieHtmlElement(html);
        } else {
            showPage404();
        }
    } catch (e) {
        showPage404();
    }
}

function showAvengersInfinityWarMovieDetail() {
    const AvengersInfinityWarUrl = baseUrl + "avengers-infinity-war" + ".html";

    const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    const xhr = new XHR();
    xhr.timeout = 1000;
    xhr.open("GET", AvengersInfinityWarUrl, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            showPage404();
            return;
        }

        if (xhr.status === 200) {
            setMovieHtmlElement(xhr.responseText);
        } else {
            showPage404();
        }
    };

    xhr.onerror = function () {
        showPage404();
    }

}

function showPage404() {
    setMovieHtmlElement("404: Movie doesn't exist.");
}

function setMovieHtmlElement(html) {
    const movieHtmlElement = window.document.querySelector(".movie-html");
    movieHtmlElement.innerHTML = html;
}
