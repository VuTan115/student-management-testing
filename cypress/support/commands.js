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
const getConsultantAuth = () => {
  return {
    email: Cypress.env('roles').consultant.email,
    password: Cypress.env('roles').consultant.password,
  }
}

const getStudentAuth = () => {
  return {
    email: Cypress.env('roles').student.email,
    password: Cypress.env('roles').student.password,
  }
}

Cypress.Commands.add('loginAs', role => {
  cy.visit('/')
  if (role === 'consultant') {
    cy.get('input[name="email"]').type(getConsultantAuth().email)
    cy.get('input[name="password"]').type(getConsultantAuth().password)
  }
  if (role === 'student') {
    cy.get('input[name="email"]').type(getStudentAuth().email)
    cy.get('input[name="password"]').type(getStudentAuth().password)
  }
  cy.get('button[type="submit"]').click()
})
