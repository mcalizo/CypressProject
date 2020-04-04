/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
describe('My Second Test',function() 
{
      
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
this.data=data            

        })
    })

it('My First Test case', function() {
const homePage=new HomePage()
const productsPage=new ProductsPage()
    cy.visit(Cypress.env('url'))

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element) {

    
    cy.selectProduct(element)

    }); 
    productsPage.getCheckOut().click()
    var sum=0

    productsPage.getSum().each(($el, index, $list) => {
        const amount=$el.text()
        var res=amount.split(" ")
    res= res[1].trim()
    sum= Number(sum)+Number(res)
    })
    .then(function()
{
    cy.log(sum)
})
cy.get('h3 strong').then(function(element)
{
    const amount=element.text()
    var res=amount.split(" ")
    var total= res[1].trim()
    expect(Number(total)).to.equal(sum)

})    
    productsPage.getcheckoutbutton().click()    
    productsPage.getCountry().type('India')
    productsPage.getDropdown().click()
    productsPage.getCheckBox().click({force: true})
    productsPage.getPurchase().click()
    productsPage.GetMessageSuccess().then(function(element)
    {
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
    })


  

})

 
   
})
