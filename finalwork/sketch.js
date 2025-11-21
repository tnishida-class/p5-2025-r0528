// 最終課題を制作しよう


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let doors = [];
let correctDoor;
let doorStates = [false, false, false]; // ← 扉ごとに押したか記録
let gameFinished = false; // 正解を押したら true にする



function setup(){
  createCanvas(windowWidth, windowHeight);
   // 扉の配置を作成
  doors = [
    { x: 200, y: 80, w: 160, h: 250 },
    { x: windowWidth / 2 - 80, y: 80, w: 160, h: 250 },
    { x: windowWidth - (200 + 160), y: 80, w: 160, h: 250 }
  ];

    // 0, 1, 2 のどれかがランダムで正解
  correctDoor = floor(random(3));
  
}



function draw(){
  background(0, 128, 0);
  Pooh(windowWidth/2, windowHeight-100);  
  //扉を1つも押してないときだけ表示
 if (!doorStates[0] && !doorStates[1] && !doorStates[2]) {
    balloon("はちみつはどの扉の中にあるかな？", windowWidth/2+280, windowHeight-150);
  }
  
  for (let i = 0; i < 3; i++) {
    drawDoor(doors[i], i);
  }
}

//================判定の範囲を決める===================
function mousePressed() {
    // どの扉をクリックしたか判定
  for (let i = 0; i < 3; i++) {
    let d = doors[i];

    if (mouseX > d.x && mouseX < d.x + d.w &&
        mouseY > d.y && mouseY < d.y + d.h) {
      doorStates[i] = true;   // これで一回間違えても別のドア押せる
      clickedDoor = i; // 選んだ扉を記録

       //  正解ならゲーム終了フラグを立てる
      if (i === correctDoor) {
        gameFinished = true;
      }
     
    }
  }
}

//========================Poohを描く===========================
function Pooh(cx, cy) {
  // 顔
  fill(255, 200, 0);
  ellipse(cx, cy, 190, 175);

  // 耳
  fill(255, 200, 0);
  ellipse(cx - 60, cy - 60, 60, 60);
  ellipse(cx + 60, cy - 60, 60, 60);

  // 目
  fill(0);
  ellipse(cx - 27, cy , 20, 20);
  ellipse(cx + 27, cy , 20, 20);

  // 眉毛（丸いカーブ）
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(cx - 45, cy - 30, 40, 35, radians(180), radians(270), OPEN);//左眉毛
  arc(cx + 45, cy - 30, 40, 35, radians(270), radians(0), OPEN); //右眉毛
  noStroke();

  // 鼻
  fill(0);
  ellipse(cx, cy + 20, 20, 15);

  //鼻の上の線
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(cx, cy + 25, 40, 35, radians(180), radians(0), OPEN); 

  // 口
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(cx, cy + 40, 60, 20, 0, PI);
  noStroke();

  //ほっぺ
  noStroke();
  fill(255,183,185);
  ellipse(cx-50, cy+20,35,15)
  ellipse(cx+50, cy+20,35,15)

  // Tシャツの首元
  fill(255, 100, 100);
  rect(cx - 80, cy + 75, 160, 100, 100);
}


// ==================== 扉の描画 ====================

  
function drawDoor(d, index) {
 // 押す前
  if (!doorStates[index]) {
    fill(150, 100, 50);
    rect(d.x, d.y, d.w, d.h, 10);

    fill(255, 255, 0);
    ellipse(d.x + 130, d.y + 120, 30);

    return;

  }

  // 押した後
  if (index === correctDoor) {
    drawHoney(d);
    balloon("やったー！",windowWidth/2+170 , windowHeight-150);
  
  } else {
    // 不正解
    fill(150, 100, 50);
    rect(d.x, d.y, d.w, d.h, 10);
    fill(255, 255, 0);
    ellipse(d.x + 130, d.y + 120, 30);

    push();
    textSize(20);
    textStyle(BOLD);
    balloon("ざんねん…",d.x+200 ,d.y+30 );
    pop();

    if (!gameFinished) {
    balloon("ないなぁ",windowWidth/2+170 , windowHeight-150);
    
}
}
}


// ==================== はちみつの描画 ====================
  function drawHoney(d) {
  fill(255, 200, 0);
  rect(d.x, d.y, d.w, d.h, 10);

  fill(120, 80, 30);
  rect(d.x + 30, d.y + 90, 100, 120, 40);
  ellipse(d.x + 80, d.y + 80, 90, 40);

  fill(252, 173, 0);
  ellipse(d.x + 80, d.y + 80, 60, 20);

  push();
  fill(252, 173, 0);
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("honey", d.x + 80, d.y + 150);
  pop();
}

//===================================吹き出しの描画================================
function balloon(t, x, y){
  push();
  textSize(20);
  textStyle(BOLD);
  const w = textWidth(t); // テキストの幅
  const h = textAscent(t) + textDescent(t); // テキストの高さ
  const p = 50; // 余白の大きさ (padding)

  

  // 吹き出しの背景を先に描く
  noStroke();
  fill(255,255,255);
  ellipse(x, y, w+p, h+p);
 
  // 吹き出しの三角形を描く
  noStroke()
  fill(255,255,255)
  beginShape();
  vertex(x,y);
  vertex(x-(w+p)/3,y);
  vertex(x-(w+p)/2,y+(h + 2*p)/3);
  endShape(CLOSE); 

  // 吹き出しのテキストを描く
  textAlign(CENTER, CENTER);
  fill(0);
  text(t, x , y);

  pop();
}

function keyPressed() {
  if (keyCode === ENTER) {
    // 扉の状態をすべてリセット
    doorStates = [false, false, false];
    gameFinished = false;
    clickedDoor = null;

    // 正解の扉を新しくランダムに決める
    correctDoor = floor(random(3));
  }
}


