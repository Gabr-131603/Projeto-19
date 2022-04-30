var pistaImg, pista;
var carroImg, carro, carrosGroup;
var carroImg2
var jogador, jogadorImg;

var gameState = "play"

function preload(){
  pistaImg = loadImage("pista.png");
  carroImg = loadImage("carro1.png");
  carroImg2 = loadImage("carro+2.png");
  jogadorImg = loadImage("carro+3.png");
  
}

function setup() {
  createCanvas(600, 600);
  pista = createSprite(300,300);
  pista.addImage("pista",pistaImg);
  pista.velocityY = 1;
  carrosGroup = new Group();
  
  jogador = createSprite(200,500,50,50);
  jogador.addImage("jogador",jogadorImg);
  
  
  
}


function draw() {
  background(200);
  if(gameState == "play"){

  
  if(pista.y > 400){
      pista.y = 300
    }
    create_carro();
    
    if(keyDown("right_arrow")){
      jogador.velocityX = 3;
    }
    if(keyDown("left_arrow")){
      jogador.velocityX = - 3;
    }
    
    if(carrosGroup.isTouching(jogador) || jogador.x < 0 || jogador.x > 600 ){

    
      jogador.destroy();
      gameState = "end";
    }
    drawSprites();
  }
  if(gameState == "end"){
    stroke("red");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250);
  }
}
function create_carro(){
  if(frameCount%40==0){
    carro = createSprite(200,-50);
    var selecionar = Math.round(random(1,2));
    if(selecionar == 1){
      carro.addImage(carroImg);
    } else{
      carro.addImage(carroImg2);
    }
    carro.scale = 1.0;
    carro.x = random(0,600);
    carro.velocityY = 8;
    carro.lifetime = 800;
    carrosGroup.add(carro);

    jogador.depth = carro.depth + 1;

    
  }
}