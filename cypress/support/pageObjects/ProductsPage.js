class ProductsPage
{

getCheckOut()
{
    return cy.get('a[class="nav-link btn btn-primary"]')
}

getSum()
{
    return cy.get('tr td:nth-child(4) strong')
}

getcheckoutbutton()
{
    return cy.get('button[class="btn btn-success"]')
}
getCountry()
{
    return cy.get('input[id="country"]')    
}

getDropdown()
{
    return cy.get('.suggestions > ul > li > a')
}

getCheckBox()
{
    return cy.get('input[id="checkbox2"]')
}

getPurchase()
{
    return cy.get('input[type="submit"]')
}

GetMessageSuccess()
{
    return cy.get('.alert')
}
    
}

export default ProductsPage;