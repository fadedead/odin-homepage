const { getLinks } = require("./links");

function getFooter() {
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer");

  const footerTitle = document.createElement("h3");
  footerTitle.innerText = "Contact me";
  footerContainer.appendChild(footerTitle);

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

  footerContainer.appendChild(footerInfo);

  const iconsContainer = getLinks();
  iconsContainer.classList.add("about-dev-container");
  footerContainer.appendChild(iconsContainer);

  return footerContainer;
}

module.exports = { getFooter };
