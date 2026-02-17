/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

  beforeEach(() => {
    cy.visit('register.html')
  });

  it('Deve fazer cadastro com sucesso', () => {
    cy.get('#name').type('Rayane Oliveira')
    cy.get('#email').type('rayane@teste.com')
    cy.get('#phone').type('987654321')
    cy.get('#password').type('teste123')
    cy.get('#confirm-password').type('teste123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard')
  });

   it('Deve fazer cadastro com sucesso usando função JS', () => {
    let email = `rayane${Date.now()}@teste.com`
    cy.get('#name').type('Rayane Oliveira')
    cy.get('#email').type(email)
    cy.get('#phone').type('987654321')
    cy.get('#password').type('teste123')
    cy.get('#confirm-password').type('teste123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard')
  });

  it.only('Deve fazer cadastro com sucesso usando Faker', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('987654321')
    cy.get('#password').type('teste123')
    cy.get('#confirm-password').type('teste123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', nome)
  });
});