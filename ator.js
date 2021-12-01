//Codigo ator

let wAtor = 25;
let hAtor = 25;
let xAtor = 50;
let yAtor = 370;

function comeco(){
  xAtor = 50;
  yAtor = 370;
}

function mostraAtor(){
    image(ator, xAtor, yAtor, wAtor, hAtor); //mostra ator
  }

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 5;
    }
    if (keyIsDown(LEFT_ARROW)){
      xAtor -= 5;
    }
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 5;
    }
    if (keyIsDown(RIGHT_ARROW)){
      xAtor += 5;
    }
  }

function colideCarro(){
  for (let i = 0; i < xCarros.length; i++){
    colidiu = collideRectRect(xAtor, yAtor, wAtor, hAtor, xCarros[i], yCarros[i], wCarro, hCarro);
    if (colidiu){
      comeco();
      mortes++;
      somColisao.play();
    }
  }
}

function limiteMapa(){
  if (yAtor >= 375){
    yAtor -= 5;
  }
  if (xAtor <= 0){
    xAtor += 5;
  }
  if (xAtor >= 575){
    xAtor -= 5;
  }
}

function atravessou(){
  if (yAtor <= 20){
    comeco();
    atravessar++;
    somPonto.play();
  }
}