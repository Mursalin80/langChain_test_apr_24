import { HuggingFaceInference } from "@langchain/community/llms/hf";
import { ChatOpenAI } from "@langchain/openai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { config } from "dotenv";
config();

export const huggingFace_LLM = new HuggingFaceInference({
  model: "gpt2",
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

export const openAI_LLM = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY_MS,
});

export const google_LLM = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  maxOutputTokens: 1048, // 2048
  apiKey: process.env.GOOGLE_API_KEY,
});
