"use strict";

var _translator = require("./translator.js");

var inputBox = document.getElementById("inputBox");
var toMorseButton = document.getElementById("toMorse");
var output = document.querySelector(".output");

var handleToMorse = function handleToMorse(e) {
  e.preventDefault();
  var str = inputBox.value;
  str = str.split("\n").join(" ");
  str = str.replace(/\s+/g, ' ');
  output.innerHTML = (0, _translator.translateToMorse)(str);
};

toMorseButton.addEventListener("click", handleToMorse);