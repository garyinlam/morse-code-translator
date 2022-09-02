"use strict";

var _translator = require("./translator.js");

var inputBox = document.getElementById("inputBox");
var toMorseButton = document.getElementById("toMorse");
var fromMorseButton = document.getElementById("fromMorse");
var output = document.querySelector(".output");

var handleToMorse = function handleToMorse(e) {
  e.preventDefault();
  var str = inputBox.value;
  str = str.split("\n").join(" ");
  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = (0, _translator.translateToMorse)(str);
};

var handleFromMorse = function handleFromMorse(e) {
  e.preventDefault();
  var str = inputBox.value;
  str = str.split("\n").join("/");
  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = (0, _translator.translateFromMorse)(str);
};

toMorseButton.addEventListener("click", handleToMorse);
fromMorseButton.addEventListener("click", handleFromMorse);