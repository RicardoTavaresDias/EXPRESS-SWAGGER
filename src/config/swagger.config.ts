import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger Express",
      version: "1.0.0",
      description: "Documentação da API usando Swagger, Express e TypeScript",
    },
    servers: [
      {
        url: "http://localhost:3333",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        }
      }
    },
    paths: {}, // aqui você pode adicionar manualmente ou gerar com JSDoc
  },
  apis: ["./src/controller/*.ts"], 
};

const swaggerSpec = swaggerJsDoc(options);

export function setupSwagger(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}