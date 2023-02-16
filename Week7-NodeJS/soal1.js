const fs = require('fs')

const calc = require('./calc.js')

console.log("P = 5, L= 10");

console.log("Luas Persegi Panjang     : ", calc.mult(5,10));
console.log("Keliling Persegi Panjang : ", calc.multi(5,10));
console.log("Luas Persegi             : ", calc.add(5));
console.log("Keliling Persegi         : ", calc.adds(5));