const { getLinks } = require("./links");
const PandaTwo = require("./assets/panda-two.jpg");

function getFooter() {
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer");

  const footerInfoContainer = document.createElement("div");
  footerInfoContainer.classList.add("footer-info");

  const footerTitle = document.createElement("h3");
  footerTitle.innerText = "Contact me";
  footerInfoContainer.appendChild(footerTitle);

  const footerInfo = document.createElement("div");

  const subText = document.createElement("p");
  subText.innerText =
    "Please get in touch if you think our work could be mutually beneficial!";
  footerInfo.appendChild(subText);

  const address = document.createElement("p");
  address.innerHTML = "1234 Random Road <br> Random Town, California 12345";
  footerInfo.appendChild(address);

  const contact = document.createElement("p");
  contact.innerHTML = "555-555-5555 <br> panda.is.cute@forest.com";
  footerInfo.appendChild(contact);

  footerInfoContainer.appendChild(footerInfo);

  const iconsContainer = getLinks();
  iconsContainer.classList.add("about-dev-container");
  footerInfoContainer.appendChild(iconsContainer);

  footerContainer.appendChild(footerInfoContainer);

  const pandaTwo = new Image();
  pandaTwo.classList.add("footer-image-container");
  pandaTwo.src = PandaTwo;
  footerContainer.appendChild(pandaTwo);

  return footerContainer;
}

module.exports = { getFooter };
