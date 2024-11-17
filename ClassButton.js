let width = 1000, height = 500; //Canvas Size
let Buttons = [], buttonHeight = 50;
let page = 1, maxPages = 3;

class Button{
  constructor(par1, par2, par3, par4) {
    this.posX = par1;
    this.posY = par2;
    this.txt = par3;
    this.buttonWidth = par4;
  }
  show(){
    fill(0, 255, 0);
    stroke(1);
    rect(this.posX, this.posY, this.buttonWidth * buttonHeight, buttonHeight);
    textSize(buttonHeight);
    fill(0);
    text(this.txt, this.posX + buttonHeight / 4, this.posY + buttonHeight);
  }
}

pageDisplayButton = new Button(width / 2, height - buttonHeight, page + '/' + maxPages, 2);
Buttons.push(pageDisplayButton);
pageDecreaseButton = new Button(0, height - buttonHeight, '<', 1);
Buttons.push(pageDecreaseButton);
pageIncreaseButton = new Button(width - buttonHeight, height - buttonHeight, '>', 1);
Buttons.push(pageIncreaseButton);