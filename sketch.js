
let colidiu = false;
let mortes = 0;
let atravessar = 0;

function setup() {
  createCanvas(600, 400);
  //somTrilha.loop();
}

function draw() {
  background(fundo);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor()
  fimEstrada();
  colideCarro();
  incluiPlacar();
  limiteMapa();
  atravessou();
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(24)
  fill(255);
  text(`mortes: ${mortes}`, 150, 25);
  text(`atravessou: ${atravessar}`, 450, 25);
  text(`(x: ${xAtor}, y:${yAtor})`, 360, 390);
}