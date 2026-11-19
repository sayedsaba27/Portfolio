
// Sayed Saba Banu — Portfolio interactions

document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // MOBILE NAVIGATION
  // ==============================

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

        menuToggle.textContent = "☰";

      });

    });

  }


  // ==============================
  // TYPING ANIMATION
  // ==============================

  const typingText = document.getElementById("typingText");

  const phrases = [
    "Cybersecurity",
    "Data Analysis",
    "Software Development",
    "Web Development",
    "Financial Technology"
  ];

  if (
    typingText &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    const type = () => {

      const phrase = phrases[phraseIndex];

      characterIndex += deleting ? -1 : 1;

      typingText.textContent =
        phrase.slice(0, characterIndex);

      let delay = deleting ? 42 : 78;

      if (
        !deleting &&
        characterIndex === phrase.length
      ) {

        deleting = true;
        delay = 1250;

      }

      else if (
        deleting &&
        characterIndex === 0
      ) {

        deleting = false;

        phraseIndex =
          (phraseIndex + 1) % phrases.length;

        delay = 350;

      }

      window.setTimeout(type, delay);

    };

    window.setTimeout(type, 700);

  }


  // ==============================
  // SCROLL REVEAL
  // ==============================

  const revealItems =
    document.querySelectorAll(".reveal");

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach(item => {

      revealObserver.observe(item);

    });

  }

  else {

    revealItems.forEach(item => {

      item.classList.add("visible");

    });

  }


  // ==============================
  // ACTIVE NAVIGATION
  // ==============================

  const sections =
    document.querySelectorAll("main section[id]");

  const navAnchors =
    document.querySelectorAll(".nav-links a");

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            navAnchors.forEach(anchor => {

              anchor.classList.toggle(
                "active",
                anchor.getAttribute("href") ===
                `#${entry.target.id}`
              );

            });

          }

        });

      },
      {
        rootMargin: "-35% 0px -55% 0px"
      }
    );

    sections.forEach(section => {

      sectionObserver.observe(section);

    });

  }


  // ==============================
  // FLOATING BACKGROUND PARTICLES
  // ==============================

  const particleContainer =
    document.getElementById("particles");

  if (
    particleContainer &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    for (let i = 0; i < 34; i++) {

      const particle =
        document.createElement("span");

      particle.className = "particle";

      particle.style.left =
        `${Math.random() * 100}%`;

      particle.style.top =
        `${Math.random() * 100}%`;

      particle.style.animationDelay =
        `${Math.random() * 9}s`;

      particle.style.animationDuration =
        `${7 + Math.random() * 8}s`;

      particleContainer.appendChild(particle);

    }

  }


  // ==============================
  // CURRENT YEAR
  // ==============================

  const year = document.getElementById("year");

  if (year) {

    year.textContent = new Date().getFullYear();

  }


  // ==============================
  // CONSOLE MESSAGE
  // ==============================

  console.log(
    "Welcome to Sayed Saba Banu's Portfolio!"
  );

  console.log(
    "Portfolio website loaded successfully."
  );

});
