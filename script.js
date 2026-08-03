const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.remove("active");
    });
});
