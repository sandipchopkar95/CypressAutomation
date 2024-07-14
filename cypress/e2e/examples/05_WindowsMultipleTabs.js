///<reference types="Cypress"/> 
describe('My Fifth test Suite', function () {
    it('functional methods', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //handeling windows -> multiple tabs
        //will remove target attribute form DOM & open the url in the same tab
        cy.get('fieldset a#opentab').invoke('removeAttr', 'target').click()
        // cy.get('fieldset a#opentab').click()  // because of this the url will open in another tab & cypress can't handle another tab elements
        //  cy.get('.nav-item a[href="about.html"]').click() // it will not work because cypress can't work on cross domain

        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('.nav-item a[href="about.html"]').click()
            cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ')
        })
    })
})