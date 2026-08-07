/* ===========================
   DYNAMIC PORTFOLIO
=========================== */
const portfolioGrid = document.querySelector(".portfolio-grid");

fetch("data/projects.json")
  .then((response) => response.json())
  .then((projects) => {
    projects.forEach((project) => {
      portfolioGrid.innerHTML += `
        <div class="project-card">
          <img src="./assets/projects/${project.image}" />
          <div class="project-content ${project.category}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <small>Tech Stack: ${project.technology.map((skill) => `${skill}`).join(", ")}</small>
            <div class="project-icons">
            ${
              project.demo &&
              `<a href="${project.demo}" target="_blank" title="View">
                  <i class="fa-solid fa-up-right-from-square fa-lg"></i>
                </a>`
            }
            ${
              project.github &&
              `<a href="${project.github}" target="_blank" title="Repository"><i class="fa-brands fa-github fa-lg"></i></a>`
            }
            </div>
          </div>
        </div>
      `;
    });
  });

/* ===========================
   PORTFOLIO FILTER
=========================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    cards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
