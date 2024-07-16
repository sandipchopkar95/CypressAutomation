///<reference types="Cypress"/>

import HomePage from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'
import CheckoutPage from '../PageObject/CheckoutPage'

describe('Protocommerce', function () {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    const checkoutPage = new CheckoutPage()

    beforeEach(function () {
        // Runs before every test in the block
        cy.visit(Cypress.env('url') +"/angularpractice/") //calling url from config.js
        cy.fixture('example').then((data) => {
            this.data = data
        })
    })

    it('Fill form', function () {
        homePage.getNameTextBox().type(this.data.name)
        homePage.getNameTextBox().should('have.attr', 'minlength', 2)
        homePage.getGender().select(this.data.gender)
        homePage.getEnterpreneur().should('be.disabled')
    })

    it('select product and checkout', function () {
        Cypress.config('defaultCommandTimeout', 8000) //This wait will apply to whole test (It will override default wait)
        homePage.getShopTab().click()
        this.data.productName.forEach((element) => {
            cy.selectProduct(element)
        })
        productPage.getCheckoutButton().click()
        this.data.productName.forEach((productName) => {
            checkoutPage.getAddedProductNames().should('contain.text', productName)
        })
        var sum = 0
        checkoutPage.getSelectedProductsPrice().each(($el) => {
            const amount = $el.text()
            var price = amount.split(" ")
            price = price[1].trim()
            sum = Number(sum)  + Number(price)
        }).then(function(){
            cy.log(sum)
        })
        checkoutPage.getTotalPrice().then(function(element){
           const total = element.text()
           var totalPrice=total.split(" ")
           totalPrice=totalPrice[1].trim()
           expect(sum).to.equal(Number(totalPrice))
        })
        checkoutPage.getCheckoutButton().click()
        checkoutPage.getCountryTextBox().type('ind')
        cy.wait(2000)
        checkoutPage.getCountrySuggestion().each(($el) => {
            if ($el.text() === "India") {
                cy.wrap($el).click()
            }
        })
        checkoutPage.getCheckbox().check({ force: true })
        checkoutPage.getPurchaseButton().click()
        checkoutPage.getSucessMessage().should('include.text', 'Success!')
    })
})
