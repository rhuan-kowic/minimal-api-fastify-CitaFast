import { Quote, quotes } from "../model/quote";

// Controlador para pegar todas as citações
export const getAllQuotes = async () => {
  return quotes;
};

// Controlador para pegar uma citação aleatória
export const getRandomQuote = async () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

// Controlador para adicionar uma nova citação
export const addQuote = async (quote) => {
  const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1;
  const newQuote: Quote = { id: newId, ...quote };
  quotes.push(newQuote);
  return newQuote;
};
