//Cypress code -> Spec file (test file)
///<reference types="Cypress"/> 
describe('My Fourth test Suite', function () {
    it('functional methods', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Alert handeling ->Cypress handles alert by itself
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })

})