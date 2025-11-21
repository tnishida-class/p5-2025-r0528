// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1 ;
let onGround = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height * 0.8 - height * 0.05;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  noStroke();
  const groundY = height * 0.8 +4;
  fill(182, 101, 38);
  rect(0, groundY, width, height - groundY);
  for(let i = 0; i < 15; i++){
    for(let j = 0; j < 2; j++){
      let k = i *96
      let l = j * 96
     fill(252, 255, 199);
     rect(6+k, groundY+l, 48, 6);
     rect(0+k, groundY+6+l, 6, 84);
     rect(66+k, groundY+l, 24, 6);
     rect(60+k, groundY+6+l, 6, 24);
     rect(66+k, groundY+36+l, 24, 6);
     rect(54+k, groundY+60+l, 6, 12);
     rect(0+k, groundY+66+l, 12, 6);
     rect(12+k, groundY+72+l, 12, 6);
     rect(24+k, groundY+78+l, 18, 6);
     rect(48+k, groundY+72+l, 6, 24);
     rect(60+k, groundY+36+l, 6, 24);
     fill(0)
     rect(54+k, groundY+l, 6, 60);
     rect(48+k, groundY+60+l, 6, 12);
     rect(42+k, groundY+72+l, 6, 18);
     rect(0+k, groundY+60+l, 12, 6);
     rect(12+k, groundY+66+l, 12, 6);
     rect(24+k, groundY+72+l, 18, 6);
     rect(6+k, groundY+90+l, 36, 6);
     rect(54+k, groundY+90+l, 36, 6);
     rect(90+k, groundY+6+l, 6, 24);
     rect(90+k, groundY+36+l, 6, 54);
     rect(66+k, groundY+24+l, 6, 6);
     rect(66+k, groundY+30+l, 24, 6);
     rect(84+k, groundY+84+l, 6, 6);
    }
  }

  // BLANK[1] キャラクターの左右移動
  x = constrain(x, 0, width);
   if(keyIsDown(LEFT_ARROW)){ x -= 5; }
   if(keyIsDown(RIGHT_ARROW)){ x += 5; }
   if(keyIsDown(LEFT_ARROW) && keyIsDown("B".charCodeAt(0))){ x -= 8; }
   if(keyIsDown(RIGHT_ARROW) && keyIsDown("B".charCodeAt(0))){ x += 8; }

  // BLANK[2] 重力とジャンプ
  y = constrain(y, 0, height * 0.8 - (size/2));
  y += vy;
  vy += g;
  const groundLevel = height * 0.8 - (size/2)
  if (y >= groundLevel) {
    y = groundLevel;
    vy = 0;
    onGround = true;
  } else{
    onGround = false;
  }
  if(keyIsDown(" ".charCodeAt(0)) && onGround){
     vy -=  20
    }

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;
  // キャラクターを描く
  const m = 5
 noStroke();
  // --- 1. 赤色 (R:220, G:40, B:40) ---
// --- 1. 赤色 (R:220, G:40, B:40) ---
if (onGround){
fill(220, 40, 40);
for (let offset = 15; offset <= 35; offset += 5) {
  // y を y - 45 に変更
  rect(x + offset, y - 45, m, m); 
}
for (let offset = 10; offset <= 50; offset += 5) {
  // y + 5 を y + 5 - 45 = y - 40 に変更
  rect(x + offset, y - 40, m, m); 
}
// y + 35 を y + 35 - 45 = y - 10 に変更
rect(x + 10, y - 10, m, m)
rect(x + 15, y - 10, m, m)
rect(x + 25, y - 10, m, m)
rect(x + 30, y - 10, m, m)
rect(x + 35, y - 10, m, m)
// y + 40 を y + 40 - 45 = y - 5 に変更
rect(x + 5, y - 5, m, m)
rect(x + 10, y - 5, m, m)
rect(x + 15, y - 5, m, m)
rect(x + 25, y - 5, m, m)
rect(x + 30, y - 5, m, m)
rect(x + 40, y - 5, m, m)
rect(x + 45, y - 5, m, m)
rect(x + 50, y - 5, m, m)
// y + 45 を y + 45 - 45 = y に変更
rect(x , y , m, m)
rect(x + 5, y , m, m)
rect(x + 10, y , m, m)
rect(x + 15, y , m, m)
rect(x + 40, y , m, m)
rect(x + 45, y , m, m)
rect(x + 50, y , m, m)
rect(x + 55, y , m, m)
// y + 50 を y + 50 - 45 = y + 5 に変更
rect(x + 10, y + 5, m, m)
rect(x + 45, y + 5, m, m)

// --- 2. 茶色 (R:138, G:54, B:15) ---
fill(138, 54, 15);
// y + 70 を y + 70 - 45 = y + 25 に変更
rect(x + 5, y + 25, m, m)
rect(x + 10, y + 25, m, m)
rect(x + 15, y + 25, m, m)
rect(x + 40, y + 25, m, m)
rect(x + 45, y + 25, m, m)
rect(x + 50, y + 25, m, m)
// y + 75 を y + 75 - 45 = y + 30 に変更
rect(x, y + 30, m, m)
rect(x + 5, y + 30, m, m)
rect(x + 10, y + 30, m, m)
rect(x + 15, y + 30, m, m)
rect(x + 40, y + 30, m, m)
rect(x + 45, y + 30, m, m)
rect(x + 50, y + 30, m, m)
rect(x + 55, y + 30, m, m)
// y + 10 を y + 10 - 45 = y - 35 に変更
rect(x + 10, y - 35, m, m)
rect(x + 15, y - 35, m, m)
rect(x + 20, y - 35, m, m)
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 15, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 15, y - 25, m, m)
rect(x + 20, y - 25, m, m)
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 5, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 5, y - 25, m, m)
// y + 25 を y + 25 - 45 = y - 20 に変更
rect(x + 5, y - 20, m, m)
rect(x + 10, y - 20, m, m)

// --- 3. 肌色 (R:255, G:184, B:136) ---
fill(255, 184, 136);
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 10, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 10, y - 25, m, m)
// y + 10 を y + 10 - 45 = y - 35 に変更
rect(x + 25, y - 35, m, m)
rect(x + 30, y - 35, m, m)
rect(x + 40, y - 35, m, m)
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 20, y - 30, m, m)
rect(x + 25, y - 30, m, m)
rect(x + 30, y - 30, m, m)
rect(x + 40, y - 30, m, m)
rect(x + 45, y - 30, m, m)
rect(x + 50, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 25, y - 25, m, m)
rect(x + 30, y - 25, m, m)
rect(x + 35, y - 25, m, m)
rect(x + 45, y - 25, m, m)
rect(x + 50, y - 25, m, m)
rect(x + 55, y - 25, m, m)
// y + 25 を y + 25 - 45 = y - 20 に変更
rect(x + 15, y - 20, m, m)
rect(x + 20, y - 20, m, m)
rect(x + 25, y - 20, m, m)
rect(x + 30, y - 20, m, m)
// y + 30 を y + 30 - 45 = y - 15 に変更
for (offset = 15; offset <= 45; offset += 5)
  rect(x + offset, y - 15, m, m)

// --- 4. 濃い青 (R:40, G:40, B:200) ---
fill(40, 40, 200);
// y + 35 を y + 35 - 45 = y - 10 に変更
rect(x + 20, y - 10, m, m)
// y + 40 を y + 40 - 45 = y - 5 に変更
rect(x + 20, y - 5, m, m)
// y + 45 を y + 45 - 45 = y に変更
rect(x + 20, y , m, m)
rect(x + 25, y , m, m)
rect(x + 30, y , m, m)
rect(x + 35, y , m, m)
// y + 40 を y + 40 - 45 = y - 5 に変更
rect(x + 35, y - 5, m, m)
// y + 45 を y + 45 - 45 = y に変更
rect(x + 35, y , m, m)
// y + 50 を y + 50 - 45 = y + 5 に変更
rect(x + 15, y + 5, m, m)
rect(x + 25, y + 5, m, m)
rect(x + 30, y + 5, m, m)
rect(x + 40, y + 5, m, m)
// y + 55 を y + 55 - 45 = y + 10 に変更
for (offset = 15; offset <= 40; offset += 5)
  rect(x + offset, y + 10, m, m)
// y + 60 を y + 60 - 45 = y + 15 に変更
for (offset = 10; offset <= 45; offset += 5)
  rect(x + offset, y + 15, m, m)
// y + 65 を y + 65 - 45 = y + 20 に変更
rect(x + 10, y + 20, m, m)
rect(x + 15, y + 20, m, m)
rect(x + 20, y + 20, m, m)
rect(x + 35, y + 20, m, m)
rect(x + 40, y + 20, m, m)
rect(x + 45, y + 20, m, m)

// --- 5. 黒 (R:0, G:0, B:0) ---
fill(0, 0, 0);
// y + 10 を y + 10 - 45 = y - 35 に変更
rect(x + 35, y - 35, m, m)
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 35, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 40, y - 25, m, m)
// y + 25 を y + 25 - 45 = y - 20 に変更
for (offset = 35; offset <= 50; offset += 5)
  rect(x + offset, y - 20, m, m)

// --- 6. 黄色 (R:255, G:230, B:0) ---
fill(255, 230, 0);
// y + 50 を y + 50 - 45 = y + 5 に変更
rect(x + 20, y + 5, m, m)
rect(x + 35, y + 5, m, m)

// --- 7. 白色 (背景色) ---
fill(255)
// y + 50 を y + 50 - 45 = y + 5 に変更
for (offset = 0; offset <= 5; offset += 5)
  rect(x + offset, y + 5, m, m)
for (offset = 50; offset <= 55; offset += 5)
  rect(x + offset, y + 5, m, m)
// y + 55 を y + 55 - 45 = y + 10 に変更
rect(x, y + 10, m, m)
rect(x + 5, y + 10, m, m)
rect(x + 10, y + 10, m, m)
rect(x + 45, y + 10, m, m)
rect(x + 50, y + 10, m, m)
rect(x + 55, y + 10, m, m)
// y + 60 を y + 60 - 45 = y + 15 に変更
rect(x, y + 15, m, m)
rect(x + 5, y + 15, m, m)
rect(x + 50, y + 15, m, m)
rect(x + 55, y + 15, m, m);
} else {
 // --- 1. 赤色 (R:220, G:40, B:40) ---
fill(220, 40, 40);
// y + 5  -> y - 40
for(offset = 30; offset <= 50; offset += 5)
  rect(x + offset, y - 40, m, m)
// y + 10 -> y - 35
for(offset = 25; offset <= 65; offset += 5)
  rect(x + offset, y - 35, m, m)
// y + 40 -> y - 5
for(offset = 10; offset <= 60; offset += 5)
  rect(x + offset, y - 5, m, m)
// y + 45 -> y
for(offset = 5; offset <= 55; offset += 5)
  rect(x + offset, y, m, m)
// y + 50 -> y + 5
for(offset = 10; offset <= 35; offset += 5)
  rect(x + offset, y + 5, m, m)
// y + 55 -> y + 10
rect(x + 30, y + 10, m, m)

// --- 2. 茶色 (R:138, G:54, B:15) ---
fill(138, 54, 15);
// y + 15 -> y - 30
for(offset = 25; offset <= 35; offset += 5)
  rect(x + offset, y - 30, m, m)
// y + 20 -> y - 25
for(offset = 20; offset <= 30; offset += 5)
  rect(x + offset, y - 25, m, m)
// y + 25 -> y - 20
for(offset = 20; offset <= 35; offset += 5)
  rect(x + offset, y - 20, m, m)
// y + 30 -> y - 15
rect(x + 20, y - 15, m, m)
rect(x + 25, y - 15, m, m)
// y + (45 to 65) -> y + (0 to 20)
for(offset = 45; offset <= 65; offset += 5)
  rect(x + 75, y + offset - 45, m, m) // y, y + 5, y + 10, y + 15, y + 20
// y + (55 to 65) -> y + (10 to 20)
for(offset = 55; offset <= 65; offset += 5)
  rect(x + 70, y + offset - 45, m, m) // y + 10, y + 15, y + 20
// y + (60 to 70) -> y + (15 to 25)
for(offset = 60; offset <= 70; offset += 5)
  rect(x + 15, y + offset - 45, m, m) // y + 15, y + 20, y + 25
// y + 65 -> y + 20
rect(x + 10, y + 20, m, m)
// y + 70 -> y + 25
rect(x + 10, y + 25, m, m)
rect(x + 5, y + 25, m, m)
// y + 75 -> y + 30
rect(x + 5, y + 30, m, m)
// y + 65 -> y + 20
rect(x + 20, y + 20, m, m)

// --- 3. 肌色 (R:255, G:184, B:136) ---
fill(255, 184, 136);
// y + 15 -> y - 30
rect(x + 40, y - 30, m, m)
rect(x + 45, y - 30, m, m)
rect(x + 55, y - 30, m, m)
// y + 20 -> y - 25
rect(x + 25, y - 25, m, m)
// y + 25 -> y - 20
rect(x + 25, y - 20, m, m)
// y + 20 -> y - 25
for(offset = 40; offset <= 60; offset += 5)
  rect(x + offset, y - 25, m, m)
// y + 25 -> y - 20
for(offset = 35; offset <= 70; offset += 5)
  rect(x + offset, y - 20, m, m)
// y + 30 -> y - 15
for(offset = 30; offset <= 45; offset += 5)
  rect(x + offset, y - 15, m, m)
// y + 35 -> y - 10
for(offset = 30; offset <= 60; offset += 5)
  rect(x + offset, y - 10, m, m)
// y + 20 -> y - 25
rect(x + 35, y - 25, m, m)

// --- 4. 濃い青 (R:40, G:40, B:200) ---
fill(40, 40, 200);
// y + 40 -> y - 5
rect(x + 35, y - 5, m, m)
// y + 40 -> y - 5
rect(x + 55, y - 5, m, m)
// y + 45 -> y
rect(x + 40, y, m, m)
// y + 45 -> y
rect(x + 60, y, m, m)
// y + 50 -> y + 5
for(offset = 40; offset <= 60; offset += 5)
  rect(x + offset, y + 5, m, m)
// y + 55 -> y + 10
for(offset = 20; offset <= 65; offset += 5)
  rect(x + offset, y + 10, m, m)
// y + 60 -> y + 15
for(offset = 20; offset <= 65; offset += 5)
  rect(x + offset, y + 15, m, m)
// y + 65 -> y + 20
for(offset = 25; offset <= 65; offset += 5)
  rect(x + offset, y + 20, m, m)
// y + 70 -> y + 25
for(offset = 20; offset <= 50; offset += 5)
  rect(x + offset, y + 25, m, m)
// y + 75 -> y + 30
for(offset = 20; offset <= 35; offset += 5)
  rect(x + offset, y + 30, m, m)
// y + 15 -> y - 30
for(offset = 65; offset <= 75; offset += 5)
  rect(x + offset, y - 30, m, m)
// y + 20 -> y - 25
for(offset = 65; offset <= 75; offset += 5)
  rect(x + offset, y - 25, m, m)
// y + 25 -> y - 20
rect(x + 75, y - 20, m, m)
// y + 30 -> y - 15
rect(x + 70, y - 15, m, m)
// y + 35 -> y - 10
rect(x + 65, y - 10, m, m)

// --- 5. 黒 (R:0, G:0, B:0) ---
fill(0, 0, 0);
// y + 15 -> y - 30
rect(x + 50, y - 30, m, m)
// y + 20 -> y - 25
rect(x + 50, y - 25, m, m)
// y + 25 -> y - 20
rect(x + 55, y - 20, m, m)
// y + 30 -> y - 15
for(offset = 50; offset <= 70; offset += 5)
  rect(x + offset, y - 15, m, m)

// --- 6. 黄色 (R:255, G:230, B:0) ---
fill(255, 230, 0);
// y + 55 -> y + 10
rect(x + 45, y + 10, m, m)
rect(x + 60, y + 10, m, m)

// --- 7. 白色 (背景色) ---
fill(255)
// y -> y - 45
for(offset = 65; offset <= 75; offset += 5)
  rect(x + offset, y - 45, m, m)
// y + 5 -> y - 40
for(offset = 65; offset <= 75; offset += 5)
  rect(x + offset, y - 40, m, m)
// y + 10 -> y - 35
rect(x + 70, y - 35, m, m)
rect(x + 75, y - 35, m, m)
// y + 50 -> y + 5
rect(x, y + 5, m, m)
// y + 55 -> y + 10
rect(x, y + 10, m, m)
// y + 50 -> y + 5
rect(x + 5, y + 5, m, m)
// y + 55 -> y + 10
rect(x + 5, y + 10, m, m)
// y + 60 -> y + 15
rect(x + 5, y + 15, m, m)
// y + 55 -> y + 10
rect(x + 10, y + 10, m, m)
}
}