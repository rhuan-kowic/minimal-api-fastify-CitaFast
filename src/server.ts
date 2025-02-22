import fastify from "fastify";
import { quotesRoutes } from "./routes/quotesRoutes";

const server = fastify();

// Registra as rotas
server.register(quotesRoutes);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.log("Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
  console.log(`Servidor iniciado em ${address}`);
});
