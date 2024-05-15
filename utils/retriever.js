import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

import { createSupabaseClient } from "./supabase.js";
import { hf_embeddings } from "./hf_embedding.js";

// vector store and retriver
export const vectorStore = new SupabaseVectorStore(hf_embeddings, {
  client: createSupabaseClient(),
  tableName: "documents",
  queryName: "match_documents",
});

// retriever
export const retriever = vectorStore.asRetriever();
