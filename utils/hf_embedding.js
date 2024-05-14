import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { config } from "dotenv";

config();

export const hf_embeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

export const create_hf_embedding = (docs) => hf_embeddings.embedDocuments(docs);
