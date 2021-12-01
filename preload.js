let somtrilha;
let somColisao;
let somPonto;

function preload(){
    fundo = loadImage("images/estrada.png");
    ator = loadImage("images/ator-1.png") 
    carro1 = loadImage("images/carro-1.png"); 
    carro2 = loadImage("images/carro-2.png"); 
    carro3 = loadImage("images/carro-3.png");
    carros = [carro1, carro2, carro3, carro1, carro2, carro3];

    somTrilha = loadSound('sounds/trilha.mp3');
    somColisao = loadSound('sounds/colidiu.mp3');
    somPonto = loadSound('sounds/pontos.wav');
  }