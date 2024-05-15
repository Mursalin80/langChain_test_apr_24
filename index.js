import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
// import { RunnableSequence } from "langchain/runnables";

import { text_spliter, readFile, combineDoucment } from "./utils/utils.js";
import { google_LLM as g_model } from "./llms/llm_models.js";
import {
  answerPrompt,
  questionPropmt,
  grammarPrompt,
  punctuationPrompt,
  translatationPrompt,
} from "./utils/promptTemp.js";
import { retriever } from "./utils/retriever.js";

// text spliter
let file_data = await readFile("./data.txt");
let split_text = await text_spliter(file_data);

// Runnable Sequence
let punctuationChain = RunnableSequence.from([
  punctuationPrompt,
  g_model,
  new StringOutputParser(),
]);
let grammarChain = RunnableSequence.from([
  grammarPrompt,
  g_model,
  new StringOutputParser(),
]);
let transtationChain = RunnableSequence.from([
  translatationPrompt,
  g_model,
  new StringOutputParser(),
]);
let main_chain = RunnableSequence.from([
  {
    punctuation_sentence: punctuationChain,
    main_inputs: new RunnablePassthrough(),
  },
  {
    grammatically_correct_sentence: grammarChain,
    language: ({ main_inputs }) => main_inputs.language,
  },
  transtationChain,
]);

let res = await main_chain.invoke({
  sentence: "i dont liked mondays",
  language: "french",
});

console.log({ res });

// let tempChain = promptTemp.pipe(g_model).pipe(retriver);
// let chain = questionPropmt
//   .pipe(g_model)
//   .pipe(new StringOutputParser())
//   .pipe(retriever)
//   .pipe(combineDoucment)
//   .pipe(answerPrompt);
// let response = await chain.invoke({
//   question:
//     "where stars twinkle like distant dreams and galaxies spiral in an eternal dance.",
// });

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
