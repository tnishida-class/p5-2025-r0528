// チェッカー
function setup() {
  createCanvas(200, 200);
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i%2==0 && j%2==0)||(i%2==1 && j%2==1)){
        fill(255)
      }
      else{
        fill(150)
      }
     rect(25*i, 25*j, 25, 25);
       // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
    }
  }
  
  for(let k = 0; k < 8; k++){
    for(let l = 0; l < 8; l++){
      if((k%2==0 && l%2==0)||(k%2==1 && l%2==1)){
        fill(255)
      }
    else if(l<3){
      fill(255,0,0)
    }  
    else if(l>4){
      fill(0)
    }
    else{
      fill(150)
    }
     circle(25*k+12.5, 25*l+12.5, 20, 20);
     
}
  }
}
