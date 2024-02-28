async function includeMenu() {
    const response = await fetch('/menu.html');
    const data = await response.text();

    // Wstaw treść menu do elementu o id "menu-container"
    document.getElementById('menu-container').innerHTML = data;

    // Funkcja pomocnicza do dynamicznego dodawania skryptów z atrybutem defer
    function addScriptWithDefer(src) {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
        return new Promise((resolve) => {
            script.onload = resolve;
        });
    }

    // Dodaj skrypty z atrybutem defer
    await addScriptWithDefer('scripts/responsive-menu.js');
    await addScriptWithDefer('scripts/toggle-language-pc.js');
    await addScriptWithDefer('scripts/toggle-language-phone.js');
    await addScriptWithDefer('scripts/cookie-manager.js');

    // Tutaj umieść kod, który ma być wykonany po załadowaniu wszystkich skryptów
}

includeMenu();