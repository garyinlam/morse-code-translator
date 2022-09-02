import { translateToMorse, translateFromMorse } from "./translator.js";

const inputBox = document.getElementById("inputBox");
const toMorseButton = document.getElementById("toMorse");
const fromMorseButton = document.getElementById("fromMorse");
const output = document.querySelector(".output");

const handleToMorse = (e) => {
  e.preventDefault();
  let str = inputBox.value;
  str = str.split("\n").join(" ");
  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = translateToMorse(str);
}

const handleFromMorse = (e) => {
  e.preventDefault();
  let str = inputBox.value;
  str = str.split("/").join(" / ");
  str = str.split("\n").join(" / ");
  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = translateFromMorse(str);
}

toMorseButton.addEventListener("click", handleToMorse); 
fromMorseButton.addEventListener("click", handleFromMorse);