class HomePage {
    getNameTextBox() {
        return cy.get('.form-group input[name="name"]')
    }
    getGender() {
        return cy.get('.form-group select')
    }
    getEnterpreneur() {
        return cy.get('#inlineRadio3')
    }
    getShopTab() {
        return cy.get('.navbar-nav a').contains('Shop')
    }
}

export default HomePage