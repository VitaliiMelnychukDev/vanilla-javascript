//Location object. It contains href, host, pathname, etc
console.log("Location object: ");
console.log("Href: " + window.location.href);
console.log("Host: " + window.location.host);
console.log("Origin: " + window.location.origin);
console.log("Port: " + window.location.port);
console.log("Protocol: " + window.location.protocol);

//History object //methods back - go back one URL, forward - go next URL, pushState - add to history
console.log("\nHistory object: ");
console.log("History length: " + window.history.length);
console.log("History state: " + window.history.state);

//Navigator object. It contains information about browser.
console.log("\nNavigator object: ");
console.log("cookieEnabled: " + window.navigator.cookieEnabled);
console.log("appName: " + window.navigator.appName);
console.log("appCodeName: " + window.navigator.appCodeName);
console.log("Product: " + window.navigator.product);
console.log("app version: " + window.navigator.appVersion);
console.log("user agent: " + window.navigator.userAgent);
console.log("platform: " + window.navigator.platform);
console.log("language: " + window.navigator.language);
console.log("online: " + window.navigator.onLine);


//Cookies
console.log('\nCookies');

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

setCookie("greeting", "Hello", 1000);
console.log("Test get cookies greeting: " + getCookie("greeting"));

//Javascript popups.
console.log("\nPopups: ");
alert("Alert popup");
console.log("Confirm pressed: " + confirm("Press some button"));
console.log("User entered: " + prompt("Enter some text."));

