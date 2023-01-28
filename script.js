//Buatlah 100 nilai random (1 sampai 50) pada 1 array
let random = [...Array(100)].map((e) => ~~Math.floor(Math.random() * 50 + 1));
console.log(random);

//ganjil genap
let genap = [];
let ganjil = [];
for (var i = 0; i < random.length; i++) {
  if ((i + 1) % 2 == 0) {
    genap.push(random[i]);
  } else {
    ganjil.push(random[i]);
  }
}
console.log(genap);
console.log(ganjil);

//Gunakan 2 array yang telah dibuat untuk mendapatkan Min, Max, Total, Rata rata
//MinMax Genap
let GenapMin = genap[0];
let GenapMax = genap[0];
for (let i = 1; i < genap.length; i++) {
  if (genap[i] > GenapMax) GenapMax = genap[i];
  if (genap[i] < GenapMin) GenapMin = genap[i];
}
console.log("Minimal Genap = " + GenapMin);
console.log("Maximal Genap =" + GenapMax);

//MinMax Ganjil
let GanjilMin = ganjil[0];
let GanjilMax = ganjil[0];
for (let i = 1; i < ganjil.length; i++) {
  if (ganjil[i] > GanjilMax) GanjilMax = ganjil[i];
  if (ganjil[i] < GanjilMin) GanjilMin = ganjil[i];
}
console.log("Minimal Ganjil = " + GanjilMin);
console.log("Maximal Ganjil =" + GanjilMax);

//rata-rata
//genap
function rataGenap(genap) {
  const total = genap.reduce((acc, c) => acc + c, 0);
  return total / genap.length;
}
const rataGen = rataGenap(genap);
console.log(rataGen);

//ganjil
function rataGanjil(ganjil) {
  const total = ganjil.reduce((acc, c) => acc + c, 0);
  return total / ganjil.length;
}
const rataGan = rataGanjil(ganjil);
console.log(rataGan);

//Total
//ganjil
function sumArray(ganjil) {
  let sum = 0;
  for (let i = 0; i < ganjil.length; i += 1) {
    sum += ganjil[i];
  }
  return sum;
}
const sumganjil = sumArray(ganjil);
console.log(sumganjil);

//genap
function sumArray(genap) {
  let sum = 0;
  for (let i = 0; i < genap.length; i += 1) {
    sum += genap[i];
  }
  return sum;
}
const sumgenap = sumArray(genap);
console.log(sumgenap);

//perbandingan

function funCompareTotal(genap, ganjil) {
  if (genap > ganjil) {
    return "Total lebih besar Genap";
  } else if (genap < ganjil) {
    return "Total lebih besar Ganjil";
  } else {
    return "Total ganjil dan genap setara";
  }
}
const CompareTotal = funCompareTotal(genap, ganjil);
console.log(CompareTotal);
