///<reference types="Cypress"/> 
describe('My Seventh test Suite', function () {
    it('functional methods', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Mouse hover activity
        cy.get('.mouse-hover .mouse-hover-content').invoke('show') // it will show the hidden element then perfom action
        cy.contains('Top').click()
        //  cy.contains('Top').click({force:true})   //it will force click on hidden element 
        cy.url().should('include', 'top')
    })
})