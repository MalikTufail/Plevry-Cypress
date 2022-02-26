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
            // const {nthSignIn} = plevry
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
            const {emailAndPassword, emailRequired, passwordRequired, nthEmailAndPassword} = plevry
            if(validationMsgs === emailAndPassword){
                cy.contains($validationMsgs[0].innerText).should('be.visible')
                cy.contains($validationMsgs[0].innerText).should('contain', emailAndPassword)
            }
            else if(validationMsgs === emailRequired  && validationMsgs === passwordRequired) {
                cy.contains($validationMsgs[0].innerText).should('be.visible')
                cy.contains($validationMsgs[0].innerText).should('contain', emailRequired)
                cy.contains($validationMsgs[0].innerText).should('contain', passwordRequired)
            }
            else if (validationMsgs === nthEmailAndPassword) {
                cy.contains($validationMsgs[0].innerText).should('be.visible')
                cy.contains($validationMsgs[0].innerText).should('contain', nthEmailAndPassword)
            }
        })
    }
}
export default Login