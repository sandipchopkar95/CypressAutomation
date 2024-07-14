///<reference types="Cypress"/> 
describe('Protocommerce', function () {

    beforeEach(function () {
        //runs once before all the test in the block
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Fill form', function () {
        cy.get('.form-group input[name="name"]').type(this.data.name)
        //cy.get('h4 input[name="name"]').should('have.text',this.data.name)
        cy.get('.form-group input[name="name"]').should('have.attr', 'minlength', 2)
        cy.get('.form-group select').select(this.data.gender)
        cy.get('#inlineRadio3').should('be.disabled')
    })

    it('select product', function () {
        cy.get('.navbar-nav a').contains('Shop').click()
        cy.selectProduct('Blackberry')
    })
})