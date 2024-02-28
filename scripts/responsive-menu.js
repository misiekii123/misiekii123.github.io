function initResponsiveMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const phoneMenu = document.querySelector(".phone-menu");

    menuToggle.addEventListener("click", function() {
        phoneMenu.classList.toggle("active");
    });
}

//document.addEventListener("DOMContentLoaded", initResponsiveMenu);
initResponsiveMenu();
