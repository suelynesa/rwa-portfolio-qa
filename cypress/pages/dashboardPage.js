class dashboardPage {

    selectorsList() {
        const selectors = {
            dashBoardGrid: '[data-test="nav-transaction-tabs"]',
            balanceValue: '[data-test="sidenav-user-balance"]',
            homeButton: '[data-test="sidenav-home"]',
        }

        return selectors
    }

    checkDashboardPage() {
        return cy.get(this.selectorsList().dashBoardGrid)
    }

    clickHomeButton() { 
        cy.get(this.selectorsList().homeButton).click()
    }

    checkBalance() {    
        return cy.get(this.selectorsList().balanceValue)
    }

    getBalance() {
        return cy.get(this.selectorsList().balanceValue).invoke('text').then((text) => {
            const cleanText = text.replace('$', '').replace(',', '').trim()
            const balance = parseFloat(cleanText)      
            return balance
        })
    }
    
}

export default dashboardPage