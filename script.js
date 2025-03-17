document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});

function compartir() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: "Visita este portafolio y descubre proyectos increíbles. 🚀",
            url: window.location.href
        })
        .then(() => console.log("Compartido con éxito"))
        .catch((error) => console.log("Error al compartir:", error));
    } else {
        alert("Tu navegador no admite la función de compartir.");
    }
}