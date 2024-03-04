const request = require("request");
const fs = require('fs');
const readline = require('readline')

const args = process.argv.slice(2);
const URL = args[0]
const file = args[1]
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

request(URL, (err, response, body) => {
  fs.writeFile(file, body, "utf8", (err) => {
    if (err) {
      console.error(err);
    } else {
      rl.write(`Downloaded and saved ${response.headers["content-length"]} bytes to ${file}`);
    }
  });
})