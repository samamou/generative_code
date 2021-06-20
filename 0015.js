// fork of https://editor.p5js.org/carlos.henrique2324@gmail.com/full/HyKoU6NzE

let total = 20;
let angX = 0;
let angY = 0;
let globe = [];
let r = 140;
let rotation = true;

function setup() {
  createCanvas(500, 500, WEBGL);
  

  
    for (let i = 0; i < total+1; i++) {
    globe[i] = [];
    var lat = map(i, 0, total, 0, PI);

    for (let j = 0; j < total+1; j++) {
      var lon = map(j, 0, total, 0, TWO_PI);

      var x = r * sin(lat) * cos(lon);
      var y = r * sin(lat) * sin(lon);
      var z = r * cos(lat);
      
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
  ambientLight(100);
  stroke(0.5);    
    
  
  for (let i = 0; i < total; i++) {
    //front?
    if(i % 2 == 0) {
      fill(0, 100, 0, 20);  
    }else  
      //back?
    {
      fill(100,100,100,200);
     }
    
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total+1; j++) {
      let v1 = globe[i][j];
      vertex(v1.x, v1.y, v1.z);
      // let v2 = globe[i+1][j];
      // vertex(v2.x, v2.y, v2.z);
    }
    endShape();
    
    
  }

  if(rotation) {
    let r = random(2);
    angX += 0.01 ;
    angY += 0.004 ;
  }
}
