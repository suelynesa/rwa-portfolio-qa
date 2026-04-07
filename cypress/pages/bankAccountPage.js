class bankAccountPage {

    selectorsList() {
        const selectors = {
            onboardingTitle: '[data-test="user-onboarding-dialog-title"]',
            onboardingBody: '[data-test="user-onboarding-dialog"]',
            nextButton: '[data-test="user-onboarding-next"]',
            bankNameField: '[name="bankName"]',
            routingNumberField: '[name="routingNumber"]',
            accountNumberField: '[name="accountNumber"]',  
            saveButton: '[data-test="bankaccount-submit"]',
            doneButton: '[data-test="user-onboarding-next"]',
        }

        return selectors
    }

    setUpNewBankAccount() {
        cy.get(this.selectorsList().onboardingTitle).should('be.visible')
        cy.get(this.selectorsList().onboardingBody).should('be.visible')   
    }

    createBankAccount(bankName, routingNumber, accountNumber) {
        cy.get(this.selectorsList().nextButton).click() 
        cy.get(this.selectorsList().onboardingTitle).should('be.visible')
        cy.get(this.selectorsList().bankNameField).type(bankName)
        cy.get(this.selectorsList().routingNumberField).type(routingNumber)
        cy.get(this.selectorsList().accountNumberField).type(accountNumber)
        cy.get(this.selectorsList().saveButton).click()  
        cy.get(this.selectorsList().doneButton).click()
    }
    
}

export default bankAccountPage