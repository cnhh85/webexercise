//Render Navbar Items
const renderNavElement = (linkTo, text, classText) => {
  let navListElement = document.createElement("li");
  let navLinkElement = document.createElement("a");
  let navTextElement = document.createTextNode(text);

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

window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("nav-scroll", windowPosition);
});

//Render Information Cards
const renderInformationCardElement = (la, text, content, linkTo) => {
  let infoCardContainer = document.createElement("div");
  let infoCardElement = document.createElement("div");
  let infoCardIcon = document.createElement("i");
  let infoHeader = document.createElement("h3");
  let infoLink = document.createElement("a");
  let infoHeaderText = document.createTextNode(text);
  let infoContent = document.createElement("p");
  let infoContentText = document.createTextNode(content);

  infoCardContainer.className = "col-lg-3 col-sm-6";
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

//Render intro elements
const renderInterestInElement = (la, text) => {
  let introList = document.createElement("li");
  let introIcon = document.createElement("i");
  let introContent = document.createTextNode(text);

  introIcon.className = "las la-" + la;

  introList.appendChild(introIcon);
  introList.appendChild(introContent);

  return introList;
};

const renderInterestInItems = () => {
  DUMMY_INTEREST_ICON.forEach((item) => {
    document
      .getElementById("interestList")
      .appendChild(renderInterestInElement(item.class, item.text));
  });
};
document.getElementById("interestList").onload = renderInterestInItems();

//Create common card renderer
const renderCommonElements = (la, header, content, element, col) => {
  let commonCardContainer = document.createElement("div");
  let commonCardElement = document.createElement("div");
  let commonCardIcon = document.createElement("i");
  let commonCardHeader = document.createElement("h3");
  let commonCardHeaderText = document.createTextNode(header);
  let commonCardContent = document.createElement("p");
  let commonCardContentText = document.createTextNode(content);

  commonCardContainer.className = col;
  commonCardElement.className = element + "-card";
  commonCardIcon.className = "las la-" + la;

  commonCardContent.appendChild(commonCardContentText);
  commonCardHeader.appendChild(commonCardHeaderText);
  commonCardElement.appendChild(commonCardIcon);
  commonCardElement.appendChild(commonCardHeader);
  commonCardElement.appendChild(commonCardContent);
  commonCardContainer.appendChild(commonCardElement);

  return commonCardContainer;
};

//Render services elements
const renderServicesItems = () => {
  let element = "services";
  let col = "col-lg-4";
  DUMMY_SERVICES_CARD.forEach((item) => {
    document
      .getElementById("servicesCardContainer")
      .appendChild(
        renderCommonElements(item.class, item.header, item.content, element, col)
      );
  });
};

document.getElementById("servicesCardContainer").onload = renderServicesItems();

//Render fun facts elements
const renderFunFactElements = (la, header, content) => {
  let funFactsItem = document.createElement("div");
  let funFactsElement = document.createElement("div");
  let funFactsIcon = document.createElement("i");
  let funFactsHeader = document.createElement("h3");
  let funFactsHeaderSpan = document.createElement("span");
  let funFactsHeaderText = document.createTextNode(header);
  let funFactsContent = document.createElement("p");
  let funFactsContentText = document.createTextNode(content);

  funFactsItem.className = "col-lg-3 col-sm-6";
  funFactsElement.className = "single-fun-fact";
  funFactsIcon.className = "las la-" + la;

  funFactsContent.appendChild(funFactsContentText);
  funFactsHeaderSpan.appendChild(funFactsHeaderText);
  funFactsHeader.appendChild(funFactsHeaderSpan);
  funFactsElement.appendChild(funFactsIcon);
  funFactsElement.appendChild(funFactsHeader);
  funFactsElement.appendChild(funFactsContent);
  funFactsItem.appendChild(funFactsElement);

  return funFactsItem;
};

const renderFunFactItem = () => {
  DUMMY_FUN_FACTS_ITEMS.forEach((item) => {
    document
      .getElementById("funFactsContainer")
      .appendChild(
        renderFunFactElements(item.class, item.header, item.content)
      );
  });
};

document.getElementById("funFactsContainer").onload = renderFunFactItem();

//Render choose us cards

const renderChooseUsItems = () => {
  let element = "choose-us";
  let col = "col-lg-6";
  DUMMY_CHOOSE_US_CARDS.forEach((item) => {
    document
      .getElementById("chooseCardContainer")
      .appendChild(
        renderCommonElements(item.class, item.header, item.content, element, col)
      );
  });
};

document.getElementById("chooseCardContainer").onload = renderChooseUsItems();
