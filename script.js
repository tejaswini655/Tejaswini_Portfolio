const words = [
    "Python Developer",
    "Full Stack Learner",
    "AI Enthusiast",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#081b29";
    } else {
        header.style.background = "rgba(0,0,0,.6)";
    }

});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});
