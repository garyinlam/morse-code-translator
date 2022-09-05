"use strict";

var _translator = require("./translator.js");

var inputBox = document.getElementById("inputBox");
var toMorseButton = document.getElementById("toMorse");
var fromMorseButton = document.getElementById("fromMorse");
var output = document.querySelector(".output"); // To morse

var handleToMorse = function handleToMorse(e) {
  // prevent submit
  e.preventDefault();
  var str = inputBox.value; // remove line breaks

  str = str.split("\n").join(" "); // remove double spaces and leading/trailing white space

  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = (0, _translator.translateToMorse)(str);
}; //from morse


var handleFromMorse = function handleFromMorse(e) {
  // prevent submit
  e.preventDefault();
  var str = inputBox.value; // morse syntax handle - change to understood syntax

  str = str.replace(/_/g, '-');
  str = str.replace(/\|/g, '/');
  str = str.replace(/\*/g, "."); // ensure all / have space before and after

  str = str.split("/").join(" / "); // remove line breaks

  str = str.split("\n").join(" / "); // remove double spaces and leading/trailing white space

  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = (0, _translator.translateFromMorse)(str);
};

toMorseButton.addEventListener("click", handleToMorse);
fromMorseButton.addEventListener("click", handleFromMorse);