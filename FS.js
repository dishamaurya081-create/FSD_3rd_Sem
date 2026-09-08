const fs= require('fs');

//create
fs.writeFileSync('data.txt', 'Hello World!');

//read
console.log(fs.readFileSync('data.txt', 'utf8'));

//update
fs.appendFileSync('data.txt', ' How are you?');

//read updated data
console.log(fs.readFileSync('data.txt', 'utf8'));

//delete
fs.unlinkSync('data.txt');

console.log("File deleted successfully!");