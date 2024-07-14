//Cypress code -> Spec file (test file)
///<reference types="Cypress"/> 
describe('My Third test Suite', function () {
    it('functional methods', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('fieldset input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdown  -> tag name should be select
        cy.get('select#dropdown-class-example').select('option2').should('have.value', 'option2')

        //Dynamic dropdown 
        cy.get('input#autocomplete').type('ind')
        cy.get('li.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "India") {
                cy.wrap($el).click()
            }
        })
        cy.get('input#autocomplete').should('have.value', 'India')

        //handling invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio Buttons handling
        cy.get('input[value="radio1"]').check().should('be.checked')
    })

})