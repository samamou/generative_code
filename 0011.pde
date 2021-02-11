float xspeed = 1;
float yspeed = 1;

Circle[] circles;
int numCircles = 70;
int maxDistance;

void settings(){
 size(800,800); 
}

void setup() {
  //size(300, 300);
  smooth();
  noStroke();

  // create an array and fill it with circles
  circles = new Circle[numCircles];
  //circles[0] = new Circle(width/200, height/200,  random(2,2));

  for (int i=0; i< numCircles; i++) {
    //circles[i] = new Circle(600*sin(TWO_PI/numCircles*i), 600*cos(numCircles*i/TWO_PI), random(0));
    circles[i] = new Circle(500*sin(TWO_PI/numCircles*i), 500*cos(TWO_PI/numCircles*i), random(10, 10));

  }
}

void draw() {
  
  float t = (float)frameCount;
  
  translate (width/2,height/2);
 
   rotate(t/70);
  // clear background
  background(255, 255, 255);
  
  
  // update and display the circles
  for (int i=0; i< numCircles; i++) {
    if (i==0){
          circles[i].displaycircle();
    }
    else{
    circles[i].update();
    circles[i].display();
    }
  }
 

  // define maximum distance
  maxDistance = mouseX;
 
  // look of the lines
  stroke(0);
  strokeWeight(0.5);

  for (int i=0; i< numCircles; i++) {
    // compare circle to other circles
    for (int j=i+1; j< numCircles; j++) {
      // draw line if distance is below 'maxDistance'
      if (dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y)  < maxDistance){
        line( circles[i].x, circles[i].y, circles[j].x, circles[j].y);
      }
  }
 }
}


class Circle {
  float x, y, dia;

  Circle(float x, float y, float dia) {
    this.x = x-x/2;
    this.y = y-y/2;
    this.dia = dia;
  }

  void update() {
    // code for movement here
    // this is just some random displacement
    
    //rotate(sin(x)/1000);
    
    for (int i=0; i< 1; i++) {
     //rotate(x/50);
    for (int j=0; j< 1; j++) {
    //x = x - random(-0.5, 0.5);
    //y = y + random(-0.5, 0.5);
    //x = x - random(-0.5, 0.5);
    //y = y + random(-0.5, 0.5);
    
    x = x - random(-2, 2);
    y = y + random(-2, 2);
    x = x - random(-2, 2);
    y = y + random(-2, 2);
    }
    
  
    }
  }


  void displaycircle() {
    // code for drawing the circles
    //stroke(0);
    noStroke();
   
    //fill(random(255), random(255), random(255));
    //fill(209, 209, 209);
  }

  void display() {
    // code for drawing the circles
    //stroke(0);
    noStroke();
   
    //fill(random(-20,20), random(-10,10), random(-10,10));
    //fill( 0.299 * random(8) + 0.587 * random(255) + 0.114 * random(7) );
    fill(209, 209, 209,50);

    ellipse(x, y, dia, dia);
  }
}
