const PandaOne = require("./assets/panda-one.jpg");
const { getLinks } = require("./links");

function getAboutUs() {
  const aboutUs = document.createElement("div");
  aboutUs.classList.add("about-us");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("about-image-container");

  //Image container with image and image and text
  const pandaImage = new Image();
  pandaImage.classList.add("about-image");
  pandaImage.src = PandaOne;
  imageContainer.appendChild(pandaImage);

  const name = document.createElement("p");
  name.classList.add("user-name");
  name.innerText = "Panda Panda";
  imageContainer.appendChild(name);

  aboutUs.appendChild(imageContainer);

  // Information container
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  // About information
  const aboutContainer = document.createElement("div");

  const aboutTitle = document.createElement("h3");
  aboutTitle.classList.add("about-title");
  aboutTitle.innerText = "About me";
  aboutContainer.appendChild(aboutTitle);

  const aboutInfo = document.createElement("p");
  aboutInfo.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus tellus nulla, at dapibus diam tristique eget. Pellentesque ultrices imperdiet nunc, eget tempor erat sodales in. Vestibulum sodales arcu faucibus odio gravida imperdiet.";
  aboutContainer.appendChild(aboutInfo);

  infoContainer.appendChild(aboutContainer);

  // Icons
  const iconsContainer = getLinks();
  iconsContainer.classList.add("about-dev-container");
  infoContainer.appendChild(iconsContainer);

  aboutUs.appendChild(infoContainer);

  return aboutUs;
}

module.exports = { getAboutUs };
