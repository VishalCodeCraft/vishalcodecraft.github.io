/* =========================
   SMOOTH SCROLL FOR NAV LINKS
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* =========================
   FADE-IN ON SCROLL
========================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .project, .grid div').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(25px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

/* =========================
   TYPING ANIMATION (HERO)
========================= */
const roles = [
  "Full Stack Developer (.NET + Angular)",
  "Backend-Focused .NET Engineer",
  "Always Learning New Tech 🚀"
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

/* =========================
   DARK / LIGHT TOGGLE
========================= */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});


/* =========================
   SCROLL TO TOP / BOTTOM
========================= */
const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // Show button after slight scroll
  scrollBtn.style.display = scrollPosition > 200 ? "flex" : "none";

  // Change arrow direction
  if (scrollPosition + windowHeight >= docHeight - 100) {
    scrollBtn.textContent = "⬆️";
  } else {
    scrollBtn.textContent = "⬇️";
  }
});

// Scroll action
scrollBtn.addEventListener("click", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight >= docHeight - 100) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Scroll to bottom
    window.scrollTo({ top: docHeight, behavior: "smooth" });
  }
});

/* =========================
   RESUME CLICK FEEDBACK
========================= */
const resumeBtn = document.querySelector(".resume-btn");

if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    resumeBtn.classList.add("clicked");
    setTimeout(() => resumeBtn.classList.remove("clicked"), 300);
  });
}
