// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(inputLoginUsername,inputLoginPassword)=>{
    cy.visit('') //calls the default baseURL
    cy.get('#input-email').type(inputLoginUsername)
    cy.get('#input-password').type(inputLoginPassword)
    cy.get('input.btn.btn-primary').click()
})

Cypress.Commands.add('logout',()=>{
    cy.get('span.caret').click()
    cy.get('ul.dropdown-menu.dropdown-menu-right').should('be.visible')
    cy.get('li').contains('Logout').click()
    cy.url().should('contain','route=account/logout')
    cy.get('h1').should('contain','Account Logout')
})