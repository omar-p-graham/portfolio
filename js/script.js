/* ===========================
   JOB TITLE ANIMATION
=========================== */

const titles = [
  "Data Analyst",
  "Full-Stack Developer",
  "Anti-Money Laundering Analyst",
];

jobTitle = document.querySelector(".hero-text h2");

function typewriter(index, text) {
  let textIndex = 1;

  let tmp = setInterval(function () {
    if (textIndex < text[index].length + 1) {
      jobTitle.innerHTML = text[index].substr(0, textIndex);
      textIndex++;
    } else {
      setTimeout(function () {
        eraser(index, text);
      }, 1000);
      clearInterval(tmp);
    }
  }, 100);
}

function eraser(index, text) {
  let textIndex = text[index].length;

  let tmp = setInterval(function () {
    if (textIndex + 1 > 1) {
      jobTitle.innerHTML = text[index].substr(0, textIndex);
      textIndex--;
    } else {
      index++;
      if (index == text.length) {
        index = 0;
      }
      typewriter(index, text);
      clearInterval(tmp);
    }
  }, 50);
}
typewriter(0, titles);

/* ===========================
   MOBILE NAVIGATION
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* ===========================
   CLOSE MENU AFTER CLICK
=========================== */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ===========================
   SCROLL REVEAL
=========================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

/* ===========================
   SKILL LIST
=========================== */
const skillGrid = document.querySelector(".skill-list");

fetch("data/skills.json")
  .then((response) => response.json())
  .then((skills) => {
    skills.forEach((skill) => {
      document.querySelector(`.skill-list#${skill.id}`).innerHTML += `
      ${skill.skills
        .map(
          (details) => `<div class="skill">
              <img
                src="./assets/skills/${details.svg}.svg"
                alt="${details.skill} icon"
                title="${details.skill}"
              />
            </div>`,
        )
        .join("")}
      `;
    });
  });
/* ===========================
   BACK TO TOP
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

topBtn.addEventListener("mouseover", () => {
  topBtn.querySelector(".top-icon").classList.remove("fa-bounce", "fa-lg");
  topBtn.querySelector(".top-icon").classList.add("fa-xl");
});

topBtn.addEventListener("mouseout", () => {
  topBtn.querySelector(".top-icon").classList.add("fa-bounce", "fa-lg");
  topBtn.querySelector(".top-icon").classList.remove("fa-xl");
});

document.getElementById("this-year").textContent = new Date().getFullYear();
