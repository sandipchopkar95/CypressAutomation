class CheckoutPage {
    getAddedProductNames() {
        return cy.get('h4.media-heading')
    }

    getCheckoutButton() {
        return cy.get('button').contains('Checkout')
    }

    getCountryTextBox() {
        return cy.get('#country')
    }

    getCountrySuggestion() {
        return cy.get('div.suggestions ul li a')
    }

    getCheckbox() {
        return cy.get('#checkbox2')
    }
    getPurchaseButton() {
        return cy.get('input[value="Purchase"]')
    }

    getSucessMessage() {
        return cy.get('div.alert-success')
    }
}

export default CheckoutPage