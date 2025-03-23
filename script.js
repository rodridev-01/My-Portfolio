document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});

function compartir() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: "Echa un vistazo a este portfolio.",
            url: window.location.href
        })
        .then(() => console.log("Compartido con éxito"))
        .catch((error) => console.log("Error al compartir:", error));
    } else {
        alert("Tu navegador no admite la función de compartir.");
    }
}

function toggleCard(card) {
    let openCard = document.querySelector(".card.active");
    if (openCard && openCard !== card) {
        openCard.classList.remove("active");
        openCard.querySelector(".expand-icon").textContent = "+";
    }

    card.classList.toggle("active");

    let icon = card.querySelector(".expand-icon");
    icon.textContent = card.classList.contains("active") ? "−" : "+";
}
