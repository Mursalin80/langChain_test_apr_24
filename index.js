import { ChatPromptTemplate } from "@langchain/core/prompts";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { StringOutputParser } from "@langchain/core/output_parsers";

import { text_spliter, readFile } from "./utils/utils.js";
import { google_LLM as g_model } from "./llms/llm_models.js";
import { hf_embeddings } from "./utils/hf_embedding.js";
import { createSupabaseClient } from "./utils/supabase.js";

const outputParser = new StringOutputParser();

// text spliter
let file_data = await readFile("./data.txt");
let split_text = await text_spliter(file_data);
// pinecone

// Prompt templete
let temp = `There you ask a quection:{question}`;
let promptTemp = ChatPromptTemplate.fromTemplate(temp);
// standalone question prompt
let standaloneQuestion = `The given a question, convert it to standalone question question:{question} standalone question:`;
let st_qu_propmt = ChatPromptTemplate.fromTemplate(standaloneQuestion);

// let tempChain = promptTemp.pipe(g_model);
// let st_qu_chain = st_qu_propmt.pipe(g_model);

// let st_response = await st_qu_chain.invoke({
//   question:
//     "i am lover of imran khan and following all news about imran khan,please provide the brife information about imran khan pakistan",
// });

// let response = await tempChain.invoke({
//   question:
//     "i am lover of imran khan and following all news about imran khan,please provide the brife information about imran khan pakistan",
// });

// const prompt = ChatPromptTemplate.fromMessages([
//   ["system", "Welcome to LLM."],
//   ["user", "{input}"],
// ]);

// const chain = prompt.pipe(g_model).pipe(outputParser);
// Batch and stream are also supported
// const res = await chain.invoke({
//   input: "who is imran khan, pakistan",
// });

console.log("App is Running!!!!!!!!!");
