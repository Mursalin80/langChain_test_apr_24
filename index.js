import { StringOutputParser } from "@langchain/core/output_parsers";

import { text_spliter, readFile } from "./utils/utils.js";
import { google_LLM as g_model } from "./llms/llm_models.js";
import { stQ_propmt } from "./utils/promptTemp.js";
import { retriever } from "./utils/retriever.js";

// text spliter
let file_data = await readFile("./data.txt");
let split_text = await text_spliter(file_data);

// let tempChain = promptTemp.pipe(g_model).pipe(retriver);
let stQ_chain = stQ_propmt
  .pipe(g_model)
  .pipe(new StringOutputParser())
  .pipe(retriever);
let response = await stQ_chain.invoke({
  question:
    "where stars twinkle like distant dreams and galaxies spiral in an eternal dance.",
});

// let ret_res = await retriver.invoke(" where stars twinkle like distant ");

// console.log({ ret_res });
// console.log({ st_qu_chain });
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
