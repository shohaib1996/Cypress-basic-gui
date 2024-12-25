import LoginPage from '../page/login'

describe('login with class', () => {
    it('login with class', () => {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.clickLoginButton();
        loginPage.typeEmail();
        loginPage.typePassword();
        loginPage.clickLogin();
        cy.url().should('include', '/dashboard')
    })

    it.only('login with data from json', () => {
        const loginPage = new LoginPage();
        loginPage.visit()
        cy.fixture('loginData.json').then((data) => {
            loginPage.loginWithDataFromJson(data.email, data.password)
        })
        cy.url().should('include', '/dashboard')
    })
   
})