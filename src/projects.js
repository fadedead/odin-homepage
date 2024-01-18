const Github = require("./assets/github-icon.svg");
const ExternalLink = require("./assets/open-in-new.svg");

function getProjects() {
  const projectsContainer = document.createElement("div");

  for (let i = 0; i <= 5; i++) {
    const project = document.createElement("div");

    const image = document.createElement("div");
    image.innerText = "Screenshot of project";
    image.style = "min-height: 100px; background-color: blue";
    project.appendChild(image);

    const nameLinkContainer = document.createElement("div");

    const name = document.createElement("p");
    name.innerText = "Project Name";
    nameLinkContainer.appendChild(name);

    const links = document.createElement("div");

    const github = new Image();
    github.src = Github;
    links.appendChild(github);

    const externalLink = new Image();
    externalLink.src = ExternalLink;
    links.appendChild(externalLink);

    nameLinkContainer.appendChild(links);

    project.appendChild(nameLinkContainer);

    const info = document.createElement("div");
    info.innerHTML =
      "Short description of the project. <br> Just a couple sentences will do";
    project.appendChild(info);

    projectsContainer.appendChild(project);
  }

  return projectsContainer;
}

module.exports = { getProjects };
