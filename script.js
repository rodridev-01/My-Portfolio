const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.side-menu ul li a');

menuToggle.addEventListener('click', function () {
  sideMenu.style.left = '0';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
  sideMenu.style.left = '-450px';
  overlay.style.display = 'none';
});

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    sideMenu.style.left = '-250px';
    overlay.style.display = 'none';
  });
});


let lastScrollY = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
        header.classList.add("hidden"); // Oculta el header si bajas
    } else {
        header.classList.remove("hidden"); // Muestra el header si subes
    }
    lastScrollY = window.scrollY;
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
