// たくさん出てくるアニメーション
let balls;
let targets; 

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  targets = [];
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);

  // 的のアニメーション(的を動かす) 画面ににいる的だけをフレームに追加して画面に映す
  for(let i = 0; i < targets.length; i++){
    let t = targets[i];
    noStroke()
    fill(255);
    ellipse(t.x, t.y, t.size);
    fill(255,0,0)
    ellipse(t.x, t.y, t.size*3/4);
    fill(255);
    ellipse(t.x, t.y, t.size*1/2);
    fill(255,0,0);
    ellipse(t.x, t.y, t.size*1/4);
    t.x += t.vx;
    t.y += t.vy;
  }
  // 画面外に出た的を配列から削除する
  targets = targets.filter(insideCanvas); //true（画面内にある）の時だけ「targets」のボックスの中に入れる


  // ボールのアニメーション
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(0);
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  // 画面外に出たボールを配列から削除する
  balls = balls.filter(insideCanvas); //true（画面内にある）の時だけ「balls」のボックスの中に入れる

 //的生成
  if(frameCount % 45 === 0) { 
    addTarget();
  }
  function addTarget() {
  const cx = width / 2;
  const cy = height / 2;

  // ランダムな方向（−1〜1）
  const dirX = random(-1, 1); //dirはベクトルのようなもの　プラスは右、マイナスは左
  const dirY = random(-1, 1);
  const speed = 4

  const t = {
    x: cx,
    y: cy,
    vx: dirX * speed,
    vy: dirY * speed,
    size: 80
  };
  targets.push(t);
}


  // ボールに当たった or 大きくなりすぎた的を配列から削除する
  const activeTargets = []; // 生き残った的を一時的に保持する配列
  for(let i = 0; i < targets.length; i++){ //すべての的をチェック
    let t = targets[i];
    let hit = false;

      for(let j = 0; j < balls.length; j++){ // すべてのボールと衝突判定
        let b = balls[j];
        let d = dist(b.x, b.y, t.x, t.y); //中心同士の距離

     　 if (d < (b.size / 2 + t.size / 2)) {　//衝突したときの処理
        　hit = true;
        　break; 
     　 }
      } 
      if(!hit) activeTargets.push(t); // 衝突していなければ生き残る
 }

  targets = activeTargets; // 生き残った的だけを残す
}

//ボール生成
function mouseDragged(){
  const dx = mouseX - pmouseX; //mouseX: 現在のマウスのX座標 pmouseX: 1フレーム前のマウスのX座標→ つまり「マウスがどれくらい横に動いたか」
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: 30, vx: dx, vy: dy };
    balls.push(b);
  }
}
 
function insideCanvas(b) {
  return b.x > 0 && b.x < width && b.y > 0 && b.y < height;
}                                                         //ボールが画面の中にある(true)か、外にある(false)かの結果を返す(return)
function insideCanvas(t) {
  return t.x > 0 && t.x < width && t.y > 0 && t.y < height;
}                                                        //的バージョン