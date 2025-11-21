// 吹き出し
function setup(){
  createCanvas(400, 400);
  background(191,232,255);
  textSize(16);
  balloon("お腹すいた", 200, 200)
}

function draw(){
  if(mouseIsPressed){
    background(191,232,255);
    balloon("腹減ったあああああ",mouseX,mouseY);
  }
}

function balloon(t, x, y){
  const w = textWidth(t); // テキストの幅
  const h = textAscent(t) + textDescent(t); // テキストの高さ
  const p = 50; // 余白の大きさ (padding)

  push();

  // BLANK[1] 吹き出しの背景を先に描く
  noStroke();
  fill(63,188,255);
  ellipse(x, y, w+p, h+p);
 
  // BLANK[2] 吹き出しの三角形を描く
  noStroke()
  fill(63,188,255)
  beginShape();
  vertex(x,y);
  vertex(x-(w+p)/3,y);
  vertex(x-(w+p)/2,y+(h + 2*p)/3);
  endShape(CLOSE); 

  // 吹き出しのテキストを次に描く
  textAlign(CENTER, CENTER);
  fill(255, 255,0);
  text(t, x , y);

 
  
  pop();
}