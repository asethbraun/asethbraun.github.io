let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let active = false;

const darkPatina = "#283E37";
const lightPatina = "#E0EbE7";

const imgSrc = "./Resources/img/possum.png";

let possumPic = new Image();
possumPic.src = imgSrc;

canvas.width = window.innerWidth * 0.90;
canvas.height = window.innerHeight * 0.50;

window.addEventListener("resize", resizeCanvas)

function resizeCanvas(){
    canvas.width = window.innerWidth * .90;
    canvas.height = window.innerHeight * 0.50;
}

ctx.strokeStyle = lightPatina;
ctx.lineWidth = 0.25;

ctx.fillStyle = "#000";//darkPatina;

ctx.fill();
possumPic.onload = function(){
    //ctx.drawImage(possumPic, 20, 20, 54.6, 50.1);
}

canvas.onfocus = function(){
    active = true;
    window.requestAnimationFrame(gameLoop);

    document.addEventListener('keydown', handleKeyDown);
    
    document.addEventListener('keyup', handleKeyUp);
}
canvas.onblur = () => {
    active = false; 
    document.removeEventListener('keydown', handleKeyDown);
    
    document.removeEventListener('keyup', handleKeyUp);
};

let x = 20;
let y = 20;
let up = false;
let down = false;
let left = false;
let right = false;

function handleKeyDown(Event){
    Event.preventDefault();
        const keyName = Event.key;
        switch (keyName) {
            case "ArrowRight":
                right = true;
                break
            case "ArrowUp":
                up = true;
                break
            case "ArrowDown":
                down = true;
                break
            case "ArrowLeft":
                left = true;
                break
    
        }
}

function handleKeyUp(Event){
    const keyName = Event.key;
        switch (keyName) {
            case "ArrowRight":
                right = false;
                break
            case "ArrowUp":
                up = false;
                break
            case "ArrowDown":
                down = false;
                break
            case "ArrowLeft":
                left = false;
                break
    
        }
}

function move(){
    if(left){
        x--;
    }
    if(right){
        x++;
    }
    if(up){
        y--;
    }
    if(down){
        y++;
    }
}

function gameLoop(){
    if(active){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(possumPic, x, y, 54.6/1.5, 50.1/1.5);
        move();
        window.requestAnimationFrame(gameLoop);
    }
}
    
