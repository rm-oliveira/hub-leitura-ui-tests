# Hub de Leitura - Ui Tests

![CI Status](https://github.com/rm-oliveira/hub-leitura-ui-tests/actions/workflows/cypress.yml/badge.svg)

Este repositório contém testes automatizados de interface (UI) desenvolvidos com **Cypress** para o sistema **Hub de Leitura**, com foco em testes end-to-end (E2E).

O projeto foi desenvolvido durante o curso de **Qualidade de Software da EBAC**, aplicando boas práticas de automação e integração contínua.

## Sistema Testado

Os testes são executados sobre a aplicação Hub de Leitura, originalmente disponibilizada pela EBAC para fins educacionais.

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
- Aplicação Hub de Leitura rodando localmente na porta 3000

### Instalação

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

## Cenários Automatizados

Os testes E2E cobrem os principais fluxos da aplicação, aplicando diferentes estratégias de automação como comandos customizados, Page Objects, massa de dados dinâmica e uso da biblioteca Faker.

### Login

- Login com credenciais válidas
- Login utilizando comando customizado
- Login com perfil administrador
- Login utilizando massa de dados dinâmica com Faker

### Cadastro de Usuário

- Cadastro com dados válidos
- Cadastro utilizando geração dinâmica de e-mail com JavaScript
- Cadastro utilizando biblioteca Faker
- Cadastro utilizando comandos customizados
- Cadastro utilizando padrão Page Object
- Validação de mensagem de erro ao tentar cadastrar sem preencher o nome

### Formulário de Contato

- Envio de formulário com sucesso
- Validação de erro ao enviar sem preencher:
  - Nome
  - E-mail
  - Assunto
  - Mensagem

### Catálogo de Livros

- Adição de livro à cesta
- Adição de múltiplos livros à cesta
- Interação com posições específicas da lista (primeiro, último e terceiro item)
- Navegação para página de detalhes do livro ao clicar no nome

### Busca no Catálogo

- Busca por título específico
- Busca utilizando massa de dados externa
- Busca utilizando Fixture
- Validação da listagem completa de livros exibidos

### Configuração da aplicação

A URL base da aplicação pode ser ajustada no arquivo:
```bash
cypress.config.js
```

URL padrão utilizada:
```bash
http://localhost:3000/
```

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git & GitHub
- GitHub Actions (CI)