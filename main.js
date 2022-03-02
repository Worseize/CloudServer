let width = 100;
let height = 100;
let Others = [];
let thisPlayer;

class Player{
  constructor(posX, posY, power) {
    this.posX = posX;
    this.posY = posY;
    this.power = power;
  }
  
}
class Other{
  constructor(posX, posY, power) {
    this.posX = posX;
    this.posY = posY;
    this.power = power;
  }
  
}
function setup() {
  createCanvas(width, height);
  thisPlayer = new Player(width/2, height/2, width/20);
  const oth1 = new Other(width/4, height/4, width/20);
  const oth2 = new Other(width/8, height/8, width/20);
  Others.push(oth1);
  Others.push(oth2);
}

function draw() {
  background(255);
  fill(0, 200, 0);
  noStroke;
  for(let i = 0; i < Others.length; i++){
    ellipse(Others[i].posX, Others[i].posY, Others[i].power);
  }
  ellipse(thisPlayer.posX, thisPlayer.posY, thisPlayer.power);
}
