/// <reference types="Cypress" />

describe('My First Test',function() 
{
    it('My FirstTest case',function() {

    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.server()
    
    cy.route(
    {
        method: 'PUT',
        Url: 'comments/*',
        status: 404,
        response :{
            error: "Hey comment do not exist"
        },
        delay: 1000



    }).as('UpdateComment')

    cy.get('.network-put').click()

    cy.get('.network-put-comment').should('contain', "Hey comment do not exist")
    

    })

})
