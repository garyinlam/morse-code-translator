const morseMap = new Map();

const populateMap = () => {
  morseMap.set('a','.-');
  morseMap.set('b','-..');
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

export const translateToMorse = (str) => {
  // convert to lower case - morse code is case insensitive
  str = str.toLowerCase();
  // string to return
  let retStr = "";


  return retStr;
}

export const translateFromMorse = () => {
  
}