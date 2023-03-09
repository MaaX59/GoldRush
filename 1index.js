

//assets
let dirt;
let iron;
let oil;

let rock;
let gold;

let playerLeft;
let playerDown;
let playerRight;

let player = {
    
    x:50,
    y:10
}


function preload(){
    dirt = loadImage(`img/dirt.png`);
    gold = loadImage(`img/gold.png`);
    iron = loadImage(`img/iron.png`);
    oil = loadImage(`img/oil.png`);
    rock = loadImage(`img/rock.png`);
    playerLeft = loadImage(`img/player-left.png`);
    playerDown = loadImage(`img/player-down.png`);
    playerRight = loadImage(`img/player-right.png`);
}

function setup(){

    createCanvas(750,3000);
    
    
    

}

function draw(){
    background(220);
    image (playerDown,player.x,player.y);

}

const matrix = [
    [{type:randomMaterial(),x:0,y:0},  {type:randomMaterial(),x:50,y:0},  {type:randomMaterial(),x:100,y:0},  {type:randomMaterial(),x:150,y:0},  {type:randomMaterial(),x:200,y:0}],
    [{type:randomMaterial(),x:0,y:50}, {type:randomMaterial(),x:50,y:50}, {type:randomMaterial(),x:100,y:50}, {type:randomMaterial(),x:150,y:50}, {type:randomMaterial(),x:200,y:50}],
    [{type:randomMaterial(),x:0,y:100},{type:randomMaterial(),x:50,y:100},{type:randomMaterial(),x:100,y:100},{type:randomMaterial(),x:150,y:100},{type:randomMaterial(),x:200,y:100}],
    [{type:randomMaterial(),x:0,y:150},{type:randomMaterial(),x:50,y:150},{type:randomMaterial(),x:100,y:150},{type:randomMaterial(),x:150,y:150},{type:randomMaterial(),x:200,y:150}],
    [{type:randomMaterial(),x:0,y:200},{type:randomMaterial(),x:50,y:200},{type:randomMaterial(),x:100,y:200},{type:randomMaterial(),x:150,y:200},{type:randomMaterial(),x:200,y:200}],
    [{type:randomMaterial(),x:0,y:250},{type:randomMaterial(),x:50,y:250},{type:randomMaterial(),x:100,y:250},{type:randomMaterial(),x:150,y:250},{type:randomMaterial(),x:200,y:250}],
    [{type:randomMaterial(),x:0,y:300},{type:randomMaterial(),x:50,y:300},{type:randomMaterial(),x:100,y:300},{type:randomMaterial(),x:150,y:300},{type:randomMaterial(),x:200,y:300}],
    [{type:randomMaterial(),x:0,y:350},{type:randomMaterial(),x:50,y:350},{type:randomMaterial(),x:100,y:350},{type:randomMaterial(),x:150,y:350},{type:randomMaterial(),x:200,y:350}],
    [{type:randomMaterial(),x:0,y:400},{type:randomMaterial(),x:50,y:400},{type:randomMaterial(),x:100,y:400},{type:randomMaterial(),x:150,y:400},{type:randomMaterial(),x:200,y:400}],
    [{type:randomMaterial(),x:0,y:400},{type:randomMaterial(),x:50,y:400},{type:randomMaterial(),x:100,y:400},{type:randomMaterial(),x:150,y:400},{type:randomMaterial(),x:200,y:400}],
    [{type:randomMaterial(),x:0,y:400},{type:randomMaterial(),x:50,y:400},{type:randomMaterial(),x:100,y:400},{type:randomMaterial(),x:150,y:400},{type:randomMaterial(),x:200,y:400}],
    [{type:randomMaterial(),x:0,y:400},{type:randomMaterial(),x:50,y:400},{type:randomMaterial(),x:100,y:400},{type:randomMaterial(),x:150,y:400},{type:randomMaterial(),x:200,y:400}],
    [{type:randomMaterial(),x:0,y:400},{type:randomMaterial(),x:50,y:400},{type:randomMaterial(),x:100,y:400},{type:randomMaterial(),x:150,y:400},{type:randomMaterial(),x:200,y:400}]
    
]
console.log(matrix);






function keyPressed(){
    if(keyCode === LEFT_ARROW){
  player.x-= 50;
    }else if ( keyCode === RIGHT_ARROW){
  player.x+= 50;
    } else if (keyCode === UP_ARROW){
      player.y-= 50;
    } else if (keyCode === DOWN_ARROW){
      player.y+= 50;
    }
  }


//choose random
function randomMaterial(){
    let rand= randomNum(100);
    if (rand>=10){
        return `dirt`;
    }else if(rand<=5){
        return `iron`;
    }else{
        return `oil`;
    }
}

function randomNum(max){
 return Math.floor(Math.random()* max);

}


