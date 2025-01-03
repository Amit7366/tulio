
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const overlayMenu = document.querySelector(".overlay");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
}

// Close Navbar Menu on Click Links
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        burgerMenu.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
            overlayMenu.classList.remove("is-active");
        }
    }
});


// dark and light mood toggle

const toggleButton = document.getElementById('switch');
const lightIcon = document.querySelector('.switch-light');
const darkIcon = document.querySelector('.switch-dark');

// Check and apply the saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'inline';
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');

    // Toggle icon visibility
    lightIcon.style.display = isDarkMode ? 'none' : 'inline';
    darkIcon.style.display = isDarkMode ? 'inline' : 'none';

    // Save the theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
