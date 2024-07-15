///<reference types="Cypress"/> 

import HomePage from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'
import CheckoutPage from '../PageObject/CheckoutPage'
describe('Protocommerce', function () {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    const checkoutPage = new CheckoutPage()

    beforeEach(function () {
        //runs before every test in the block
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Fill form', function () {
        homePage.getNameTextBox().type(this.data.name)
        //homePage.getNameTextBox().should('have.text',this.data.name)
        homePage.getNameTextBox().should('have.attr', 'minlength', 2)
        homePage.getGender().select(this.data.gender)
        homePage.getEnterpreneur().should('be.disabled')
        // cy.pause()   it will pause script
    })

    it('select product and checkout', function () {
        homePage.getShopTab().click()
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
        productPage.getCheckoutButton().click()
        this.data.productName.forEach((productName) => {
            checkoutPage.getAddedProductNames().should('contain.text', productName);
        });
        checkoutPage.getCheckoutButton().click()
        checkoutPage.getCountryTextBox().type('ind')
        cy.wait(5000)
        checkoutPage.getCountrySuggestion().each(($el,index,$list)=>{
            if ($el.text() === "India") {
                cy.wrap($el).click()
            }
        })
        cy.wait(2000)
        checkoutPage.getCheckbox().check({force:true})
        checkoutPage.getPurchaseButton().click()
        checkoutPage.getSucessMessage().should('include.text', 'Success!')

    })
})