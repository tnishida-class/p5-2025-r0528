// EUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(23,23,150);
  noStroke();
  //12個の星を描く
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12; //PI=π＝180度
    const x = 150 + cos(theta) * 65;
    const y = 100 + sin(theta) * 65;
    noStroke()
    fill(255,255,0)
    star(x, y, 10);
  }
}

// 一つ一つの星を描くための関数
function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI; //HALF_PI=90度　角度の始まりは円の右だからその分90度引くことで真上スタートの星になる
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}