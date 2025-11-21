// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ 
    line(0, height * i / n, width, height * i / n); 
  }

 //点を書く 
 let points = []
 const dx = width / scores.length; 
  for(let i = 0; i < scores.length; i++){
    const h = height * scores[i] / 100; 
    let x = i * dx + dx/2;
    let y = height - h;
    points.push({ x: x, y: y }); //x座標をx,y座標をyとしたものを「points」というリストに追加
    fill(0);
    ellipse(x, y, 10); 
  } 
  //線で点をつなげる
  for (let i = 0; i < points.length - 1; i++) {
    line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
  }
}