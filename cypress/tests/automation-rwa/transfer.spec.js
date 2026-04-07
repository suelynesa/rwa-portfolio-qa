import credentials from '../../fixtures/credentials.json' 
import DashboardPage from '../../pages/dashboardPage.js'
import TransferPage from '../../pages/transferPage.js'        
import TransactionPage from '../../pages/transactionPage.js'

const dashboardPage = new DashboardPage()
const transferPage = new TransferPage()
const transactionPage = new TransactionPage()

describe('Money Transfer Feature', () => {

    beforeEach(() => {
  cy.login(credentials.valid.username, credentials.valid.password)
})

        const contact = 'Darrel Ortiz'
        const note = 'teste'

    it('Should transfer money successfully', () => {
        
        const transferAmount = 3
                
        dashboardPage.getBalance().then((initialBalance) => {

            transferPage.prepareTransaction(contact, transferAmount, note)
            transferPage.clickPay()
            transferPage.checkSuccessAlert()
            
            dashboardPage.clickHomeButton()

            transactionPage.checkMineTransactions()
            transactionPage.checkFirstTransaction(contact, note, transferAmount)
         
            dashboardPage.getBalance().then((newBalance) => {

                expect(newBalance).to.be.closeTo(initialBalance - transferAmount, 0.01) 
               
        })
    })
    })
      
    it('Should not allow transfers without sufficient funds', () => {
               
        dashboardPage.getBalance().then((balance) => {

            const transferAmount = Number(balance) + 1

        transferPage.prepareTransaction(contact, transferAmount, note)
        transferPage.clickPay()
        transferPage.checkErrorAlert() 

        // BUG: application allows transfer even without balance
    })
})

        it('Should not allow transfer with negative values', () => {
                
                const transferAmount = -10

           transferPage.prepareTransaction(contact, transferAmount, note)
           transferPage.clickPay()

           transferPage.checkErrorAlert()
                
          // Ensures that the transaction was NOT created.
           transactionPage.checkMineTransactions()
           transactionPage.checkNegativeValue()
            
        // CRITICAL BUG: Application allows transfers with a negative balance, and this amount is added to the balance.
        })

        it('Should allow transfer with cents', () => {
                
                const transferAmount = 3.50

           transferPage.prepareTransaction(contact, transferAmount, note)
           transferPage.clickPay()
           transferPage.checkSuccessAlert()

           dashboardPage.clickHomeButton()
          
           transactionPage.checkMineTransactions()
           transactionPage.checkFirstTransaction(contact, note, transferAmount)
            
        // BUG: The system does not allow transactions with cents and rounds up to the nearest whole number.
        })
  })
       