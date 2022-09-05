import { translateToMorse, translateFromMorse } from "./translator.js";

const inputBox = document.getElementById("inputBox");
const toMorseButton = document.getElementById("toMorse");
const fromMorseButton = document.getElementById("fromMorse");
const output = document.querySelector(".output");

// To morse
const handleToMorse = (e) => {
  // prevent submit
  e.preventDefault();
  let str = inputBox.value;
  // remove line breaks
  str = str.split("\n").join(" ");
  // remove double spaces and leading/trailing white space
  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = translateToMorse(str);
}

//from morse
const handleFromMorse = (e) => {
  // prevent submit
  e.preventDefault();
  let str = inputBox.value;
  // morse syntax handle - change to understood syntax
  str = str.replace(/_/g, '-');
  str = str.replace(/\|/g, '/');
  str = str.replace(/\*/g,".");
  // ensure all / have space before and after
  str = str.split("/").join(" / ");
  // remove line breaks
  str = str.split("\n").join(" / ");
  // remove double spaces and leading/trailing white space
  str = str.replace(/\s+/g, ' ').trim();
  output.innerHTML = translateFromMorse(str);
}

toMorseButton.addEventListener("click", handleToMorse); 
fromMorseButton.addEventListener("click", handleFromMorse);