// Tema
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const html = document.documentElement;
const icons = document.querySelectorAll('.theme-toggle i');

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

// Función para cambiar el tema
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
}

// Cambiar tema - botón principal
themeToggle.addEventListener('click', toggleTheme);

// Cambiar tema - botón móvil
themeToggleMobile.addEventListener('click', toggleTheme);

// Actualizar todos los iconos según el tema
function updateThemeIcons(theme) {
    icons.forEach(icon => {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// Ocultar/mostrar header al hacer scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
});

// Compartir
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

// Tarjetas
function toggleCard(card) {
    let openCard = document.querySelector(".tarjetas.active");
    if (openCard && openCard !== card) {
        openCard.classList.remove("active");
    }
    card.classList.toggle("active");
}
