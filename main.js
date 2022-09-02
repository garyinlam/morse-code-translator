import { translateToMorse } from "./translator.js";

const inputBox = document.getElementById("inputBox");
const toMorseButton = document.getElementById("toMorse");
const output = document.querySelector(".output");

const handleToMorse = (e) => {
  e.preventDefault();
  let str = inputBox.value;
  str = str.split("\n").join(" ");
  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = translateToMorse(str);
}

toMorseButton.addEventListener("click", handleToMorse)