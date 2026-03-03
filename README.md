# Hub de Leitura - Ui Tests

![CI Status](https://github.com/rm-oliveira/hub-leitura-ui-tests/actions/workflows/cypress.yml/badge.svg)

Este repositório contém testes automatizados de interface (UI) desenvolvidos com **Cypress** para o sistema **Hub de Leitura**, com foco em testes end-to-end (E2E).

O projeto foi desenvolvido durante o curso de Qualidade de Software da EBAC, aplicando boas práticas de automação de testes.

## Sistema Testado

Os testes deste projeto são executados sobre a aplicação Hub de Leitura, originalmente disponibilizada pela EBAC para fins educacionais.

Repositório da aplicação (fork utilizado neste projeto):

https://github.com/rm-oliveira/hub-de-leitura-integrado

Projeto original da EBAC:

https://github.com/EBAC-QE/hub-de-leitura-integrado

⚠️ Para execução local, certifique-se de que o servidor esteja rodando conforme as instruções do repositório da aplicação (porta 3000).

## Integração Contínua (CI)

Este projeto possui pipeline automatizada utilizando **GitHub Actions**, que:

- Clona o servidor da aplicação
- Instala as dependências
- Sobe o ambiente automaticamente
- Aguarda a disponibilidade da aplicação
- Executa os testes E2E em modo headless

Os testes são executados automaticamente a cada push na branch `main`.

## Execução dos testes (Local)

### Pré-requisitos

- Node.js (versão LTS)
- npm
- Aplicação **Hub de Leitura** rodando localmente na porta 3000

### Instalação

Clone este repositório e instale as dependências:
```bash
git clone https://github.com/rm-oliveira/hub-leitura-ui-tests.git

cd hub-leitura-ui-tests

npm install
````

### Executando os testes

Modo interativo:
```bash
npx cypress open
```
Modo headless:
```bash
npm test
```
### Configuração da aplicação

A URL base da aplicação pode ser ajustada no arquivo:

http://localhost:3000/

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git & GitHub
- GitHub Actions (CI)