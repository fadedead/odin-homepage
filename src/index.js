import { getAboutUs } from "./about";
import { getFooter } from "./footer";
import { getProjects } from "./projects";
import "./style.css";

console.log("Hello Fadedead");

function app() {
  const content = document.getElementById("content");

  content.appendChild(getAboutUs());

  content.appendChild(getProjects());

  content.appendChild(getFooter());
}

app();
