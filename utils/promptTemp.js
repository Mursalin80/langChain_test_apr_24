import { ChatPromptTemplate } from "@langchain/core/prompts";

// Prompt templete
// let temp = `There you ask a quection:{question}`;
// let promptTemp = ChatPromptTemplate.fromTemplate(temp);

// standalone question prompt
let standaloneQuestion = `The given a question, convert it to standalone question question:{question} standalone question:`;
export const stQ_propmt = ChatPromptTemplate.fromTemplate(standaloneQuestion);
