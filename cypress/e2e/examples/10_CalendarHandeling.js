///<reference types="Cypress"/> 
describe('calendar handeling suite', function () {
    it('select date in calendar', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        const monthNumber = "5"
        const date = "30"
        const year = "2026"
        const expectedList=[monthNumber,date,year]
        cy.get('div.react-date-picker__inputGroup').click()
        cy.get('button.react-calendar__navigation__label').click()
        cy.get('button.react-calendar__navigation__label').click()
        cy.contains("button", year).click()
        cy.get('button.react-calendar__year-view__months__month').eq(Number(monthNumber) - 1).click()
        //cy.contains('button abbr:active',date).click()  //will create conflict if last months date also visible
        cy.get('button.react-calendar__month-view__days__day')
            .not('.react-calendar__month-view__days__day--neighboringMonth')
            .contains(date)
            .click();

            //Assertion in list
            cy.get('input.react-date-picker__inputGroup__input').each(($el,index,$list)=>{
                cy.wrap($el).invoke('val').should('eq',expectedList[index])
            })
    })
})