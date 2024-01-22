const Github = require("./assets/github-icon.svg");
const LinkedIn = require("./assets/linkedin-icon.svg");
const Twitter = require("./assets/twitter-icon.svg");
function getLinks() {
  const container = document.createElement("div");

  const github = new Image();
  github.classList.add("links-image");
  github.src = Github;
  container.appendChild(github);

  const linkedIn = new Image();
  linkedIn.classList.add("links-image");
  linkedIn.src = LinkedIn;
  container.appendChild(linkedIn);

  const twitter = new Image();
  twitter.classList.add("links-image");
  twitter.src = Twitter;
  container.appendChild(twitter);

  return container;
}

module.exports = { getLinks };
