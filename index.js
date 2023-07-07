const generateName = require("sillyname");
const superheroes = require('superheroes');
//import sillyname from "sillyname";
var sillyname = generateName();

console.log(`My name is  :  ${sillyname}`);

const names = superheroes.random;

console.log(names);