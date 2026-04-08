
let projects =[];

async function loadProjects() {
  try {

    const response = await fetch("https://raw.githubusercontent.com/taraneh-ranjbar/Dynamic-Project-Cards/feature/api-integration/data/projects.json");
    const data = await response.json();
    projects = data;
    console.log(data); 

    renderProjects(data);
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

const container = document.getElementById("projects-container");
function renderProjects(projectList) {
  container.innerHTML = "";

  projectList.forEach(project => {
    const card = `
      <article class="card">
        <img src="${project.image}" alt="${project.title}">
        <span class="badge">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <button>${project.button}</button>
      </article>
    `;

    container.innerHTML += card;
  });
}

loadProjects();

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();

  const filteredProjects = projects.filter(project => {
    return (
      project.title.toLowerCase().includes(searchValue) ||
      project.description.toLowerCase().includes(searchValue) ||
      project.category.toLowerCase().includes(searchValue)
    );
  });

  renderProjects(filteredProjects);
});
