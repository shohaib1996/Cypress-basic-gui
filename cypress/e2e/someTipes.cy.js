import NavigationPage from '../page/navigation'

describe("some types", () => {
//   it("Check anchor tag", () => {
//     cy.visit("");
//     //    cy.get('a').should('have.length', 8)
//     cy.get(
//       "#__next > div > div > header > div > nav > ul > li:nth-child(1) > a"
//     ).should("have.text", "Home");
//   });

  it("Check navigation page", () => {
    const navigationPage = new NavigationPage();
    navigationPage.visit();
    navigationPage.checkNavbarText();
  });
});
