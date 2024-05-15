import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

import { createSupabaseClient } from "./supabase";
import { hf_embeddings } from "./hf_embedding";

// vector store and retriver
export const vectorStore = new SupabaseVectorStore(hf_embeddings, {
  client: createSupabaseClient(),
  tableName: "documents",
  queryName: "match_documents",
});

// retriever
export const retriever = vectorStore.asRetriever();
