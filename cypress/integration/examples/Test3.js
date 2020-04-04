/// <reference types="Cypress" />

describe('My Third Test',function() 
{
    it('My FirstTest case',function() {

    //Checkbox testing
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.visit("http://qaclickacademy.com/practice.php")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').click().should('not.be.checked').and('have.value','option1')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //Static Dropdown testing
    cy.get('select').select('option2').should('have.value','option2')

    //Dynamic Dropdown
    cy.get('#autocomplete').type('Phi')
    
    cy.get('.ui-menu-item div').each(($el, index, $list) => {

         if($el.text()==="Philippines")
        {
            $el.click()
        }



    })

    cy.get('#autocomplete').should('have.value', 'Philippines')

    //Handling visible and invisible elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //Handling radio button
    cy.get('input[value="radio1"]').check().should('be.checked').and('have.value','radio1')
    
    //Alert windows
    cy.get('input[id="alertbtn"]').click()
    cy.get('input[id="confirmbtn"]').click()
    cy.on('window:alert',(str)=>
    {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')

    })    

    cy.on('window:confirm',(str)=>
    {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')

    })    

    //Opening New Tab
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','qaclickacademy')
    cy.go('back')

    //Handling WebTables
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        const text=$el.text()
        if(text.includes("Webdriver"))
        {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
                const priceText= price.text()
                expect(priceText).to.equal('30')
            })

        }  
        })

        //Handling Mouse Hover
    cy.get('div[class="mouse-hover-content"]').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')    




    })   
})