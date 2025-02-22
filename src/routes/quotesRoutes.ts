import { FastifyInstance } from "fastify";
import {
  getAllQuotes,
  getRandomQuote,
  addQuote,
} from "../controllers/quotesController";
import { Quote } from "../model/quote";

export async function quotesRoutes(server: FastifyInstance) {
  // Rota para pegar todas as citações
  server.get("/all", async (request, response) => {
    return getAllQuotes();
  });

  // Rota para pegar uma citação aleatória
  server.get("/random", async (request, response) => {
    return getRandomQuote();
  });

  // Rota para adicionar uma nova citação
  server.post<{ Body: Quote }>("/add", async (request, response) => {
    const { quote, author } = request.body;
    if (!quote || !author) {
      response.status(400).send({
        message: "Quote and author are required.",
      });
      return;
    }

    const newQuote = await addQuote({ quote, author });
    response.status(201).send({
      message: "Citação adicionada com sucesso.",
      quote: newQuote,
    });
  });
}
