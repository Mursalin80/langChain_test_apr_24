import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";

// Prompt templete
// let temp = `There you ask a quection:{question}`;
// let promptTemp = ChatPromptTemplate.fromTemplate(temp);

// standalone question prompt
let standaloneQuestion = `The given a question, convert it to standalone question question:{question} standalone question:`;
let answerTemplate = `Try to find the answer in the context. if you really don't know the answer, say "I'm sorry, I doon't know the answer to that question
 context:{context}
 question: {question}
 answer:
 `;

export const questionPropmt =
  ChatPromptTemplate.fromTemplate(standaloneQuestion);
export const answerPrompt = ChatPromptTemplate.fromTemplate(answerTemplate);

let punctuationTemp = `Given a sentence,add punctuation where needed.
 sentence: {sentence} 
 sentence with punctuation:
 `;
export const punctuationPrompt = PromptTemplate.fromTemplate(punctuationTemp);

let grammerTemp = `Given a sentence correct the grammar.
sentence:{punctuation_sentence}
sentence with correct grammar:`;
export const grammarPrompt = PromptTemplate.fromTemplate(grammerTemp);

let translationTemp = `Given a sentence, translate that sentence into {language}
sentence:{grammatically_correct_sentence}
translated sentence:`;
export const translatationPrompt = PromptTemplate.fromTemplate(translationTemp);
