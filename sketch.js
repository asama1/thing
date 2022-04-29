const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '
let smile

function preload() {
  smile = loadImage("Happy.jpg");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(smile, 0, 0, 250, 250)
  
  for (let i = 0; i < smile.width; i++){
    for (let j = 0; j < smile.height; i++){
      const pixelIndex = (i + j * smile.width) * 4;
      const r = smile.pixels[pixelIndex + 0];
      
      
      
      
      
    }
  }
}
