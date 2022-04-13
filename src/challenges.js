// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}
// console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayDeStrings = string.split(' ');
  return arrayDeStrings;
}

// console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(frases) {
  // seu código aqui
  return frases[frases.length - 1] + ', ' + frases[0];
}
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let calculoVitoria = wins * 3;
  let calculoEmpate = ties * 1;
  return calculoVitoria + calculoEmpate;
}
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let numeroMaior = Math.max(...numeros);
  let numeroMaiorVezes = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === numeroMaior) {
      numeroMaiorVezes += 1;
    }
  }
  return numeroMaiorVezes;
}
// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaDoCat1Mouse = cat1 - mouse;
  let distanciaDoCat2Mouse = cat2 - mouse;
  if (Math.abs(distanciaDoCat1Mouse) < Math.abs(distanciaDoCat2Mouse)){
    return "cat1";
  } else if (Math.abs(distanciaDoCat2Mouse) < Math.abs(distanciaDoCat1Mouse)){
    return "cat2";
  } else if (Math.abs(distanciaDoCat2Mouse) === Math.abs(distanciaDoCat1Mouse)) {
    return "os gatos trombam e o rato foge";
  }
}

console.log(catAndMouse(1, 0, 2));


// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
