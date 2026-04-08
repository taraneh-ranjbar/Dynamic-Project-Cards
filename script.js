const projects = [
 /* {
    id: 1,
    title: "Digital Wallet System",
    description: "A secure digital wallet platform for managing user balances, transactions, and real-time payment tracking.",
    button: "View Wallet Project",
    category: "fintech",
    image: "images/wallet.jpeg",
    link: "#"
  },
  {
    id: 2,
    title: "Personal Finance Manager (PFM)",
    description: "An intelligent finance dashboard that categorizes expenses, tracks income, and provides budgeting insights.",
    button: "View PFM Project",
    category: "finance",
    image: "images/pfm.jpeg",
    link: "#"
  },
  {
    id: 3,
    title: "Payment Gateway Integration",
    description: "A backend-driven payment gateway system enabling secure online transactions with API-based processing.",
    button: "View Payment Gateway Project",
    category: "payment",
    image: "images/payment.jpeg",
    link: "#"
  },
  {
    id: 4,
    title: "Fintech Web Dashboard",
    description: "A responsive web dashboard for monitoring financial data, analytics, and transaction reports.",
    button: "View Fintech Web Project",
    category: "web",
    image: "images/dashboard.jpeg",
    link: "#"
  },
  {
    id: 5,
    title: "Transaction Monitoring Service",
    description: "A real-time service designed to detect suspicious financial activities and ensure secure transaction flows.",
    button: "View TMS Project",
    category: "security",
    image: "images/security.jpeg",
    link: "#"
  }*/
];
console.log(projects);

async function loadProjects() {
  try {
    const response = await fetch("https://magnetikworks.github.io/project-data/data/projects.json");
    const data = await response.json();

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
/*renderProjects(projects);*/
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
