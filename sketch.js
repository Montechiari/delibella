let logo;

function preload() {
    logo = loadImage("assets/logo.PNG");
}

function setup() {
    setAttributes('antialias', true);
    janela = createCanvas(600, 600);
    janela.parent("tela");
}

function draw() {
  background(154, 25, 21);
  translate(300, 300);
  push();
  rotate(frameCount * -0.001 * (PI / 3));
  imageMode(CENTER);
  image(logo, 0, 0, 400, 400);
}
