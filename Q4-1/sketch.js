// 配列の平均・最大・最小を求め、棒グラフを描く
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); 
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum); //sumを覚えておいていつでも取り出せるようにしておく

  // ここから平均・最大・最小を求めます
  const average = sum / scores.length;
  let largest = 0; //最大を０としておいてそれ以上であればその値を最大値と設定して一つ一つ比較していく
  for(let i = 0; i < scores.length; i++){
    if(scores[i] > largest){
      largest = scores[i];
    }
  }
  let smallest = 100; //最小を１００としておいてそれを下回ればその値を最小値として再設定
  for(let i = 0; i < scores.length; i++){
    if(scores[i] < smallest){
      smallest = scores[i];
    }
  }
  

  

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    // BLANK[4] 最大値・最小値の色を変えましょう

  if(scores[i] == largest){ fill(255, 0, 0); }
    else if(scores[i] == smallest){ fill(0, 0, 255); }
    else{ fill(128); }
    rect(i * dx + 2, height - h, dx - 4, h);
  }

  // BLANK[5] 平均点の線を引きます
  const ay = height - height * average / 100;
  stroke(0, 255, 0);
  line(0, ay, width, ay); 
}