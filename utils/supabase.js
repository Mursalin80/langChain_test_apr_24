import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

import { hf_embeddings as embeddings } from "./hf_embedding.js";
import { config } from "dotenv";
config();

const url = process.env.SUPABASE_URL;
const privateKey = process.env.SUPABASE_PRIVATE_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);
if (!url) throw new Error(`Expected env var SUPABASE_URL`);

export const createSupabaseClient = () => createClient(url, privateKey);
export const sup_vectorStore = () => {
  return new SupabaseVectorStore(embeddings, {
    client: createSupabaseClient(),
    tableName: "documents",
  });
};

export const insertVectorDoc = async (doc) => {
  await SupabaseVectorStore.fromDocuments(doc, embeddings, {
    client: createSupabaseClient(),
    tableName: "documents",
  });
};
