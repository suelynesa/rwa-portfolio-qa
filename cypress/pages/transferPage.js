class TransferPage {

    selectorsList() {
        const selectors = {
            newTransferButton: '[href="/transaction/new"]',
            searchContact: '[placeholder="Search..."]',
            contactList: '[data-test="users-list"]',
            amountField: '[name="amount"]',
            addNoteField: '[placeholder="Add a note"]',
            payButton: '[data-test="transaction-create-submit-payment"]',
            transferSuccessAlert: '[data-test="alert-bar-success"]',
            transferErrorAlert: '[data-test="alert-bar-error"]',
            requestButton: '[data-test="transaction-create-submit-request"]',
            transactionButton: '[data-test="new-transaction-return-to-transactions"]'
        }

        return selectors
    }

    startNewTransfer(contact) {
        cy.get(this.selectorsList().newTransferButton).click()
        cy.get(this.selectorsList().searchContact).type(contact)
        cy.get(this.selectorsList().contactList).contains(contact).click()
    }

    completeTransfer(amount, note) {
        cy.get(this.selectorsList().amountField).clear().type(amount)
        cy.get(this.selectorsList().addNoteField).type(note)
    }
    
    clickPay() {
        cy.get(this.selectorsList().payButton).should('be.visible').click()
    }

    clickRequest() {
        cy.get(this.selectorsList().requestButton).should('be.visible').click()
    }

    prepareTransaction(contact, amount, note) {
        this.startNewTransfer(contact)
        this.completeTransfer(amount, note)
    }

    checkSuccessAlert() {
        cy.get(this.selectorsList().transferSuccessAlert).should('be.visible')
    }

    checkErrorAlert() {
        cy.get(this.selectorsList().transferErrorAlert).should('be.visible')
    }

    returnToTransactions() {
        cy.get(this.selectorsList().transactionButton).should('be.visible').click()
    }
}

export default TransferPage