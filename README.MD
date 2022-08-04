# :package: Desafio técnico: E-commerce com AWS
por João Lage

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

### Tópicos

- [Imagens do projeto](#camera-imagens-do-projeto)

- [Descrição do projeto](#man_dancing-descrição-do-projeto)

- [Melhorias possíveis](#construction-melhorias-possíveis)

- [Stacks utilizadas](#books-stacks-utilizadas)

- [Etapa mais desafiadora](#goberserk-etapa-mais-desafiadora)

- [Abrir e rodar o projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)

- [Feedback sobre o desafio](#recycle-feedback-sobre-o-desafio)


# :camera: Imagens do projeto

<spam>
  <img src="/images/GET-tickets.png" alt="GET de ingressos" width="1000"/>
  <img src="/images/POST-login.png" alt="POST para validação do token" width="1000"/>
</spam>

# :man_dancing: Descrição do Projeto

Desafio proposto pela PM Capital para:

- Back-end:
  * a API REST de uma aplicação na AWS baseado em microserviços e containers que forneça os serviços de:
  * CRUD de clientes,
  * CRUD de carrinhos (que serão usados pelos clientes)
  * e CRUD de ingressos para os eventos.
  * É importante enfatizar que a criação de ingressos só pode ser feita por um usuário administrador.:



O que foi realizado:
- [x] Setup do projeto com arquitetura de software
- [x] Configuração do banco de dados
- [x] Dockerizar aplicação
- [x] Tipar todos arquivos corretamente
- [x] Criar classes abstratas para o modelo MSC (models, services e controllers )
- [x] Adicionar linter ao projeto
- [x] Fazer validações com Zod
- [x] CRUD de clientes
- [x] CRUD de carrinhos
- [x] CRUD de ingressos para os eventos
- [x] Servidor cloud EC2 na AWS
- [ ] criação de ingressos só pode ser feita por um usuário administrador



# :construction: Melhorias possíveis:

- Testes para o back-end.
- Melhorar regra de negócio.
- Implementar.
- Subir a aplicação para o HEROKU.

# :books: Stacks utilizadas

### Front-end
- [ReactJs](https://pt-br.reactjs.org/)

### Back-end
- [TypeScript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/) 
- [Nodemon](https://www.npmjs.com/package/nodemon) 
- [Zod](https://www.npmjs.com/package/zod)
- [Express](https://expressjs.com/pt-br/) 

# Etapa mais desafiadora

- Utilizar o TypeScript com excelencia e aplicar POO para criar uma aplicação de fácil manutenibilidade e com facilidade para implentar novas features.
- Realizar regras de negocio parao.
- Aprender sobre AWS e o seu ecossistema.

# 🛠️ Abrir e rodar o projeto

1. Clone o repositório
  * `git clone git@github.com:JoaoPedroLage/RadarFit-Olimpiadas-Joao-Lage.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd backend`

2. Instale as dependências e inicialize
  * Instale as dependências no back-end:
    * `npm install`
  * Inicialize o projeto:
    * Inicialize o seu servidor MySQL
    * Coloque as suas variáveis de ambiente em um arquivo `.env` com base no `.env.example` e `também diretamente em back-end\src\database\config\config.ts`.
    * Na pasta do back-end execute no seu terminal `npm start` (o back-end começará a rodar na porta 3001, o script irá popular um banco de dados com base nas variáveis de ambiente).
    * Caso o `npm start` não rode corretamente, siga com seguintes comandos:
  * cd scripts
  * chmod +x tsc_eval.sh
  * chmod +x reset-db-dev.sh
  * `npx -y tsc`
  * `npx sequelize-cli db:drop`
  * `npx sequelize-cli db:create`
  * `npx sequelize-cli db:migrate`
  * `ts-node-dev src/api/index.ts`

##  API Documentation
   . Endpoints e atributos das tabelas do banco de dados
   
#### Returns all tickets

```http
  GET /tickets
```
#### Delete one item

```http
  DELETE /ticket/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Mandatory**. ID item |


#### Update one item

```http
  UPDATE /ticket/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Mandatory**. ID item |


#### Signup

```http
  POST /login
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **your email** |
| `password`      | `string` | **your password** |


# :recycle: Feedback sobre o desafio

- A regra de negócio para ** foi a parte mais dificil para mim, acredito que com com a ajuda de um Senior Lead eu consegueria realizar essa tarefa com mais destreteza e com muito mais eficiência, continuarei a tentar a solução.
- Outro ponto que gostaria de expor, é que eu me identifiquei de verdade com a empresa e a proposta de trabalho, como mencionei na entrevista, o que mais prezo em um emprego é um ambiente de trabalho seguro e confortável para eu poder ser o mais produtivo possível, eu sinceramente, senti que a PM Capital passa esse sentimento, desde já agradeço a oportunidade.
- No mais, foi um ótimo desafio. Coloquei em prática muitos dos meus conhecimentos do NodeJs, TypeScript e POO.
