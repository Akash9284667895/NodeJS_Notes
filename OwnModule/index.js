const {add,mul,sub} = require("./operation");
const chalk = require("chalk");

const validator = require("validator");

console.log(add(5,5));

console.log(sub(10,5));
console.log(mul(1022,50));

// const res = validator.isEmail("akashlande97@gmai.com");
// console.log(res ? chalk>green.inverse(res):chalk.foregroundColorNames.inverse(res));


