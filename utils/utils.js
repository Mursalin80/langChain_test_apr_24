import fs_pro from "fs/promises";
import fs from "fs";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

// text spliter
export const recursiveCharacterTextSplitter =
  new RecursiveCharacterTextSplitter({
    chunkSize: 40,
    separators: ["\n\n", "\n", " ", ""], // dedault setting
    chunkOverlap: 4,
  });

// fs read file
export const readFile = async function (filePath) {
  try {
    return await fs_pro.readFile(filePath, "utf8");
  } catch (err) {
    console.log({ "Error in readFile ": err });
  }
};

// fs write stream to md file
export const writeSplitTextToMarkdown = (splitText, filePath) => {
  const writeStream = fs.createWriteStream(filePath);
  // Iterate through each document in the split text
  for (const doc of splitText) {
    // Write the page content to the file
    writeStream.write(doc.pageContent + "\n\n", (er) => {
      if (er) {
        console.log("write stream error", er);
      }
    });
  }
  // Close the write stream
  writeStream.end();
  console.log(`Markdown file "${filePath}" has been successfully created.`);
};

export const text_spliter = (file) =>
  recursiveCharacterTextSplitter.createDocuments([file]);
export const split_text_content = () =>
  split_text.map((doc) => doc.pageContent);
