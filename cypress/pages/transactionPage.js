class TransactionPage {

    selectorsList() {
        const selectors = {
            navbarHomeButton: '[data-test="sidenav-home"]',
            everyoneButton: '[data-test="nav-public-tab"]',
            mineButton: '[href="/personal"]',
            transactionList: '[data-test="transaction-list"]',
            dateFilter: '[data-test="transaction-list-filter-date-range-button"]',
        }            

        return selectors
    }

    checkEveryoneTransactions() {
        cy.get(this.selectorsList().everyoneButton).click()
    }

    checkMineTransactions() {
        cy.get(this.selectorsList().mineButton).click()
    }

    checkTransactionList() {
        return cy.get(this.selectorsList().transactionList)
    }

    checkFirstTransaction(contact, note, transferAmount) {
        cy.get(this.selectorsList().transactionList)
            .children()
            .first()
            .should('be.visible')
            .and('contain.text', contact)
            .and('contain.text', note)
            .and('contain.text', transferAmount)
    }

    checkNegativeValue() {
        cy.get(this.selectorsList().transactionList)
            .children()
            .first()
            .should('not.contain.text', '--$')
    }

    selectDateRange(startDay, endDay) {
    cy.get(this.selectorsList().dateFilter).click()

    cy.get('.react-calendar__tile--now')
        .contains(startDay)
        .click()

    cy.get('.react-calendar__tile--now')
        .contains(endDay)
        .click()
    }

    checkDateFilterReset() {
        cy.get(this.selectorsList().dateFilter)
        .should('not.contain.text', 'Date: ALL')
    }
}

    export default TransactionPage