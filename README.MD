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
  <img src="/images/.png" alt="" width="1000"/>
  <img src="/images/.png" alt="" width="1000"/>
</spam>

# :man_dancing: Descrição do Projeto

Desafio proposto pela PM Capital para:

- Back-end:
  * a API REST de uma aplicação na AWS baseado em microserviços e containers que forneça os serviços de:
  * CRUD de clientes,
  * CRUD de carrinhos (que serão usados pelos clientes)
  * e CRUD de ingressos para os eventos.
  * É importante enfatizar que a criação de ingressos só pode ser feita por um usuário administrador.:



O que foi realizado dentre o proposto:
- [x] 
- [x] 
- [x] 
- [x] 
- [x] 
- [x] 
- [x] 
- [ ]

# :construction: Melhorias possíveis:

- Testes para o back-end.
- Melhorar regra de negócio.
- Implementar.
- Subir a aplicação para o HEROKU.

# :books: Stacks utilizadas

### Front-end
- [ReactJs](https://pt-br.reactjs.org/) 
- [Axios](https://axios-http.com/ptbr/docs/intro)

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
  * `npx -y tsc`
  * `npx sequelize-cli db:drop`
  * `npx sequelize-cli db:create`
  * `npx sequelize-cli db:migrate`
  * `ts-node-dev src/api/index.ts`

##  API Documentation
   . Endpoints e atributos das tabelas do banco de dados
   
   #### Create the item

  * Para cadastrar uma nova Competição realizar Post no endpoint: "http://localhost:3001/", insira os dados de acordo com esse exemplo:
   {
        "name": "",
   },
   
```http
  POST /competitions/
```
   #### Update one item
      
   * Para  uma  realizar Patch no endpoint: "http://localhost:3001/" e inserir o id da competição, depois /finish.
   
   ```http
     PATCH //1/finish
   ```
   
    * o retorno será algo como:
      {
          "message": "Competition successfully finished",
          "competition": {
              "id": 1,
              "_name": " ",
              "in_progress": false
          }
       }
   
      *Para cadastrar resultados de uma nova Competição realizar Post no endpoint: "http://localhost:3001/competitions_results",
      insira os dados de acordo com esse exemplo:
      {
        "name": "",
        "name": "Joao das Neves",
        "value": 10,
      },
    
    * Para ver o  realizar Get no endpoint: "http://localhost:3001/", o retorno será algo como:
    [
        {
            "_name": " ",
            "1º": "Joao das Neves",
            "2º": "Joao das Neves"
        },
        {
            "_name": " ",
            "1º": "Claudio",
            "2º": "Claudio"
        }
    ]

# :recycle: Feedback sobre o desafio

- A regra de negócio para ** foi a parte mais dificil para mim, acredito que com com a ajuda de um Senior Lead eu consegueria realizar essa tarefa com mais destreteza e com muito mais eficiência, continuarei a tentar a solução.
- Outro ponto que gostaria de expor, é que eu me identifiquei de verdade com a empresa e a proposta de trabalho, como mencionei na entrevista, o que mais prezo em um emprego é um ambiente de trabalho seguro e confortável para eu poder ser o mais produtivo possível, eu sinceramente, senti que a PM Capital passa esse sentimento, desde já agradeço a oportunidade.
- No mais, foi um ótimo desafio. Coloquei em prática muitos dos meus conhecimentos do NodeJs, TypeScript e POO.
