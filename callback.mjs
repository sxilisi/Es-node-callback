import * as fs from "node:fs";

fs.writeFile("message.txt", "Hello Node.js", "utf8", (error) => {
  if (error) throw error;
  console.log("The file 'message.txt' has been saved!");
});
