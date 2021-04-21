const renderNavElement = (linkTo, text, classText) => {
  let navListElement = document.createElement("li");
  let navLinkElement = document.createElement("a");
  let navTextElement = document.createTextNode(text);
  //create properties for list items
  navListElement.className = "menu-item";
  navLinkElement.className = classText + " nav-link";
  navLinkElement.href = linkTo;

  navLinkElement.appendChild(navTextElement);
  navListElement.appendChild(navLinkElement);

  return navListElement;
};

const renderNavItems = () => {
  DUMMY_NAV_MENU_ITEMS.forEach((item) => {
    document
      .getElementById("navContainer")
      .appendChild(renderNavElement(item.href, item.text, item.class));
  });
};

document.getElementById("navContainer").onload = renderNavItems();

const renderInformationCardElement = (la, text, content, linkTo) => {
  let infoCardContainer = document.createElement("div");
  let infoCardElement = document.createElement("div");
  let infoCardIcon = document.createElement("i");
  let infoHeader = document.createElement("h3");
  let infoLink = document.createElement("a");
  let infoHeaderText = document.createTextNode(text);
  let infoContent = document.createElement("p");
  let infoContentText = document.createTextNode(content);

  infoCardContainer.className = "col-lg-3";
  infoCardElement.className = "info-card";
  infoCardIcon.className = "las la-" + la;
  infoLink.href = linkTo;

  infoLink.appendChild(infoHeaderText);
  infoHeader.appendChild(infoLink);
  infoContent.appendChild(infoContentText);
  infoCardElement.appendChild(infoCardIcon);
  infoCardElement.appendChild(infoHeader);
  infoCardElement.appendChild(infoContent);
  infoCardContainer.appendChild(infoCardElement);

  return infoCardContainer;
};
const renderFourthInfoCardElement = (la, text, content) => {
  let infoCardContainer = document.createElement("div");
  let infoCardElement = document.createElement("div");
  let infoCardIcon = document.createElement("i");
  let infoHeader = document.createElement("h3");
  let infoHeaderText = document.createTextNode(text);
  let infoContent = document.createElement("p");
  let infoContentText = document.createTextNode(content);

  infoCardContainer.className = "col-lg-3";
  infoCardElement.className = "info-card";
  infoCardIcon.className = "las la-" + la;

  infoHeader.appendChild(infoHeaderText);
  infoContent.appendChild(infoContentText);
  infoCardElement.appendChild(infoCardIcon);
  infoCardElement.appendChild(infoHeader);
  infoCardElement.appendChild(infoContent);
  infoCardContainer.appendChild(infoCardElement);

  return infoCardContainer;
};

const renderInfoCardItems = () => {
  DUMMY_INFO_CARD_ITEMS.forEach((item, index) => {
    if (index < 3) {
      document
        .getElementById("informationCardContainer")
        .appendChild(
          renderInformationCardElement(
            item.class,
            item.header,
            item.content,
            item.href
          )
        );
    } else {
      document
        .getElementById("informationCardContainer")
        .appendChild(
          renderFourthInfoCardElement(item.class, item.header, item.content)
        );
    }
  });
};
document.getElementById(
  "informationCardContainer"
).onload = renderInfoCardItems();
