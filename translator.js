// use map for [key,value] pairs to store morse code and corresponding characters
const morseMap = new Map();

const populateMap = () => {
  morseMap.set('a','.-');
  morseMap.set('b','-...');
  morseMap.set('c','-.-.');
  morseMap.set('d','-..');
  morseMap.set('e','.');
  morseMap.set('f','..-.');
  morseMap.set('g','--.');
  morseMap.set('h','....');
  morseMap.set('i','..');
  morseMap.set('j','.---');
  morseMap.set('k','-.-');
  morseMap.set('l','.-..');
  morseMap.set('m','--');
  morseMap.set('n','-.');
  morseMap.set('o','---');
  morseMap.set('p','.--.');
  morseMap.set('q','--.-');
  morseMap.set('r','.-.');
  morseMap.set('s','...');
  morseMap.set('t','-');
  morseMap.set('u','..-');
  morseMap.set('v','...-');
  morseMap.set('w','.--');
  morseMap.set('x','-..-');
  morseMap.set('y','-.--');
  morseMap.set('z','--..');

  morseMap.set('1','.----');
  morseMap.set('2','..---');
  morseMap.set('3','...--');
  morseMap.set('4','....-');
  morseMap.set('5','.....');
  morseMap.set('6','-....');
  morseMap.set('7','--...');
  morseMap.set('8','---..');
  morseMap.set('9','----.');
  morseMap.set('0','-----');

  morseMap.set('.','.-.-.-');
  morseMap.set(',','--..--');
  morseMap.set('?','..--..');
  morseMap.set('-','-....-');
  morseMap.set('!','-.-.--');
  morseMap.set('/','-..-.');
  morseMap.set('"','.-..-.');
  morseMap.set('&','.-...');
  morseMap.set('(','-.--.');
  morseMap.set(')','-.--.-');
  morseMap.set('=','-...-');
  morseMap.set('+','.-.-.');
  morseMap.set(':','---...');
  morseMap.set("'",'.----.');
  morseMap.set('@','.--.-.');
}

populateMap();

export const translateToMorse = (str) => {
  // convert to lower case - morse code is case insensitive
  str = str.toLowerCase();
  // store morse in array
  const morseArr = [];
  // loop through string
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];
    // morse letter is recognised
    if (morseMap.has(currChar)) {
      morseArr.push(morseMap.get(currChar));
    // space handle
    } else if (currChar === " ") {
      morseArr.push("/");
    // not translatable
    } else {
      morseArr.length = 0;
      morseArr.push(`Cannot translate ${currChar} to morse`);
      i = str.length;
    }
  }

  return morseArr.join(" ");
}

// single character from morse code
const singleMorse = (morseStr) => {
  let retVal = "";
  // search through the map
  morseMap.forEach((value,key) => {
    if(value == morseStr) {
      retVal = key;
    }
  })
  return retVal.toUpperCase();
}

export const translateFromMorse = (str) => {
  const morseArr = str.split(" ");
  const charArr = morseArr.map((single) => {
    if(single == "/") {
      return " ";
    } else {
      return singleMorse(single);
    }
  });
  if (charArr.includes("")) {
    return `Cannot translate ${morseArr[charArr.indexOf("")]}`
  } else {
    return charArr.join("");
  }
}