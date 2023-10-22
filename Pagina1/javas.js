document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.href;

    // Obtén todos los enlaces del menú
    var menuLinks = document.querySelectorAll("#menu a");

    // Itera a través de los enlaces
    menuLinks.forEach(function(link) {
        if (currentLocation.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
});