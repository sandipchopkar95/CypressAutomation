class ProductPage{
    getproductNames(){
        return cy.get('h4.card-title')
    }

    getAddButtons(){
        return cy.get('button.btn-info')
    }
    getCheckoutButton(){
       return cy.get('ul li a.btn-primary')
    }
}

export default ProductPage