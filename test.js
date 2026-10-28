import { AkinatorClient, Languages } from "akinator-client";

try {
  const aki = new AkinatorClient({ language: Languages.EN });
  await aki.start();
  console.log("It works! First question:", aki.question);
} catch (err) {
  console.error("Failed:", err.message);
}