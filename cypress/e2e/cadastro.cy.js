/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page'

describe('Funcionalidade: Cadastro', () => {

  beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()
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

  it('Deve fazer cadastro com sucesso usando Faker', () => {
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

  it('Deve preencher cadastro com sucesso usando comando customizado', () => {
    let email = `user${Date.now()}@teste.com`
    let nome = faker.person.fullName({sex: 'female'})
    cy.preencherCadastro(nome, email, '987654321', 'teste123', 'teste123')
    cy.url().should('include', 'dashboard')
  });

  it('Deve fazer cadastro com sucesso usando Page Objects', () => {
    let email = `rayane${Date.now()}@teste.com`
    cadastroPage.preencherCadastro('Rayane Oliveira', email, '987654321', 'teste123', 'teste123')
    cy.url().should('include', 'dashboard')
  });

  it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
    cadastroPage.preencherCadastro('', 'rayane@teste.com', '987654321', 'teste123', 'teste123')
    cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
  });
});