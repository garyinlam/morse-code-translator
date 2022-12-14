"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateFromMorse = exports.translateToMorse = void 0;
// use map for [key,value] pairs to store morse code and corresponding characters
var morseMap = new Map();

var populateMap = function populateMap() {
  morseMap.set('a', '.-');
  morseMap.set('b', '-...');
  morseMap.set('c', '-.-.');
  morseMap.set('d', '-..');
  morseMap.set('e', '.');
  morseMap.set('f', '..-.');
  morseMap.set('g', '--.');
  morseMap.set('h', '....');
  morseMap.set('i', '..');
  morseMap.set('j', '.---');
  morseMap.set('k', '-.-');
  morseMap.set('l', '.-..');
  morseMap.set('m', '--');
  morseMap.set('n', '-.');
  morseMap.set('o', '---');
  morseMap.set('p', '.--.');
  morseMap.set('q', '--.-');
  morseMap.set('r', '.-.');
  morseMap.set('s', '...');
  morseMap.set('t', '-');
  morseMap.set('u', '..-');
  morseMap.set('v', '...-');
  morseMap.set('w', '.--');
  morseMap.set('x', '-..-');
  morseMap.set('y', '-.--');
  morseMap.set('z', '--..');
  morseMap.set('1', '.----');
  morseMap.set('2', '..---');
  morseMap.set('3', '...--');
  morseMap.set('4', '....-');
  morseMap.set('5', '.....');
  morseMap.set('6', '-....');
  morseMap.set('7', '--...');
  morseMap.set('8', '---..');
  morseMap.set('9', '----.');
  morseMap.set('0', '-----');
  morseMap.set('.', '.-.-.-');
  morseMap.set(',', '--..--');
  morseMap.set('?', '..--..');
  morseMap.set('-', '-....-');
  morseMap.set('!', '-.-.--');
  morseMap.set('/', '-..-.');
  morseMap.set('"', '.-..-.');
  morseMap.set('&', '.-...');
  morseMap.set('(', '-.--.');
  morseMap.set(')', '-.--.-');
  morseMap.set('=', '-...-');
  morseMap.set('+', '.-.-.');
  morseMap.set(':', '---...');
  morseMap.set("'", '.----.');
  morseMap.set('@', '.--.-.');
};

populateMap(); // get indices of an array that are an empty string

var getEmptyIndex = function getEmptyIndex(arr) {
  var indices = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "") {
      indices.push(i);
    }
  }

  return indices;
};

var translateToMorse = function translateToMorse(str) {
  // convert to lower case - morse code is case insensitive
  str = str.toLowerCase(); // store morse in array

  var morseArr = []; // loop through string

  for (var i = 0; i < str.length; i++) {
    var currChar = str[i]; // morse letter is recognised

    if (morseMap.has(currChar)) {
      morseArr.push(morseMap.get(currChar)); // space handle
    } else if (currChar === " ") {
      morseArr.push("/"); // not translatable
    } else {
      morseArr.push("");
    }
  } // check for untranslated characters


  if (morseArr.includes("")) {
    var empty = getEmptyIndex(morseArr);
    var retStr = "Cannot translate ";
    empty.forEach(function (item) {
      retStr += "".concat(str[item], ", ");
    });
    return retStr.slice(0, -2) + " to morse";
  } else {
    return morseArr.join(" ");
  }
}; // single character from morse code


exports.translateToMorse = translateToMorse;

var singleMorse = function singleMorse(morseStr) {
  var retVal = ""; // search through the map

  morseMap.forEach(function (value, key) {
    if (value == morseStr) {
      retVal = key;
    }
  });
  return retVal.toUpperCase();
};

var translateFromMorse = function translateFromMorse(str) {
  // split string into individual morse sections
  var morseArr = str.split(" ");
  var charArr = morseArr.map(function (single) {
    // if / then return space
    if (single == "/") {
      return " ";
    } else {
      // otherwise find character for morse letter
      return singleMorse(single);
    }
  }); // if any morse letter that could not be found

  if (charArr.includes("")) {
    var empty = getEmptyIndex(charArr);
    var retStr = "Cannot translate ";
    empty.forEach(function (item) {
      retStr += "".concat(morseArr[item], ", ");
    });
    return retStr.slice(0, -2);
  } else {
    // all morse letters have a corresponding character
    return charArr.join("");
  }
};

exports.translateFromMorse = translateFromMorse;