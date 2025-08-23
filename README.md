# EXPRESS-SWAGGER

## Visão Geral

Bem-vindo ao projeto **EXPRESS-SWAGGER**! Este repositório apresenta uma implementação prática de documentação Swagger automática integrada a uma aplicação Express.js utilizando a biblioteca `express-zod-api`. O principal objetivo deste projeto é demonstrar como construir uma API RESTful robusta e bem documentada com TypeScript, aproveitando o Swagger para documentação interativa de APIs e o `express-zod-api` para um desenvolvimento de API simplificado com validação de esquemas.

Este projeto serve como um recurso educacional e um ponto de partida para desenvolvedores que desejam combinar o poder do Express.js com a geração automática de documentação Swagger, garantindo que as APIs sejam funcionais e fáceis de entender para os consumidores.

## Recursos

- **Documentação Swagger Automática**: Gera especificações Swagger (OpenAPI) dinamicamente usando `express-zod-api`.
- **Suporte a TypeScript**: Garante segurança de tipos e melhora a experiência do desenvolvedor.
- **Validação de Esquemas**: Utiliza Zod para validação de entrada, integrado seamlessly aos endpoints da API.
- **Integração com Express.js**: Constrói-se sobre o framework leve e flexível Express.
- **Documentação Interativa da API**: Oferece uma interface Swagger UI amigável para teste e exploração de endpoints.

## Tecnologias Utilizadas

- **Node.js**: Runtime JavaScript para construção de aplicações do lado do servidor.
- **Express.js**: Framework de aplicação web para Node.js, usado para lidar com requisições HTTP e roteamento.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos para maior escalabilidade e manutenibilidade.
- **express-zod-api**: Biblioteca poderosa que combina Express com Zod para roteamento e validação de API, com suporte integrado ao Swagger.
- **Swagger/OpenAPI**: Especificação e ferramentas para descrever, produzir e consumir APIs RESTful.
- **Zod**: Validação de esquemas baseada em TypeScript com inferência estática de tipos.

## Primeiros Passos

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/RicardoTavaresDias/EXPRESS-SWAGGER.git
   cd EXPRESS-SWAGGER
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` no diretório raiz e adicione as configurações necessárias (ex.: número da porta, chaves de API, se aplicável). Consulte o exemplo `.env.example` (se fornecido) ou use as configurações padrão.

4. Compile o projeto:
   ```bash
   npm run build
   ```

5. Inicie a aplicação:
   ```bash
   npm start
   ```

### Uso

Depois que o servidor estiver em execução (porta padrão: 3000), você pode acessar a Swagger UI em:
```
http://localhost:3000/docs
```

- Explore a documentação da API gerada automaticamente.
- Teste os endpoints diretamente na Swagger UI enviando requisições com dados de exemplo.
- A integração com `express-zod-api` garante que todos os endpoints sejam validados contra os esquemas Zod definidos, com erros refletidos na saída do Swagger.

### Exemplo de Endpoint

Suponha que um endpoint simples `/users` esteja definido. A Swagger UI exibirá:

- **GET /users**: Recupera uma lista de todos os usuários.
- **GET /users/:id**: Recupera os detalhes de um usuário específico com base no ID fornecido.
- **POST /users**: Cria um novo usuário com um payload validado (ex.: `name: string`, `email: string`).

Corpo de exemplo para POST `/users`:
```json
{
  "name": "João Silva",
  "email": "joao.silva@example.com"
}
```

## Estrutura do Projeto

```
EXPRESS-SWAGGER/
├── src/
│   ├── config/           # Arquivos de configuração (ex.: configurações de ambiente)
│   ├── controller/       # Controladores da API
│   ├── database/         # Banco de dados memória
│   ├── docs/             # Documentação, Swagger
│   ├── middlewares/      # Middlewares personalizados para a aplicação
│   ├── repositories/     # Camada de acesso a dados
│   ├── routes/           # Definições de rotas da API
│   ├── schemas/          # Esquemas Zod para validação
│   ├── services/         # Camada de serviços/lógica de negócios
│   ├── app.ts            # Configuração principal da aplicação
│   └── server.ts         # Configuração do servidor
└── .env                  # Variáveis de ambiente
```

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature-branch`).
3. Faça suas alterações e commit (`git commit -m "Adiciona nova funcionalidade"`).
4. Envie para a branch (`git push origin feature-branch`).
5. Abra um Pull Request com uma descrição detalhada de suas alterações.

Certifique-se de que seu código segue os padrões de TypeScript e linting do projeto.

## Licença

Este projeto é de código aberto e está disponível sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
