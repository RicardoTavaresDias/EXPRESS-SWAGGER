# EXPRESS-SWAGGER

## Visão Geral

Bem-vindo ao projeto **EXPRESS-SWAGGER**!  
Este repositório apresenta uma implementação prática de documentação Swagger automática integrada a uma aplicação **Express.js** utilizando a biblioteca **swagger-jsdoc**.  

O principal objetivo deste projeto é demonstrar como construir uma API RESTful robusta e bem documentada com **TypeScript**, aproveitando o **Swagger** para documentação interativa de APIs e o **swagger-jsdoc** para geração automática da especificação OpenAPI.

Este projeto serve como um recurso educacional e um ponto de partida para desenvolvedores que desejam combinar o poder do **Express.js** com a documentação Swagger, garantindo que as APIs sejam funcionais, validadas e fáceis de entender.

---

## Recursos

- **Documentação Swagger Automática**: Gera especificações Swagger (OpenAPI) dinamicamente usando `swagger-jsdoc`.
- **Suporte a TypeScript**: Garante segurança de tipos e melhora a experiência do desenvolvedor.
- **Integração com Express.js**: Construído sobre o framework leve e flexível **Express**.
- **Documentação Interativa da API**: Interface Swagger UI amigável para teste e exploração de endpoints.

---

## Tecnologias Utilizadas

- **Node.js**: Runtime JavaScript para aplicações backend.
- **Express.js**: Framework web minimalista para Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.
- **swagger-jsdoc**: Gera automaticamente a especificação Swagger a partir de comentários JSDoc.
- **swagger-ui-express**: Integração da UI interativa do Swagger no Express.
- **Zod** *(opcional)*: Biblioteca de validação de esquemas.

---

## Primeiros Passos

### Instalação da biblioteca

Instale swagger jsdoc:
```bash
npm i swagger-jsdoc swagger-ui-express
````

Instale as depedencias typescript :

```bash
npm i @types/swagger-jsdoc @types/swagger-ui-express
```

Configuração tsconfig.json

```ts
   {
      "compilerOptions": {
      "target": "ES2022",
      "lib": ["ES2023"],
      "paths": {
         "@/*": ["./src/*"]
      },
      "module": "commonjs",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "skipLibCheck": true,
      "resolveJsonModule": true
   }
```

Realizar configuração swagger config na pasta src/config/swagger.config.ts:

`````ts
   import swaggerJsDoc from "swagger-jsdoc";
   import swaggerUi from "swagger-ui-express";
   import { Express } from "express";

   const options: swaggerJsDoc.Options = {
      definition: {
         openapi: "3.0.0",
         info: {
            title: "Swagger Express",
            version: "1.0.0",
            description: "Documentação da API usando Swagger",
         },
         servers: [
            {
            url: "http://localhost:3333",
            },
         ],
         components: {
            securitySchemes: {
            // Token
            bearerAuth: {
               type: "http",
               scheme: "bearer",
               bearerFormat: "JWT",
            }
            }
         },
         paths: {}
      },
      apis: ["./src/controller/*.ts"], 
   };

   const swaggerSpec = swaggerJsDoc(options);

   export function setupSwagger(app: Express) {
      app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
   }

`````

Configurar no servidor arquivo app.ts:

```ts
   import express from "express";
   import cors from "cors"
   import { router } from "./routers";
   import { setupSwagger } from "@/config/swagger.config";

   const app = express()

   app.use(express.json())
   app.use(cors())
   app.use(router)

   // Swagger
   setupSwagger(app);

   export { app }
```

Exemplo de definição de rota com documentação no controller:

```ts
   /**
    * @swagger
    * /users:
    *   get:
    *     summary: Lista todos os usuários
    *     tags: [Users]
    *     responses:
    *       200:
    *         description: Lista de usuários retornada com sucesso
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 type: object
    *                 properties:
    *                   id:
    *                     type: string
    *                     example: "123e4567-e89b-12d3-a456-426614174000"
    *                   name:
    *                     type: string
    *                     example: "João Silva"
    *                   email:
    *                     type: string
    *                     example: "joao@email.com"
    */

      index (request: Request, response: Response) {
         const result = getUsersService()

         response.status(200).json(result)
      }

```

---

### Uso

Após iniciar o servidor (porta padrão: **3000**), acesse a documentação Swagger em:

```
http://localhost:3333/docs
```

Lá você pode:

* Explorar os endpoints da API.
* Testar requisições diretamente pela Swagger UI.
* Conferir exemplos de entradas e respostas esperadas.

---

## Estrutura do Projeto

```
EXPRESS-SWAGGER/
├── src/
│   ├── config/           # Arquivos de configuração
│   ├── controller/       # Controladores da API
│   ├── database/         # Banco de dados em memória
│   ├── docs/             # Configuração e documentação Swagger
│   ├── middlewares/      # Middlewares personalizados
│   ├── repositories/     # Acesso a dados
│   ├── routes/           # Rotas da API
│   ├── schemas/          # Schemas de validação (Zod, opcional)
│   ├── services/         # Lógica de negócios
│   ├── app.ts            # Configuração principal
│   └── server.ts         # Inicialização do servidor
└── .env                  # Variáveis de ambiente
```

---

## Layout moderno 

É uma biblioteca que substitui o Swagger UI tradicional por uma interface muito mais moderna e bonita

````bash
npm install @scalar/express-api-reference
````

Configurar no swagger.config.ts para funcionar a lib

````ts
/*

   Realiza seguinte configurações mantendo que já está, mas adicionando conforme a baixo, para a lib funcionar corretamente.

*/

// importar a lib
import { apiReference } from "@scalar/express-api-reference";

export function setupSwagger(app: Express) {
  app.use("/docs", 
   // configurar a lib
    apiReference({
      theme: "modern", // opções: "default", "modern", "dark"
      spec: { content: swaggerSpec },
    }),
    swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

````
