changeLanguagePC();

function changeLanguagePC() {
    const htmlElement = document.querySelector('html');
    const langElements = document.querySelectorAll('[lang]');
    const langSelect = document.getElementById('lang-sel-pc');

    // Ustawienie początkowej wartości listy rozwijalnej na podstawie aktualnego języka
    langSelect.value = htmlElement.getAttribute('lang');

    // Znajdź opcję odpowiadającą początkowemu językowi (np. "pl") i ustaw atrybut selected
    const defaultOption = langSelect.querySelector(`option[value="${langSelect.value}"]`);
    if (defaultOption) {
        defaultOption.selected = true;
    }


    // Iteruj przez elementy i ukryj te, które nie są dla domyślnego języka
    langElements.forEach(element => {
        const lang = element.getAttribute('lang');
        element.style.display = lang === langSelect.value ? 'block' : 'none';
    });

    // Obsługa zmiany wartości w liście rozwijalnej
    // Change the event listener from 'click' to 'change'
    langSelect.addEventListener('change', function () {
        const newLang = langSelect.value;
        document.cookie = `language=${newLang}; expires=Thu, 31 Dec 2024 00:00:00 UTC;`;

        // Ustaw nowy język jako atrybut lang dla tagu html.
        htmlElement.setAttribute('lang', newLang);

        // Iteruj przez elementy i ustaw ich widoczność na podstawie wybranego języka
        langElements.forEach(element => {
            const lang = element.getAttribute('lang');
            element.style.display = lang === newLang ? 'block' : 'none';
        });
    });

}