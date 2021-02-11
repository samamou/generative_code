float xspeed = 1;
float yspeed = 1;

Circle[] dots;
int num_Circles = 50;
int max_Distance;

void settings(){
 size(900,900); 
}


void setup() {
  smooth();
  noStroke();

  // create an array and fill it with circles
  dots = new Circle[num_Circles];
  for (int i=0; i< num_Circles; i++) {
    //circles[i] = new Circle(random(width), random(height), random(0, 50));
    dots[i] = new Circle(500*sin(TWO_PI/num_Circles*i), 500*cos(TWO_PI/num_Circles*i), random(10, 10));
  }
}


void draw() {
  
  //float t = (float)frameCount;
  
  translate (width/2,height/2);
  // translate (100,100);
  
   //clear background
  background(255, 255, 255);
  
  // update and display the circles
  for (int i=0; i< num_Circles; i++) {
    dots[i].update();
    dots[i].display();
  }

  // define maximum distance
  max_Distance = mouseX;
 
  // look of the lines
  stroke(0);
  strokeWeight(0.5);
  
  for (int i=0; i< num_Circles; i++) {
    // compare circle to other circles
    for (int j=i+1; j< num_Circles; j++) {
      // draw line if distance is below 'maxDistance'
      if (dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y) < max_Distance) {
        line( dots[i].x, dots[i].y, dots[j].x, dots[j].y);
       
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
    //x = x - random(-5, 5);
    //y = y + random(-5, 5);
    //x = x - random(-5, 5);
    //y = y + random(-5, 5);
    
    x = x - random(-0.5, 0.5);
    y = y + random(-0.5, 0.5);
    x = x - random(-0.5, 0.5);
    y = y + random(-0.5, 0.5);
   
  }

  void display() {
    // code for drawing the circles
    //stroke(0);
    noStroke();
    
    fill(random(255), random(255), random(255));
    fill(209, 209, 209);

    ellipse(x, y, dia, dia);
    
  }
}
