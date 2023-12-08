
const { error } = require("console");
const fs = require("fs");
//fs.mkdirSync("Akash");

//fs.writeFileSync("Akash/bio.txt","My name is Akash Lande");

//fs.appendFileSync("Akash/bio.txt","Full Stack Developer");

//const data = fs.readFileSync('Akash/bio.txt', 'utf-8');
//console.log(data);

//fs.renameSync("Akash/bio.txt","Akash/Mybio.text");

//fs.writeFile("Akash/readme.txt","Google",(err)=>{
//console.log("File is Created");
//})


// fs.appendFile("Akash/readme.txt","Amazon, Facebook, Instagram",(error)=>{
// console.log("Data is added Successfully");
// })


fs.readFile("Akash/readme.txt","UTF-8",(error,data)=>{
    console.log(data);
})