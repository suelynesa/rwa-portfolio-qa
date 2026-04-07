import BankAccountPage from "../../pages/bankAccountPage"
import DashboardPage from "../../pages/dashboardPage"   

const bankAccountPage = new BankAccountPage()
const dashboardPage = new DashboardPage()

describe('Bank Account Feature', () => {

  it('Should require bank account creation on first login', () => {

    const username = `user_${Date.now()}`
    const password = 'password123'

    cy.signup(username, password)
    cy.login(username, password)

    bankAccountPage.setUpNewBankAccount()
    
  })

  it('Should allow user to create a bank account successfully', () => {

    const username = `user_${Date.now()}`
    const password = 'password123'

    cy.signup(username, password)
    cy.login(username, password)

    bankAccountPage.setUpNewBankAccount()
    bankAccountPage.createBankAccount('Bank of Cypress', '123456789', '987654321')

    dashboardPage.checkDashboardPage()  
    dashboardPage.checkBalance().should('be.visible').and('contain', '$0.00')

  })

})