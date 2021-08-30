// fork of https://editor.p5js.org/carlos.henrique2324@gmail.com/full/HyKoU6NzE

let total = 31;
let angX = 0;
let angY = 0;
let globe = [];
let globe2 = [];
let globe3 = [];
let r = 250;
let rotation = true;

function setup() {
  createCanvas(900, 900, WEBGL);
    
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
  
    
    for (let i = 0; i < total+1; i++) {
    globe2 [i] = [];
    var lat2 = map(i, 0, total, 0, PI);

    for (let j = 0; j < total+1; j++) {
      var lon2 = map(j, 0, total, 0, TWO_PI);

      var x2 = (r * sin(lat2) * cos(lon2))/1;
      var y2 = (r * sin(lat2) * sin(lon2))/1;
      var z2 = (r * cos(lat2))/1;
      
      globe2[i].push(createVector(x2, y2, z2));
    }
  }
  
  
  for (let i = 0; i < total+1; i++) {
    globe3 [i] = [];
    var lat3 = map(i, 0, total, 0, PI);

    for (let j = 0; j < total+1; j++) {
      var lon3 = map(j, 0, total, 0, TWO_PI);

      var x3 = (r * sin(lat3) * cos(lon3))/2;
      var y3 = (r * sin(lat3) * sin(lon3))/2;
      var z3 = (r * cos(lat3))/2;
      
      globe3[i].push(createVector(x3, y3, z3));
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
  
  ambientLight(100);
  // stroke(0.1);    

  noStroke();

  shape1();
  shape2();

  // shape3();

}

function shape1(){
  
  rotateY(angX);
  rotateX(angY);
  for (let i = 0; i < total; i++) {
    //front?
    if(i % 2 == 0) {
      fill(40, 200, 200, 200);  
    }else  
    //   //back?
    // {
    //   fill(100,100,100,200);
    //  }
    
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
    angX -= 0.0009 ;
    angY -= 0.0009 ;
  }
}



function shape2(){
  rotateY(angX);
  rotateX(angY);
  for (let i = 0; i < total; i++) {
    //front?
    if(i % 2 == 0) {
      fill(10, 200, 200, 100);  
    }else  
    //   //back?
    // {
    //   fill(100,100,100,200);
    //  }
    
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total+1; j++) {
      let v12 = globe2[i][j];
      vertex(v12.x, v12.y, v12.z);
      // let v2 = globe[i+1][j];
      // vertex(v2.x, v2.y, v2.z);
    }
    endShape();
    
    
  }

  if(rotation) {
    let r = random(2);
    angX -= 0.005 ;
    angY -= 0.005 ;
  }
}
