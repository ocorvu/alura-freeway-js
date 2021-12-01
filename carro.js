//Codigo carro

let wCarro = 50;
let hCarro = 40;

let xCarros = [600, 600, 600, 600, 600, 600];

let velocidades = [2, 3, 2.5, 3.5, 5, 4];

let yCarros = [40, 95, 150, 210, 260, 320];

function mostraCarro(){
    for (let i = 0; i < carros.length; i++){
        image(carros[i], xCarros[i], yCarros[i], wCarro, hCarro);
    }
}

function movimentaCarro(){
    for (let i = 0; i < xCarros.length; i++){
        xCarros[i] -= velocidades[i];
    }
}

function fimEstrada(){
    for (let i = 0; i < xCarros.length; i++)
      if (xCarros[i] + wCarro <= 0){
        xCarros[i] = 600;
    }
  }

  