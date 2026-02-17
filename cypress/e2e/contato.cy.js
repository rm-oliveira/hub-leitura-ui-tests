/// <reference types="cypress"/>

describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('#name').type('Rayane')
    cy.get('#email').type('rayane@teste.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher o nome', () => {
    cy.get('#name').clear()
    cy.get('#email').type('rayane@teste.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  })

  it('Deve validar mensagem de erro ao enviar sem preenchero email', () => {
    cy.get('#name').type('Rayane')
    cy.get('#email').clear()
    cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  })

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('#name').type('Rayane')
    cy.get('#email').type('rayane@teste.com')
    //cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('#name').type('Rayane')
    cy.get('#email').type('rayane@teste.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#message').clear()
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  })
})