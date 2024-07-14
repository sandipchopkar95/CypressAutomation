//Cypress code -> Spec file (test file)
///<reference types="Cypress"/> 
describe('My Second test Suite', function () {
    it('Add to cart Test', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('form input.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productsLocator')
        //parent child with itertor
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()

    })

})