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
  let goTop = document.getElementById("goTopButton");
  let windowPosition = window.scrollY > 100;
  nav.classList.toggle("nav-scroll", windowPosition);
  goTop.classList.toggle("active", windowPosition);
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar-collapse .navbar-nav li a");
navLi[0].className += " active";
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.className += " active";
    }
  });
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

  infoCardContainer.className = "col-lg-3 col-sm-6";
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
  let col = "col-lg-4 col-md-6";
  DUMMY_SERVICES_CARD.forEach((item) => {
    document
      .getElementById("servicesCardContainer")
      .appendChild(
        renderCommonElements(
          item.class,
          item.header,
          item.content,
          element,
          col
        )
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
  let col = "col-lg-6 col-sm-6";
  DUMMY_CHOOSE_US_CARDS.forEach((item) => {
    document
      .getElementById("chooseCardContainer")
      .appendChild(
        renderCommonElements(
          item.class,
          item.header,
          item.content,
          element,
          col
        )
      );
  });
};

document.getElementById("chooseCardContainer").onload = renderChooseUsItems();

//Render portfolio cards

const renderPortfolioElement = (index, header) => {
  let cardContainer = document.createElement("div");
  let cardItem = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardCaption = document.createElement("div");
  let cardTable = document.createElement("div");
  let cardTableCell = document.createElement("div");
  let cardText = document.createElement("div");
  let cardHeader = document.createElement("h3");
  let cardHeaderText = document.createTextNode(header);
  let cardContent = document.createElement("p");
  let cardContentText = document.createTextNode(
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the."
  );
  let cardLink = document.createElement("a");
  let cardLinkIcon = document.createElement("i");

  cardLinkIcon.className = "las la-arrow-right";
  cardLink.appendChild(cardLinkIcon);
  cardLink.href = "#";
  cardContent.appendChild(cardContentText);
  cardHeader.appendChild(cardHeaderText);
  cardText.appendChild(cardHeader);
  cardText.appendChild(cardContent);
  cardText.appendChild(cardLink);
  cardText.className = "cardText";
  cardTableCell.appendChild(cardText);
  cardTableCell.className = "d-table-cell"
  cardTable.appendChild(cardTableCell);
  cardTable.className = "d-table";
  cardCaption.appendChild(cardTable);
  cardCaption.className = "caption";
  cardImg.src = "./assets/images/portfolio" + (index + 1) + ".jpg";
  cardContainer.className = "col-lg-4 col-sm-6";
  cardItem.appendChild(cardImg);
  cardItem.appendChild(cardCaption);
  cardItem.className = "portfolio-card";
  cardContainer.appendChild(cardItem);

  return cardContainer;
};

const renderPortfolioItem = () => {
  DUMMY_PORTFOLIO_CARD.forEach((item, index) => {
    document
      .getElementById("portfolioCardContainer")
      .appendChild(renderPortfolioElement(index, item.header));
  });
};

document.getElementById("portfolioCardContainer").onload = renderPortfolioItem();