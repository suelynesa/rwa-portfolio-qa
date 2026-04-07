Cypress.Commands.add('login', (username, password) => {

  cy.visit('/signin')

  cy.get('[name="username"]').type(username)
  cy.get('[name="password"]').type(password)

  cy.get('[data-test="signin-submit"]').click()

  cy.get('[data-test="nav-transaction-tabs"]').should('be.visible')

})

Cypress.Commands.add('signup', (username, password) => {
  cy.visit('/signup')

  cy.get('[data-test="signup-first-name"]').type('User')
  cy.get('[data-test="signup-last-name"]').type('Test')
  cy.get('[data-test="signup-username"]').type(username)
  cy.get('[data-test="signup-password"]').type(password)
  cy.get('[data-test="signup-confirmPassword"]').type(password)

  cy.get('[data-test="signup-submit"]').click()
})