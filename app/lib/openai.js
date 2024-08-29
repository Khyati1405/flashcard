// lib/openai.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateFlashcards = async (topic) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a set of flashcards for the topic: ${topic}`,
    max_tokens: 500,
  });

  return response.data.choices[0].text.trim().split("\n").map((flashcard) => {
    const [question, answer] = flashcard.split("?");
    return { question: question.trim(), answer: answer.trim() };
  });
};
