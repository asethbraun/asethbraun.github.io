let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let active = false;

const darkPatina = "#283E37";
const lightPatina = "#E0EbE7";

const imgSrc = "./Resources/img/possum.png";

let x = 20;
let y = 20;
let up = false;
let down = false;
let left = false;
let right = false;

let possumPic = new Image();
possumPic.src = imgSrc;
possumPic.height = 50.1/1.2 //* 0.01 * canvas.width;
possumPic.width = 54.6/1.2 //* 0.01 * canvas.width;

canvas.width = window.innerWidth * 0.85;
canvas.height = window.innerHeight * 0.50;

window.addEventListener("resize", resizeCanvas)

ctx.strokeStyle = lightPatina;
ctx.lineWidth = 0.25;

ctx.fillStyle = "#000";//darkPatina;

ctx.fill();
possumPic.onload = function(){
    ctx.drawImage(possumPic, x, y, possumPic.width, possumPic.height);
}

function resizeCanvas(){
    //possumPic.height = 50.1 * 0.01 * canvas.width;
    //possumPic.width = 54.6 * 0.01 * canvas.width;
    canvas.width = window.innerWidth * 0.85;
    canvas.height = window.innerHeight * 0.50;
    x = Math.min(x, canvas.width-possumPic.width);
    y = Math.min(y, canvas.height-possumPic.height);
    x = Math.max(x, 0);
    y = Math.max(y, 0);
    ctx.drawImage(possumPic, x, y, possumPic.width, possumPic.height);
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
        if(x>0){
        x--;
        }
    }
    if(right){
        if(x<canvas.width-possumPic.width){
            x++;
        }
    }
    if(up){
        if(y>0){
            y--;
        }
   }
    if(down){
        if(y<canvas.height-possumPic.height){
            y++;
        }
    }
}

function gameLoop(){
    if(active){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(possumPic, x, y, possumPic.width, possumPic.height);
        move();
        window.requestAnimationFrame(gameLoop);
    }
}
    
