import plevry from '../fixtures/plevry.json'
import selectors from '../selectors/plevrySelectors.json'
class Login {
    emailPlevery(email) {
        const {username} = selectors.login
        cy.get(username).type(email)
    }
    passwordPlevery(password) {
        const {userPassword} = selectors.login
        cy.get(userPassword).type(password)
        
    }
    signIn (signIn) {
        cy.xpath(signIn).then($signinButton => {
            let signinButton = $signinButton.text()
            if(signinButton === "Inloggen") {
                cy.get($signinButton).click()
            } else {
                cy.get($signinButton).click()
            }
        })
    }
    validationMessages() {
        const {validationLogin} = selectors.login
        cy.xpath(validationLogin).then( $validationMsgs => {
            let validationMsgs = $validationMsgs[0].innerText
            const {emailAndPassword, emailRequired, passwordRequired, nthEmailAndPassword, passCapitalVal} = plevry
            if(validationMsgs === emailAndPassword){
                cy.contains($validationMsgs[0].innerText).should('be.visible')
                cy.contains($validationMsgs[0].innerText).should('contain', emailAndPassword)
            }
            else if(validationMsgs === emailRequired) {
                cy.contains($validationMsgs[0].innerText).should('be.visible')
                cy.xpath('(//p)[2]').should('be.visible')
            }
            else if (validationMsgs === passCapitalVal) {
                cy.contains($validationMsgs[0].innerText).should('be.visible')
            }
            else if (validationMsgs === nthEmailAndPassword) {
                cy.contains($validationMsgs[0].innerText).should('be.visible')
                cy.contains($validationMsgs[0].innerText).should('contain', nthEmailAndPassword)
            }
            else if(validationMsgs === "E-mailadres is verplicht") {
                cy.contains($validationMsgs[0].innerText).should('be.visible')
                cy.xpath('(//p)[2]').should('be.visible')
            }
            else if (validationMsgs === "Gebruik minimaal één hoofdletter, één kleine letter, één cijfer en één speciaal karakter") {
                cy.contains($validationMsgs[0].innerText).should('be.visible')
                
            }
        })
    }
    showHideIcon() {
        const {userPassword, showHideIcon} = selectors.login
        cy.get(userPassword).should('have.attr', 'type', 'password')
        cy.xpath(showHideIcon).click()
        cy.get(userPassword).should('have.attr', "type", 'text')
    }
    languageChange() {
        cy.xpath('/*//label').then ( $emailLabel => {
        let emailLabel = $emailLabel[0].innerText
        if(emailLabel === 'Email address'){
            cy.contains($emailLabel[0].innerText).should('be.visible')
            cy.get('select[id="language-selector"]').select('nl')
            cy.contains(/E-mailadres/i).should('be.visible')
        }
        else {
            cy.contains($emailLabel[0].innerText).should('be.visible')
            cy.get('select[id="language-selector"]').select('en')
            cy.contains(/Email address/i).should('be.visible')
        }
        })
    }
}
export default Login