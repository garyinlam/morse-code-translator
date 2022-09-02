"use strict";

var _translator = require("./translator.js");

var inputBox = document.getElementById("inputBox");
var toMorseButton = document.getElementById("toMorse");
var output = document.querySelector(".output");

var handleToMorse = function handleToMorse(e) {
  e.preventDefault();
  output.innerHTML = (0, _translator.translateToMorse)(inputBox.value.split("\n").join(" "));
};

toMorseButton.addEventListener("click", handleToMorse);