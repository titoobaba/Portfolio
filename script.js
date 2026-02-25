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

window.onload = function () {
    typeEffect();
};


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


// Resume Download Button
document.addEventListener("DOMContentLoaded", function () {
    const resumeBtn = document.getElementById("resumeBtn");

    if (resumeBtn) {
        resumeBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const link = document.createElement("a");
            link.href = "assets/24011cseai0095_Resume.pdf"; // Change if needed
            link.download = "24011cseai0095_Resume.pdf"; // Your file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
