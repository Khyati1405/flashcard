// lib/flashcards.js
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const saveFlashcards = async (userId, topic, flashcards) => {
  const docRef = await addDoc(collection(db, "flashcards"), {
    userId,
    topic,
    flashcards,
    createdAt: new Date(),
  });
  return docRef.id;
};
