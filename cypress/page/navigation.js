const navbarText = ["Home", "Get Started", "Pricing", "Contact", "Schedule"];

class NavigationPage {
  visit() {
    cy.visit("");
  }
  checkNavbarText() {
    cy.get(`#__next > div > div > header > div > nav > ul > li > a`).should(
      "have.length",
      navbarText.length
    );
    navbarText.forEach((text, index) => {
      cy.get(
        `#__next > div > div > header > div > nav > ul > li:nth-child(${
          index + 1
        }) > a`
      ).should("have.text", text);
    });
  }
}

export default NavigationPage;

// npx cypress run --spec cypress/e2e/someTipes.cy.js --browser chrome
