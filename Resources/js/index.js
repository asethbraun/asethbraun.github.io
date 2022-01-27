let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

const darkPatina = "#283E37";
const lightPatina = "#E0EbE7";

ctx.strokeStyle = lightPatina;
ctx.lineWidth = 0.25;

ctx.fillStyle = "#000";//darkPatina;

ctx.fill();
console.log("Made it");