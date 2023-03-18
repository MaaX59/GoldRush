//assets
let dirt;
let iron;
let oil;
let rock;
let gold;
let dug;

let digSound;
let refuel;
let rockClink;
let metalSound;
let winSound;

let playerLeft;
let playerDown;
let playerRight;
let playerNorm;


let gameRunning=false;
let showStart = true;
let resetButton;

let startScreen;
let gameOverScreen;
let winScreen;

let matrix;
let mapArr;

let ironCount= 0;
let goldCount = 0;
let fuel = 15;
let player = {
    x:300,
    y:0
}


let playerDirection;



function preload(){
    dirt = loadImage(`img/dirt.png`);
    gold = loadImage(`img/gold.png`);
    iron = loadImage(`img/iron.png`);
    oil = loadImage(`img/oil.png`);
    rock = loadImage(`img/rock.png`);
    dug = loadImage(`img/dug.png`);

    soundFormats('wav', `mp3`);
    digSound = loadSound(`img/digging.wav`);
    refuel = loadSound(`img/refuel2.mp3`);
    rockClink = loadSound(`img/rock-clink.wav`);
    metalSound = loadSound(`img/metal.wav`);
    winSound = loadSound(`img/win.mp3`)

    playerLeft = loadImage(`img/player-left.png`);
    playerDown = loadImage(`img/player-down.png`);
    playerRight = loadImage(`img/player-right.png`);
    playerNorm = loadImage(`img/player-norm.png`);

    startScreen = loadImage(`img/start-background-overlay - Copy.png`);
    gameOverScreen = loadImage(`img/newGameOver-background.png`);
    winScreen = loadImage(`img/winScreen.png`);
}

function setup(){
    createCanvas(650,1500);
    //generateMap(); 
   makeMap();
   

}


/*
function generateMap(){
     matrix = [
        
    //[{x:0,y:0},  {x:50,y:0},  {x:100,y:0},  {x:150,y:0},  {x:200,y:0},  {x:250,y:0},  {x:300,y:0},  {x:350,y:0},  {x:400,y:0},{x:450,y:0},  {x:500,y:0},  {x:550,y:0},  {x:600,y:0}, ],
    //[{ground: randomMaterial(),x:0,y:50}, {ground: randomMaterial(),x:50,y:50}, {ground: randomMaterial(),x:100,y:50}, {ground: randomMaterial(),x:150,y:50}, {ground: randomMaterial(),x:200,y:50}, {ground: randomMaterial(),x:250,y:50},  {ground: randomMaterial(),x:300,y:50},  {ground: randomMaterial(),x:350,y:50},  {ground: randomMaterial(),x:400,y:50},{ground: randomMaterial(),x:450,y:50},  {ground: randomMaterial(),x:500,y:50},  {ground: randomMaterial(),x:550,y:50},  {ground: randomMaterial(),x:600,y:50}],
   // [{ground: randomMaterial(),x:0,y:100},{ground: randomMaterial(),x:50,y:100},{ground: randomMaterial(),x:100,y:100},{ground: randomMaterial(),x:150,y:100},{ground: randomMaterial(),x:200,y:100}, {ground: randomMaterial(),x:250,y:100},  {ground: randomMaterial(),x:300,y:100},  {ground: randomMaterial(),x:350,y:100},  {ground: randomMaterial(),x:400,y:100},{ground: randomMaterial(),x:450,y:100},  {ground: randomMaterial(),x:500,y:100},  {ground: randomMaterial(),x:550,y:100},  {ground: randomMaterial(),x:600,y:100}],
    [{ground: randomMaterial(),x:0,y:150},{ground: randomMaterial(),x:50,y:150},{ground: randomMaterial(),x:100,y:150},{ground: randomMaterial(),x:150,y:150},{ground: randomMaterial(),x:200,y:150}, {ground: randomMaterial(),x:250,y:150},  {ground: randomMaterial(),x:300,y:150},  {ground: randomMaterial(),x:350,y:150},  {ground: randomMaterial(),x:400,y:150},{ground: randomMaterial(),x:450,y:150},  {ground: randomMaterial(),x:500,y:150},  {ground: randomMaterial(),x:550,y:150},  {ground: randomMaterial(),x:600,y:150}],
    [{ground: randomMaterial(),x:0,y:200},{ground: randomMaterial(),x:50,y:200},{ground: randomMaterial(),x:100,y:200},{ground: randomMaterial(),x:150,y:200},{ground: randomMaterial(),x:200,y:200}, {ground: randomMaterial(),x:250,y:200},  {ground: randomMaterial(),x:300,y:200},  {ground: randomMaterial(),x:350,y:200},  {ground: randomMaterial(),x:400,y:200},{ground: randomMaterial(),x:450,y:200},  {ground: randomMaterial(),x:500,y:200},  {ground: randomMaterial(),x:550,y:200},  {ground: randomMaterial(),x:600,y:200}],
    [{ground: randomMaterial(),x:0,y:250},{ground: randomMaterial(),x:50,y:250},{ground: randomMaterial(),x:100,y:250},{ground: randomMaterial(),x:150,y:250},{ground: randomMaterial(),x:200,y:250}, {ground: randomMaterial(),x:250,y:250},  {ground: randomMaterial(),x:300,y:250},  {ground: randomMaterial(),x:350,y:250},  {ground: randomMaterial(),x:400,y:250}, {ground: randomMaterial(),x:450,y:250},  {ground: randomMaterial(),x:500,y:250}, {ground: randomMaterial(),x:550,y:250},  {ground: randomMaterial(),x:600,y:250}],
    [{ground: randomMaterial(),x:0,y:300},{ground: randomMaterial(),x:50,y:300},{ground: randomMaterial(),x:100,y:300},{ground: randomMaterial(),x:150,y:300},{ground: randomMaterial(),x:200,y:300}, {ground: randomMaterial(),x:250,y:300},  {ground: randomMaterial(),x:300,y:300},  {ground: randomMaterial(),x:350,y:300},  {ground: randomMaterial(),x:400,y:300}, {ground: randomMaterial(),x:450,y:300},  {ground: randomMaterial(),x:500,y:300}, {ground: randomMaterial(),x:550,y:300},  {ground: randomMaterial(),x:600,y:300}],
    [{ground: randomMaterial(),x:0,y:350},{ground: randomMaterial(),x:50,y:350},{ground: randomMaterial(),x:100,y:350},{ground: randomMaterial(),x:150,y:350},{ground: randomMaterial(),x:200,y:350}, {ground: randomMaterial(),x:250,y:350},  {ground: randomMaterial(),x:300,y:350},  {ground: randomMaterial(),x:350,y:350},  {ground: randomMaterial(),x:400,y:350},{ground: randomMaterial(),x:450,y:350},  {ground: randomMaterial(),x:500,y:350},  {ground: randomMaterial(),x:550,y:350},  {ground: randomMaterial(),x:600,y:350}],
    [{ground: randomMaterial(),x:0,y:400},{ground: randomMaterial(),x:50,y:400},{ground: randomMaterial(),x:100,y:400},{ground: randomMaterial(),x:150,y:400},{ground: randomMaterial(),x:200,y:400}, {ground: randomMaterial(),x:250,y:400},  {ground: randomMaterial(),x:300,y:400},  {ground: randomMaterial(),x:350,y:400},  {ground: randomMaterial(),x:400,y:400},{ground: randomMaterial(),x:450,y:400},  {ground: randomMaterial(),x:500,y:400},  {ground: randomMaterial(),x:550,y:400},  {ground: randomMaterial(),x:600,y:400}],
    [{ground: randomMaterial(),x:0,y:450},{ground: randomMaterial(),x:50,y:450},{ground: randomMaterial(),x:100,y:450},{ground: randomMaterial(),x:150,y:450},{ground: randomMaterial(),x:200,y:450}, {ground: randomMaterial(),x:250,y:450},  {ground: randomMaterial(),x:300,y:450},  {ground: randomMaterial(),x:350,y:450},  {ground: randomMaterial(),x:400,y:450}, {ground: randomMaterial(),x:450,y:450},  {ground: randomMaterial(),x:500,y:450}, {ground: randomMaterial(),x:550,y:450},  {ground: randomMaterial(),x:600,y:450}],
    [{ground: randomMaterial(),x:0,y:500},{ground: randomMaterial(),x:50,y:500},{ground: randomMaterial(),x:100,y:500},{ground: randomMaterial(),x:150,y:500},{ground: randomMaterial(),x:200,y:500}, {ground: randomMaterial(),x:250,y:500},  {ground: randomMaterial(),x:300,y:500},  {ground: randomMaterial(),x:350,y:500},  {ground: randomMaterial(),x:400,y:500}, {ground: randomMaterial(),x:450,y:500},  {ground: randomMaterial(),x:500,y:500}, {ground: randomMaterial(),x:550,y:500},  {ground: randomMaterial(),x:600,y:500}],
    [{ground: randomMaterial(),x:0,y:550},{ground: randomMaterial(),x:50,y:550},{ground: randomMaterial(),x:100,y:550},{ground: randomMaterial(),x:150,y:550},{ground: randomMaterial(),x:200,y:550}, {ground: randomMaterial(),x:250,y:550},  {ground: randomMaterial(),x:300,y:550},  {ground: randomMaterial(),x:350,y:550},  {ground: randomMaterial(),x:400,y:550}, {ground: randomMaterial(),x:450,y:550},  {ground: randomMaterial(),x:500,y:550}, {ground: randomMaterial(),x:550,y:550},  {ground: randomMaterial(),x:600,y:550}],
    [{ground: randomMaterial(),x:0,y:600},{ground: randomMaterial(),x:50,y:600},{ground: randomMaterial(),x:100,y:600},{ground: randomMaterial(),x:150,y:600},{ground: randomMaterial(),x:200,y:600}, {ground: randomMaterial(),x:250,y:600},  {ground: randomMaterial(),x:300,y:600},  {ground: randomMaterial(),x:350,y:600},  {ground: randomMaterial(),x:400,y:600},  {ground: randomMaterial(),x:450,y:600},  {ground: randomMaterial(),x:500,y:600},{ground: randomMaterial(),x:550,y:600},  {ground: randomMaterial(),x:600,y:600}],    
    [{ground: randomMaterial(),x:0,y:650},{ground: randomMaterial(),x:50,y:650},{ground: randomMaterial(),x:100,y:650},{ground: randomMaterial(),x:150,y:650},{ground: randomMaterial(),x:200,y:650}, {ground: randomMaterial(),x:250,y:650},  {ground: randomMaterial(),x:300,y:650},  {ground: randomMaterial(),x:350,y:650},  {ground: randomMaterial(),x:400,y:650},  {ground: randomMaterial(),x:450,y:650},  {ground: randomMaterial(),x:500,y:650},{ground: randomMaterial(),x:550,y:650},  {ground: randomMaterial(),x:600,y:650}],
    [{ground: randomMaterial(),x:0,y:700},{ground: randomMaterial(),x:50,y:700},{ground: randomMaterial(),x:100,y:700},{ground: randomMaterial(),x:150,y:700},{ground: randomMaterial(),x:200,y:700}, {ground: randomMaterial(),x:250,y:700},  {ground: randomMaterial(),x:300,y:700},  {ground: randomMaterial(),x:350,y:700},  {ground: randomMaterial(),x:400,y:700},  {ground: randomMaterial(),x:450,y:700},  {ground: randomMaterial(),x:500,y:700},{ground: randomMaterial(),x:550,y:700},  {ground: randomMaterial(),x:600,y:700}],
    [{ground: randomMaterial(),x:0,y:750},{ground: randomMaterial(),x:50,y:750},{ground: randomMaterial(),x:100,y:750},{ground: randomMaterial(),x:150,y:750},{ground: randomMaterial(),x:200,y:750}, {ground: randomMaterial(),x:250,y:750},  {ground: randomMaterial(),x:300,y:750},  {ground: randomMaterial(),x:350,y:750},  {ground: randomMaterial(),x:400,y:750},  {ground: randomMaterial(),x:450,y:750},  {ground: randomMaterial(),x:500,y:750},{ground: randomMaterial(),x:550,y:750},  {ground: randomMaterial(),x:600,y:750}],
    [{ground: randomMaterial(),x:0,y:800},{ground: randomMaterial(),x:50,y:800},{ground: randomMaterial(),x:100,y:800},{ground: randomMaterial(),x:150,y:800},{ground: randomMaterial(),x:200,y:800}, {ground: randomMaterial(),x:250,y:800},  {ground: randomMaterial(),x:300,y:800},  {ground: randomMaterial(),x:350,y:800},  {ground: randomMaterial(),x:400,y:800},  {ground: randomMaterial(),x:450,y:800},  {ground: randomMaterial(),x:500,y:800},{ground: randomMaterial(),x:550,y:800},  {ground: randomMaterial(),x:600,y:800}],
    [{ground: randomMaterial(),x:0,y:850},{ground: randomMaterial(),x:50,y:850},{ground: randomMaterial(),x:100,y:850},{ground: randomMaterial(),x:150,y:850},{ground: randomMaterial(),x:200,y:850}, {ground: randomMaterial(),x:250,y:850},  {ground: randomMaterial(),x:300,y:850},  {ground: randomMaterial(),x:350,y:850},  {ground: randomMaterial(),x:400,y:850},  {ground: randomMaterial(),x:450,y:850},  {ground: randomMaterial(),x:500,y:850},{ground: randomMaterial(),x:550,y:850},  {ground: randomMaterial(),x:600,y:850}],
    [{ground: randomMaterial(),x:0,y:900},{ground: randomMaterial(),x:50,y:900},{ground: randomMaterial(),x:100,y:900},{ground: randomMaterial(),x:150,y:900},{ground: randomMaterial(),x:200,y:900}, {ground: randomMaterial(),x:250,y:900},  {ground: randomMaterial(),x:300,y:900},  {ground: randomMaterial(),x:350,y:900},  {ground: randomMaterial(),x:400,y:900},  {ground: randomMaterial(),x:450,y:900},  {ground: randomMaterial(),x:500,y:900},{ground: randomMaterial(),x:550,y:900},  {ground: randomMaterial(),x:600,y:900}],
    [{ground: randomMaterial(),x:0,y:950},{ground: randomMaterial(),x:50,y:950},{ground: randomMaterial(),x:100,y:950},{ground: randomMaterial(),x:150,y:950},{ground: randomMaterial(),x:200,y:950}, {ground: randomMaterial(),x:250,y:950},  {ground: randomMaterial(),x:300,y:950},  {ground: randomMaterial(),x:350,y:950},  {ground: randomMaterial(),x:400,y:950},  {ground: randomMaterial(),x:450,y:950},  {ground: randomMaterial(),x:500,y:950},{ground: randomMaterial(),x:550,y:950},  {ground: randomMaterial(),x:600,y:950}],
    [{ground: randomMaterial(),x:0,y:1000},{ground: randomMaterial(),x:50,y:1000},{ground: randomMaterial(),x:100,y:1000},{ground: randomMaterial(),x:150,y:1000},{ground: randomMaterial(),x:200,y:1000}, {ground: randomMaterial(),x:250,y:1000},  {ground: randomMaterial(),x:300,y:1000},  {ground: randomMaterial(),x:350,y:1000},  {ground: randomMaterial(),x:400,y:1000},  {ground: randomMaterial(),x:450,y:1000},  {ground: randomMaterial(),x:500,y:1000},{ground: randomMaterial(),x:550,y:1000},  {ground: randomMaterial(),x:600,y:1000}],
    [{ground: rock,x:0,y:1050},{ground: rock,x:50,y:1050},{ground: rock,x:100,y:1050},{ground: rock,x:150,y:1050},{ground: rock,x:200,y:1050}, {ground: rock,x:250,y:1050},  {ground: rock,x:300,y:1050},  {ground: rock,x:350,y:1050},  {ground: rock,x:400,y:1050},  {ground: rock,x:450,y:1050},  {ground: rock,x:500,y:1050},{ground: rock,x:550,y:1050},  {ground: rock,x:600,y:1050}],
    [{ground: gold,x:0,y:1100},{ground: gold,x:50,y:1100},{ground: gold,x:100,y:1100},{ground: gold,x:150,y:1100},{ground: gold,x:200,y:1100}, {ground: gold,x:250,y:1100},  {ground: gold,x:300,y:1100},  {ground: gold,x:350,y:1100},  {ground: gold,x:400,y:1100},  {ground: gold,x:450,y:1100},  {ground: gold,x:500,y:1100},{ground: gold,x:550,y:1100},  {ground: gold,x:600,y:1100}]

]
}
*/
function makeMap() {
    // random map, but I want first 3-4 layers to be empty and bottom two to be rock and gold.
    //to make the first layers empty, change the 0 in the second forloop to be j= 3, then it starts at the third layer
    const row = 13;
    const col = 25;
    mapArr = [];
  
    for (let i = 1; i < col; i++) {
       if(!i==0){
            mapArr.push([]) 
        }
      mapArr.push([]);
      
      if (i<col-2){
      for (let j = 0; j < row; j++) { 
        let tempObj = {ground: randomMaterial(),x:j*50 ,y:i*50};
        mapArr[i].push(tempObj); }
   
     }else if (i == col-2){
        for (let g = 0; g < row; g++) { 
            let tempObj = {ground: rock,x:g*50 ,y:i*50};
            mapArr[i].push(tempObj);}
     }else{ 
        for (let k = 0; k < row; k++) { 
            let tempObj = {ground: gold,x:k*50 ,y:i*50};
            mapArr[i].push(tempObj);
            
        }
        }
    }
  
    return mapArr;
  }
// makeMap/ mapArr to be changed for  generateMap/ matrix at line 56, , 166, 180, 219,220  

 
function draw(){ 
    background(220);

   if (showStart){
    image(startScreen,0,0,0,1000);
   }
     else if(gameRunning && goldCount==0 ){
    textSize(32);
    text(`Fuel: ${fuel}`,500,35);
    if(ironCount<5){
        text(`Iron Collected: ${ironCount}`,50,35);
    }else {
        text(`Ironhack activated!`,50,35);
    }
    fill(51);
    
 for(let i=0;i<mapArr.length;i++){
        let tempArr = mapArr[i];
        for (let j=0; j<tempArr.length;j++){
             image(tempArr[j].ground,tempArr[j].x,tempArr[j].y);
        }
    }

 image (playerNorm,player.x,player.y);

   if (fuel < 0 && !goldCount>=1){
        resetButton = false;
        gameRunning = false;
    }
    //out of fuel
    }else if(showStart==false &&gameRunning== false && goldCount==0){
    image(gameOverScreen,0,0,0,1000);
    const button = document.querySelector('#restart');
     button.style.cssText= `visibility: visible`;
    }
    // win screen
    else if(goldCount>=1){
        resetButton= false;
        gameRunning= false;
        image(winScreen,0,0,0,1000);
        
        const button = document.querySelector('#restart');
        button.style.cssText= `visibility: visible`;
    }
}
function startGame (){
    resetButton=true;
    gameRunning=true;
    showStart = false;
    
    document.querySelector('#start').style.cssText = `visibility: hidden`;
   //generateMap();
    makeMap();

}
function resetGame(){
    resetButton=true;
    gameRunning=true;
    player.x = 300;
    player.y = 0;
    fuel = 15;
    goldCount = 0;
    ironCount =0;
    
    document.querySelector('#restart').style.cssText = `visibility: hidden`;
    //generateMap();
    makeMap();

}

function randomMaterial(){
    let rand= randomNum(100);
    if (rand>=9){
        return dirt;
    }else if(rand<=4){
        return iron;
    }else{
        return oil;
    }
}

function randomNum(max){
 return Math.floor(Math.random()* max);
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        player.x===0 ? null :player.x-= 50;
        fuel= fuel - 1;
       // digSound.play();
    }else if ( keyCode === RIGHT_ARROW){
        player.x===600 ? null : player.x+= 50;
        fuel= fuel - 1;
      //  digSound.play();
    }  else if (keyCode === DOWN_ARROW){
        fuel= fuel - 1;
     player.y+= 50;
    // 
    }else if (keyCode === UP_ARROW){
        player.y===0 ? null :player.y-= 50;
        fuel= fuel - 1;
    
    }
    

    for(let i=0;i<mapArr.length;i++){
        let tempArr = mapArr[i];
        for (let j=0; j<tempArr.length;j++){
           if ( player.x===tempArr[j].x &&
                player.y===tempArr[j].y &&
                tempArr[j].ground=== oil){
                    //if you take oil replace with dirt
                    refuel.play();
                    tempArr[j].ground = dug;
                                        fuel = 15; 
        }else if(player.x===tempArr[j].x &&
                 player.y===tempArr[j].y &&
                 tempArr[j].ground=== rock) {
                    if(ironCount < 5){
                        player.y-= 50;
                        rockClink.play()
                
                    }else{
                    tempArr[j].ground = dug;
                    digSound.play();
                                    }  
            }else if(player.x===tempArr[j].x &&
                player.y===tempArr[j].y &&
                tempArr[j].ground=== iron) {
                ironCount = ironCount + 1;
                tempArr[j].ground = dug;
                metalSound.play();
                
           }else if(player.x===tempArr[j].x &&
                    player.y===tempArr[j].y &&
                    tempArr[j].ground=== gold){
                        winSound.play();
                    goldCount= goldCount + 1;
            }
            else if (player.x===tempArr[j].x &&
                player.y===tempArr[j].y &&
                tempArr[j].ground=== dirt){
                    tempArr[j].ground = dug;
                    digSound.play();
                    
                }
        }
    }
     console.log(player,fuel, goldCount); 
    
 
  }

  // reset don´t reload new  map

