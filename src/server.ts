import fastify from "fastify";

const server = fastify();

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const quotes: Quote[] = [
  {
    id: 1,
    quote: "A felicidade é o bem, a tristeza é o mal. A liberdade é o fim.",
    author: "Epicteto",
  },
  {
    id: 2,
    quote:
      "Não é o que acontece com você, mas como você reage a isso que importa.",
    author: "Epicteto",
  },
  {
    id: 3,
    quote:
      "A maior parte dos males é causada pela maneira como reagimos aos eventos, não pelos eventos em si.",
    author: "Marco Aurélio",
  },
  {
    id: 4,
    quote:
      "Você tem poder sobre sua mente, não sobre os eventos externos. Perceba isso, e você encontrará a força.",
    author: "Marco Aurélio",
  },
  {
    id: 5,
    quote: "Não busque a felicidade fora de você, ela está dentro de você.",
    author: "Sêneca",
  },
  {
    id: 6,
    quote:
      "O verdadeiro homem é aquele que, mesmo em sofrimento, encontra o sentido para viver.",
    author: "Friedrich Nietzsche",
  },
  {
    id: 7,
    quote:
      "A vida é essencialmente absurda, e é essa realidade que nos dá liberdade para criar nosso próprio significado.",
    author: "Albert Camus",
  },
  {
    id: 8,
    quote:
      "O mundo não tem sentido, mas nós podemos dar sentido à nossa existência.",
    author: "Jean-Paul Sartre",
  },
  {
    id: 9,
    quote:
      "O homem que sofre antes de ser necessário sofre mais do que é necessário.",
    author: "Seneca",
  },
  {
    id: 10,
    quote:
      "A única coisa que realmente sabemos é que nada sabemos, e isso nos torna livres.",
    author: "Sócrates",
  },
];

server.get("/all", async (request, response) => {
  response.type("application/json").code(200);
  return quotes;
});

server.get("/random", async (request, response) => {
  const aleatoryNumber = Math.floor(Math.random() * quotes.length);
  response.type("application/json").code(200);
  return quotes[aleatoryNumber];
});

server.post<{ Body: Quote }>("/add", (request, response) => {
  const { quote, author } = request.body;
  if (quote != "" && author != "") {
    response.type("application/json").code(200);
    const id = quotes.length + 1;
    const newQuote: Quote = {
      id: id,
      quote: quote,
      author: author,
    };
    quotes.push(newQuote);
    return { message: "Citação adicionada com sucesso." };
  }
});

server.listen({ port: 8080 }, () => {
  console.log("Servidor iniciado");
});
