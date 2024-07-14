//Cypress code -> Spec file (test file)
///<reference types="Cypress"/> 
describe('My first test Suite', function () {
    it('My first test', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('form input.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productsLocator')
        //parent child chaining
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click()

        //parent child with itertor
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        /*   it will not work
        const logo=cy.get('div.brand')
        cy.log(logo.text())
        if we need to convert cypress to javascript then we need to give then condition */

        //this is to print in log
        cy.get('div.brand').then(function (logoElement) {
            cy.log(logoElement.text())
        })
        // cy.log(cy.get('div.brand').text())   // text is not cypress command (its Jquery method)

        //this is to comapare
        cy.get('div.brand').should('have.text','GREENKART')

    })

})