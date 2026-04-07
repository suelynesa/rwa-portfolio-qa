import credentials from '../../fixtures/credentials.json' 
import BankAccountPage from '../../pages/bankAccountPage.js'
import TransactionPage from '../../pages/transactionPage.js'
import TransferPage from '../../pages/transferPage.js'  
import { generateUser } from '../../support/factories/userFactory.js'

const transactionPage = new TransactionPage()
const transferPage = new TransferPage()
const bankAccountPage = new BankAccountPage()

describe('Transaction History Feature (logged user)', () => {

    beforeEach(() => {
  cy.login(credentials.valid.username, credentials.valid.password)
})

    it('View transaction history (Everyone) successfully', () => {
        
        transactionPage.checkEveryoneTransactions()
        transactionPage.checkTransactionList().should('be.visible').and('have.length.greaterThan', 0)             
               
        })

    it('Transaction should appear in the "Everyone" history after the transfer', () => {

        const contact = 'Darrel Ortiz'
        const note = 'teste'
        const transferAmount = 3
        
        transferPage.prepareTransaction(contact, transferAmount, note)
        transferPage.clickPay()
        transferPage.checkSuccessAlert()
        transferPage.returnToTransactions()

        transactionPage.checkEveryoneTransactions()
        transactionPage.checkFirstTransaction(contact, note, transferAmount)

        // Functional BUG (broken business rule): Transaction does not appear in the "Everyone" tab / The transaction only appears in the "Mine" tab             
    })

    it('Filter should remain after a refresh', () => {

        const today = new Date().getDate()
        
        transactionPage.checkMineTransactions()
        transactionPage.selectDateRange(today, today)
        transactionPage.checkTransactionList().should('be.visible')

        cy.reload()

        transactionPage.checkMineTransactions()
        transactionPage.checkDateFilterReset()
        
        // BUG: Filter is reset after a page refresh. 
    })                          
})           

describe('Transaction History (new user)', () => {

    let user

    beforeEach(() => {
        user = generateUser()
    })

    it('Should display empty transaction history for new user', () => {
        
        const password = 'password123'

        cy.signup(user.username, password)
        cy.login(user.username, password)

        bankAccountPage.createBankAccount('Test Bank', '123456789', '987654321')

        transactionPage.checkMineTransactions()
        transactionPage.checkTransactionList().should('not.exist')

        cy.contains(/no transactions/i).should('be.visible')
               
        })    
    })