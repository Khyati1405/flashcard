// pages/api/generate-flashcards.js
import { generateFlashcards } from "../../lib/openai";
import { saveFlashcards } from "../../lib/flashcards";

export default async function handler(req, res) {
  const { topic, userId } = req.body;
  if (!topic || !userId) {
    return res.status(400).json({ error: "Topic and userId are required" });
  }

  try {
    const flashcards = await generateFlashcards(topic);
    const flashcardsId = await saveFlashcards(userId, topic, flashcards);
    res.status(200).json({ flashcardsId, flashcards });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate flashcards" });
  }
}
