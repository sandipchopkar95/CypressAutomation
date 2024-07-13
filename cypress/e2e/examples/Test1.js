//Cypress code -> Spec file (test file)
///<reference types="Cypress"/> 
describe('My first test Suite', function () {
    it('My first test', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('form input.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('div.products .product').should('have.length', 4)
     
    })

})