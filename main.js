import { translateToMorse } from "./translator.js";

const inputBox = document.getElementById("inputBox");
const toMorseButton = document.getElementById("toMorse");
const output = document.querySelector(".output");

const handleToMorse = (e) => {
  e.preventDefault();
  output.innerHTML = translateToMorse(inputBox.value.split("\n").join(" "));
}

toMorseButton.addEventListener("click", handleToMorse)