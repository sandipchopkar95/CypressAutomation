///<reference types="Cypress"/> 
describe('My Sixth test Suite', function () {
    it('functional methods', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //handling webtable
        cy.get('table[name="courses"] tbody tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Python')) {
                cy.get('table[name="courses"] tbody tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

    })
})