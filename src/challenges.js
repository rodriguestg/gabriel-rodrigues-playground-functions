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
  if (Math.abs(distanciaDoCat1Mouse) < Math.abs(distanciaDoCat2Mouse)) {
    return 'cat1';
  } else if (Math.abs(distanciaDoCat2Mouse) < Math.abs(distanciaDoCat1Mouse)) {
    return 'cat2';
  } else if (Math.abs(distanciaDoCat2Mouse) === Math.abs(distanciaDoCat1Mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(70, 72, 69));

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let StringsFizzBuzz = []
  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    let divisivelPor3 = arrayFizzBuzz[i] % 3;
    let divisivelpor5 = arrayFizzBuzz[i] % 5;
    if (divisivelPor3 === 0 && divisivelpor5 === 0) {
      StringsFizzBuzz.push('fizzBuzz');
    } else if (divisivelpor5 === 0) {
      StringsFizzBuzz.push('buzz');
    } else if (divisivelPor3 === 0) {
      StringsFizzBuzz.push('fizz');
    } else if (divisivelPor3 !== 0 && divisivelpor5 !== 0) {
      StringsFizzBuzz.push('bug!');
    }
//    console.log(divisivelPor3);
//    console.log(divisivelpor5);
  }
  return StringsFizzBuzz;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(stringEncode) {
  // seu código aqui
  let encodeModificada = '';
  for (let i = 0; i < stringEncode.length; i += 1) {
    if (stringEncode[i] === 'a') {
      encodeModificada += '1';
    } else if (stringEncode[i] === 'e') {
      encodeModificada += '2';
    } else if (stringEncode[i] === 'i') {
      encodeModificada += '3';
    } else if (stringEncode[i] === 'o') {
      encodeModificada += '4';
    } else if (stringEncode[i] === 'u') {
      encodeModificada += '5';
    } else {
      encodeModificada += stringEncode[i];
    }
  }
  return encodeModificada;
}
// console.log(encode('hi there!'))

function decode(stringDecode) {
  // seu código aqui
  let decodeModificada = '';
  for (let i = 0; i < stringDecode.length; i += 1) {
    if (stringDecode[i] === '1') {
      decodeModificada += 'a';
    } else if (stringDecode[i] === '2') {
      decodeModificada += 'e';
    } else if (stringDecode[i] === '3') {
      decodeModificada += 'i';
    } else if (stringDecode[i] === '4') {
      decodeModificada += 'o';
    } else if (stringDecode[i] === '5') {
      decodeModificada += 'u';
    } else {
      decodeModificada += stringDecode[i];
    }
  }
  return decodeModificada;
}
// console.log(decode('h3 th2r2!'))

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  listaTechOrdenada = tech.sort();
  let listaTech = []
  if (tech[0] === undefined) {
    return 'Vazio!';
} else {
  for (let i = 0; i < tech.length; i += 1) {
      let objetoTech = {
        tech: listaTechOrdenada[i],
        name: name
      }
    listaTech.push(objetoTech);
  }
}
return listaTech;
}
// console.log(techList(["Python", "DOM", "JavaScript"], "Gabriel"))

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
