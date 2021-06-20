// fork of https://editor.p5js.org/carlos.henrique2324@gmail.com/full/HyKoU6NzE

let fr = 40; //starting FPS

let total = 10;
let angX = 0;
let angY = 0;
let globe = [];
let r = 200;
let rotation = true;

function setup() {
  createCanvas(500, 500, WEBGL);
  
  frameRate(fr); // Attempt to refresh at starting FPS
  
    for (let i = 0; i < total+1; i++) {
    globe[i] = [];
      
    var lat = map(i, 0, total, 10, PI);

    for (let j = 0; j < total+1; j++) {
      var lon = map(j, 0, total, 0, TWO_PI);

      var x = r * sin(lat) * cos(lon) ;
      var y = r * sin(lat) * sin(lon);
      var z = r * cos(lon) * cos(lat);
      
      globe[i].push(createVector(x, y, z));

    }
  }
}

function mouseDragged() {

  angX = map(mouseX, 0 , width, 0 , PI);
  angY = map(mouseY, 0 , height, 0 , PI);
  rotation = false;
}

function keyPressed() {
	 rotation = true;
}

function draw() {
  background(250);
  rotateY(angX);
  rotateX(angY);
  ambientLight(10);
  stroke(3.5);
  
  drawSomething();    
}

function drawSomething() {
 
  for (let i = 0; i < total; i++) {
    //front?
//     if(i % 2 == 0) {
//       // noFill();  
//       fill(20,20,100);

//     }
//     else  
//       //back?
//     {
//       fill(0,100,100,20);
//     }
    
    beginShape(TRIANGLE_STRIP);
    
    for (let j = 0; j < total+1; j++) {
    
      let v1 = globe[i][j];
      vertex(v1.x, v1.y, v1.z);
      let v2 = globe[i][j];
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
    
  }

  if(rotation) {
    // let r = random(0.03);
    angX += 0.01;
    angY += 0.01;
  }
  

}
