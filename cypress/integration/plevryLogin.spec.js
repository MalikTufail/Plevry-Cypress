import Login from '../pageObject/plevryLogin'
import selectors from '../selectors/plevrySelectors.json'
import plevry from '../fixtures/plevry.json'
const login = new Login()
describe('Login functionality', () => {
    beforeEach('', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    it('Verify if the user cannot be login with the invalid credentials', () => {
        cy.visit('/en/login')
        const {invalidEmail, invalidPassword} = plevry
        login.emailPlevery(invalidEmail)
        login.passwordPlevery(invalidPassword)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('Verify if the user cannot be login with valid email and invalid password', () => {
        cy.visit('/en/login')
        const {email, invalidPassword} = plevry
        login.emailPlevery(email)
        login.passwordPlevery(invalidPassword)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    });
    it('verify if the user cannot be login with invalid email and valid password', () => {
        cy.visit('/en/login')
        const {invalidEmail, password} = plevry
        login.emailPlevery(invalidEmail)
        login.passwordPlevery(password)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('verify the validation message when the user left the email and password field blank', () => {
        cy.visit('/en/login')
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('verify the validation message if user typed the password in capital letters', () => {
        cy.visit('en/login')
        const {email, passwordCapital} = plevry
        login.emailPlevery(email)
        login.passwordPlevery(passwordCapital)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('Verify if show/hide icon is functional', () =>{
        cy.visit('en/login')
        const {email, password} = plevry
        login.emailPlevery(email)
        login.passwordPlevery(password)
        login.showHideIcon()
    })
    it('Verify the functionality of language change button', () => {
        cy.visit('/en/login')
        login.languageChange()
    })
    
    it('verify if the user can be log in with capital email and valid password', () => {
        cy.visit('/en/login')
        const {emailCapital, password} = plevry
        login.emailPlevery(emailCapital)
        login.passwordPlevery(password)
        const {signIn} = selectors.login
        login.signIn(signIn)
        cy.contains(/points of sale/i).should('be.visible')
    })
    it('verify if user can be login with valid email and valid password', () => {
        cy.visit('/en/login')
        const {email, password} = plevry
        login.emailPlevery(email)
        login.passwordPlevery(password)
        const {signIn} = selectors.login
        login.signIn(signIn)
        cy.contains(/points of sale/i).should('be.visible')
    })
    it('verify the validation message in "Dutch" if user provide the incorrect email', () => {
        cy.visit('/login')
        const {invalidEmail, password} = plevry
        login.emailPlevery(invalidEmail)
        login.passwordPlevery(password)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('Verify if the user cannot be login with the invalid credentials "Dutch"', () => {
        cy.visit('/login')
        const {invalidEmail, invalidPassword} = plevry
        login.emailPlevery(invalidEmail)
        login.passwordPlevery(invalidPassword)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('Verify if the user cannot be login with valid email and invalid password "Dutch"', () => {
        cy.visit('/login')
        const {email, invalidPassword} = plevry
        login.emailPlevery(email)
        login.passwordPlevery(invalidPassword)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    });
    it('verify if the user cannot be login with invalid email and valid password "Dutch"', () => {
        cy.visit('/login')
        const {invalidEmail, password} = plevry
        login.emailPlevery(invalidEmail)
        login.passwordPlevery(password)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('verify the validation message when the user left the email and password field blank "Dutch"', () => {
        cy.visit('/login')
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('verify the validation message if user typed the password in capital letters "Dutch"', () => {
        cy.visit('/login')
        const {email, passwordCapital} = plevry
        login.emailPlevery(email)
        login.passwordPlevery(passwordCapital)
        const {signIn} = selectors.login
        login.signIn(signIn)
        login.validationMessages()
    })
    it('Verify if show/hide icon is functional "Dutch"', () =>{
        cy.visit('/login')
        const {email, password} = plevry
        login.emailPlevery(email)
        login.passwordPlevery(password)
        login.showHideIcon()
    })
    it('verify if the user can be log in with capital email and valid password "Dutch"', () => {
        cy.visit('/login')
        const {emailCapital, password} = plevry
        login.emailPlevery(emailCapital)
        login.passwordPlevery(password)
        const {signIn} = selectors.login
        login.signIn(signIn)
        cy.contains(/Verkooppunten/i).should('be.visible')
    })
    it('verify if user can be login with valid email and valid password "Dutch"', () => {
        cy.visit('/login')
        const {email, password} = plevry
        login.emailPlevery(email)
        login.passwordPlevery(password)
        const {signIn} = selectors.login
        login.signIn(signIn)
        cy.contains(/Verkooppunten/i).should('be.visible')
    })
    it('Verify the functionality of language change button "Dutch"', () => {
        cy.visit('/login')
        login.languageChange()
    })
})