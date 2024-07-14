///<reference types="Cypress"/> 
///<reference types="cypress-iframe"/> 
import 'cypress-iframe'
describe('handeling frames', function () {
    it('iframe handle', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find('.pricing-title').should('have.length',2)
    })
})