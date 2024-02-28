function getCookieValue(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}


function setDefaultLanguage() {
    const htmlElement = document.querySelector('html');
    const langElements = document.querySelectorAll('[lang]');
    var langVal = getCookieValue("language");

    if (langVal !== null) {
        htmlElement.setAttribute('lang', langVal);
        refreshDefaultPC();
        refreshDefaultPhone();
        langElements.forEach(element => {
            const lang = element.getAttribute('lang');
            element.style.display = lang === langVal ? 'block' : 'none';
        });
    }
    else {
        htmlElement.setAttribute('lang', 'pl-PL')
        document.cookie = `language=pl-PL; expires=Thu, 31 Dec 2025 00:00:00 UTC;`;
        langElements.forEach(element => {
            const lang = element.getAttribute('lang');
            element.style.display = lang === "pl-PL" ? 'block' : 'none';
        });
    }
}

function refreshDefaultPC() {
    // Pobierz element select za pomocą ID
    var selectElement = document.getElementById("lang-sel-pc");
    // Ustaw domyślną opcję na podstawie wartości (np. "option2")
    var desiredValue = getCookieValue("language");

    // Znajdź opcję o danej wartości
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === desiredValue) {
            selectElement.selectedIndex = i;
            break;
        }
    }
}

function refreshDefaultPhone() {
    // Pobierz element select za pomocą ID
    var selectElement = document.getElementById("lang-sel-phone");
    // Ustaw domyślną opcję na podstawie wartości (np. "option2")
    var desiredValue = getCookieValue("language");

    // Znajdź opcję o danej wartości
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === desiredValue) {
            selectElement.selectedIndex = i;
            break;
        }
    }
}

setDefaultLanguage();
