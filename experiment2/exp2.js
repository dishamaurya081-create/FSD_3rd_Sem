const fs = require('fs');

// CREATE
fs.writeFileSync('student.txt', 'Name: Disha\nAge: 18');

console.log("File created successfully.");

// READ
let data = fs.readFileSync('student.txt', 'utf8');

console.log("\nFile Content:");
console.log(data);

// UPDATE
fs.appendFileSync('student.txt', '\nCourse: CSE');

console.log("\nFile updated successfully.");

// READ AGAIN
data = fs.readFileSync('student.txt', 'utf8');

console.log("\nUpdated File Content:");
console.log(data);

// DELETE
fs.unlinkSync('student.txt');

console.log("\nFile deleted successfully.");