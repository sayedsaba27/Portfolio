
// =================================
// SABA BANU - PORTFOLIO INTERACTIONS
// =================================

// Typing animation
const typingElement = document.getElementById("typing-text");

const roles = [
  "Computer Science Student",
  "Aspiring Web Developer",
  "Cybersecurity Enthusiast",
  "Future IT Professional"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  typingElement.textContent = currentRole.substring(0, charIndex);

  if (!deleting) {
    charIndex++;

    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    charIndex--;

    if (charIndex < 0) {
      charIndex = 0;
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();

// Scroll reveal animation
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Floating background particles
const particleContainer = document.getElementById("particles");

if (particleContainer) {
  for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 5 + "s";
    particle.style.animationDuration = (4 + Math.random() * 5) + "s";

    particleContainer.appendChild(particle);
  }
}

// Current year in footer
const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("nav-links");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });
}

console.log("Saba Banu Portfolio Loaded Successfully!");
