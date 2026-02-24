// Typing Effect
const text = "BTech AIML Student | Aspiring AI Engineer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;


// Scroll Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        if (top > offset) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});
