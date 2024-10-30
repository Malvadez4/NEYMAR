let palavra;
function setup() {
  createCanvas(400, 400);
  palavraAleatoria();
}

function palavraAleatoria(){
 let palavras = ["Neymar", "Brasil", "Canarinho", "Biancardi", "Puma"];
 palavra = random(palavras);
}

function inicializaCores(){
   background("yellow");
  fill("green");
  textSize(60);
  textAlign(CENTER, CENTER);
}

function draw() {
 inicializaCores();
  let maximo = width;
  let minimo = 0; 
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  text(parcial, 200, 200);
   
  
  
 /*f(mouseX < 50){
  let palavra = "N";
  text(palavra, 200, 200);
  se if (mouseX <100) {  
    let palavra = "Ne";
    text(palavra, 200, 200);
  } else if (mouseX <150) {  
    let palavra = "Ney";
    text(palavra, 200, 200);
  } else if (mouseX <200) {  
    let palavra = "Ney";
    text(palavra, 200, 200);
  } else if (mouseX <250){  
    let palavra = "Neym";
    text(palavra, 200, 200);
  } else if (mouseX <300) {  
    let palavra = "Neyma";
    text(palavra, 200, 200);
  } else if (mouseX <350) {  
    let palavra = "Neymar";
    text(palavra, 200, 200);  
   }*/
  }