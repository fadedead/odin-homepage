const Github = require("./assets/github-icon.svg");
const ExternalLink = require("./assets/open-in-new.svg");

function getProjects() {
  const myWorkContainer = document.createElement("div");

  const myWork = document.createElement("h3");
  myWork.innerText = "My work";
  myWorkContainer.appendChild(myWork);

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projects-container");

  for (let i = 0; i <= 5; i++) {
    const project = document.createElement("div");
    project.classList.add("project");

    const image = document.createElement("div");
    image.innerText = "Screenshot of project";
    image.style =
      "height: 60%; background-color: #c3bef0; display: flex; justify-content: center; align-items: center;";
    project.appendChild(image);

    const nameLinkContainer = document.createElement("div");
    nameLinkContainer.classList.add("project-name-link");

    const name = document.createElement("p");
    name.innerText = "Project Name";
    nameLinkContainer.appendChild(name);

    const links = document.createElement("div");

    const github = new Image();
    github.src = Github;
    github.classList.add("project-link");
    links.appendChild(github);

    const externalLink = new Image();
    externalLink.src = ExternalLink;
    externalLink.classList.add("project-link");
    links.appendChild(externalLink);

    nameLinkContainer.appendChild(links);

    project.appendChild(nameLinkContainer);

    const info = document.createElement("div");
    info.innerHTML =
      "Short description of the project. <br> Just a couple sentences will do";
    project.appendChild(info);

    projectsContainer.appendChild(project);
  }

  myWorkContainer.appendChild(projectsContainer);

  return myWorkContainer;
}

module.exports = { getProjects };
