Claro! Aqui está um modelo de **README** para o seu projeto de **API minimalista** sobre **citações** com Fastify e TypeScript:

---

# Minimal API Fastify - CitaFast

**CitaFast** é uma API minimalista desenvolvida com **Fastify** e **TypeScript**, projetada para gerenciar citações. Esta API permite consultar citações de forma simples e eficiente, com três principais funcionalidades: pegar uma citação aleatória, pegar todas as citações e adicionar novas citações.

## Funcionalidades

A API oferece três principais endpoints:

1. **GET /random**  
   Retorna uma citação aleatória.

2. **GET /all**  
   Retorna todas as citações cadastradas.

3. **POST /add**  
   Permite adicionar uma nova citação.

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/minimal-api-fastify-citafast.git
cd minimal-api-fastify-citafast
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente (se necessário)

Se você quiser armazenar as citações em um banco de dados ou arquivo, configure as variáveis de ambiente conforme necessário. Por enquanto, este exemplo usa um armazenamento simples em memória.

### 4. Rodar o projeto

Para rodar a API no modo de **desenvolvimento** (com recarregamento automático):

```bash
npm run dev
```

Ou, para compilar e rodar a versão de produção:

```bash
npm run build
npm run serve
```

## Endpoints

### `GET /random`
Retorna uma citação aleatória.

**Exemplo de resposta:**

```json
{
  "quote": "A vida é o que acontece enquanto estamos ocupados fazendo outros planos.",
  "author": "John Lennon"
}
```

### `GET /all`
Retorna todas as citações armazenadas.

**Exemplo de resposta:**

```json
[
  {
    "quote": "A vida é o que acontece enquanto estamos ocupados fazendo outros planos.",
    "author": "John Lennon"
  },
  {
    "quote": "Se você pode sonhar, você pode fazer.",
    "author": "Walt Disney"
  }
]
```

### `POST /add`
Adiciona uma nova citação. Você deve enviar um corpo de solicitação com os seguintes parâmetros:

- `quote`: Texto da citação (obrigatório)
- `author`: Autor da citação (obrigatório)

**Exemplo de solicitação:**

```json
{
  "quote": "O único modo de fazer um excelente trabalho é amar o que você faz.",
  "author": "Steve Jobs"
}
```

**Exemplo de resposta:**

```json
{
  "message": "Citação adicionada com sucesso."
}
```

## Estrutura do Projeto

```
.
├── src/               # Código fonte do projeto (aplicação)
│   ├── controllers/    # Lógica para manipulação de citações
│   ├── model/         # Modelos e estrutura de dados
│   ├── routes/         # Definição das rotas da API
│   ├── server.ts       # Entrypoint do servidor (inicialização do Fastify)
├── dist/               # Diretório gerado após a compilação do TypeScript
├── package.json        # Dependências e scripts do projeto
├── tsconfig.json       # Configurações do TypeScript
└── node_modules/       # Dependências do Node.js

```

## Dependências

- `fastify`: Framework web rápido e leve.
- `typescript`: Compilador TypeScript.
- `tsx`: Ferramenta para rodar arquivos TypeScript diretamente (usado no desenvolvimento).
- `tsup`: Empacotador de código para o TypeScript.

## Licença

Este projeto está licenciado sob a **Licença MIT**.

---
