class SignUpPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            signUpButton: '[type="submit"]',
            confirmPasswordField: '[name="confirmPassword"]',
        }              
        
        return selectors
    }

    accessSignUpPage() {
        cy.visit('/signup')
        cy.url().should('include', 'signup')
    }

    fillUserData({ firstName, lastName, username, password }) {

  if (firstName !== undefined) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
  }

  if (lastName !== undefined) {
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
  }

  if (username !== undefined) {
    cy.get(this.selectorsList().usernameField).clear().type(username)
  }

  if (password !== undefined) {
    cy.get(this.selectorsList().passwordField).clear().type(password)
  }}

    fillConfirmPassword(password) {
        cy.get(this.selectorsList().confirmPasswordField).clear().type(password)
    }

    signUpButton() {
        cy.get(this.selectorsList().signUpButton).click()
    }

    disableSignUpButton() {
        cy.get(this.selectorsList().signUpButton).should('be.disabled')
    }

    validateFieldError(fieldSelector) {
        cy.get(fieldSelector).should('have.attr', 'aria-invalid', 'true')
}
}

export default SignUpPage