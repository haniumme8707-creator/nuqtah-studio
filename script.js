const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

// Open menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
});

// Close button
closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

// Close after clicking any link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
