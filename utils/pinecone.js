import { Pinecone } from "@pinecone-database/pinecone";

import { config } from "dotenv";
config();

export const pc = new Pinecone({
  apiKey: process.env.PC_KEY,
});

export let createIndex = await pc.createIndex({
  name: "haugingface",
  dimension: 768,
  metric: "cosine",
  spec: {
    serverless: {
      cloud: "aws",
      region: "us-east-1",
    },
  },
});

export const pc_upsertDoc = async (embedding) => {
  let mapDoc = embedding.map((doc, i) => ({ id: `vec${i}`, values: doc }));

  let index = pc.Index("haugingface");
  await index.namespace("ns1").upsert(mapDoc);
};
