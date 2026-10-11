/* =========================================================
   SHALINI ADE — PORTFOLIO
   SCRIPT.JS
   ========================================================= */


/* ================= NAVBAR ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });

}


/* ================= TYPING EFFECT ================= */

const typing = document.getElementById("typing");

const words = [
    "AI / ML Student",
    "Developer",
    "Problem Solver",
    "Project Builder",
    "Curious Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function type() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(type, 1200);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        type,
        deleting ? 45 : 80
    );

}

type();


/* ================= SCROLL REVEAL ================= */

const elements = document.querySelectorAll(
    ".section, .skill, .project, .experience-card, .interests div"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});


/* ================= MOUSE EFFECT ================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual && window.innerWidth > 900) {

    document.addEventListener("mousemove", event => {

        const x =
            event.clientX / window.innerWidth - 0.5;

        const y =
            event.clientY / window.innerHeight - 0.5;

        heroVisual.style.transform =
            `translate(${x * 12}px, ${y * 12}px)`;

    });

}


/* ================= BUTTON RIPPLE POSITION ================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        button.style.setProperty("--x", `${x}px`);
        button.style.setProperty("--y", `${y}px`);

    });

});


/* ================= ESCAPE MOBILE MENU ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && navLinks) {

        navLinks.classList.remove("open");

    }

});