# Hub de Leitura - Ui Tests

Este repositório contém testes automatizados de interface (UI) desenvolvidos com **Cypress** para o sistema **Hub de Leitura**, com foco em testes end-to-end (E2E).

O projeto foi desenvolvido durante o curso de Qualidade de Software da EBAC, aplicando boas práticas de automação de testes.

## Sistema Testado

Os testes deste projeto são executados sobre a aplicação **Hub de Leitura**, disponibilizada pela EBAC para fins educacionais.

Repositório da aplicação:

https://github.com/EBAC-QE/hub-de-leitura-integrado

⚠️ Antes de rodar os testes, certifique-se de que o servidor da aplicação esteja rodando localmente conforme as instruções do README oficial.

## Execução dos testes (UI)

### Pré-requisitos

- Node.js (versão LTS)
- npm
- Editor de código (Visual Studio Code recomendado)
- Aplicação **Hub de Leitura** rodando localmente

### Instalação do projeto de testes

Clone este repositório e instale as dependências:
```bash
git clone https://github.com/rm-oliveira/hub-leitura-ui-tests.git

cd hub-leitura-ui-tests

npm install
````

### Executando os testes

Abrir o Cypress em modo interativo:
```bash
npx cypress open
```
Executar os testes em modo headless:
```bash
npx cypress run
```
### Configuração da aplicação

A URL da aplicação testada pode ser ajustada no arquivo cypress.config.js.

http://localhost:3000/

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git & GitHub