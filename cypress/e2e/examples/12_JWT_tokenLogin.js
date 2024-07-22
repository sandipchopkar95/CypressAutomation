///<reference types="Cypress"/>

describe('JWT Login', function () {

    it('Jwt login test', function () {
        cy.LoginAPI().then(function () {
            cy.visit('https://rahulshettyacademy.com/client/auth/login', {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
    })

})