///<reference types="Cypress"/> 
describe('My Eight test Suite', function () {
    it('functional methods', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // Handling child window
        cy.get('fieldset #opentab').then(function (el) {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get('.nav-item a[href="about.html"]').click()
                cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ')
            })
        })
    })
})