describe('selectors', () => {
    it('Get a selector', () => {
        cy.visit('https://www.bootcampshub.ai/branch-landing-page');

        // cy.get('#home')
        // cy.get('.title')
        cy.get('[class*="text"]')
    });
});