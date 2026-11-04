const fs = require("fs");
// sync or blocking code
const content = fs.readFileSync("notes.txt", "utf-8");
console.log(content);

// fs.writeFileSync('copy.txt',content,'utf-8')
// fs.appendFileSync("copt.txt", '/n/nhey', "utf-8");
// fs.mkdirSync('games/xyz/a',{recursive:true})
// fs.rmdirSync('games/xyz/a')
// fs.rmdirSync('games/xyz')
// fs.rmdirSync('games')

console.log("Start");
// async or non blocking code
fs.readFile("notes.txt", "utf-8", function (error, data) {
  if (error) console.log(error);
  else console.log("content got", data);
});

console.log('End Script');
