const fs = require("fs");
const content = fs.readFileSync("notes.txt", "utf-8");
// console.log(content);

// fs.writeFileSync('copy.txt',content,'utf-8')
// fs.appendFileSync("copt.txt", '/n/nhey', "utf-8");
// fs.mkdirSync('games/xyz/a',{recursive:true})
// fs.rmdirSync('games/xyz/a')
// fs.rmdirSync('games/xyz')
fs.rmdirSync('games')
