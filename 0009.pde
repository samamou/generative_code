float xspeed = 1;
float yspeed = 3.3;

void setup(){
size(700,700);
background(255,255,255);
noFill();
stroke (0,40);
}

void draw() {
  float t = (float)frameCount;
  translate (width/2, height/2);
  rotate(t/300);
  //rotate (t+200);
  
 //event
 //if (mousePressed) {
 // //ellipse (sin(t), cos(t/10)*20, 500,100); 
 // }
  ellipse (sin(t/140)*200, cos(t/40)*100, atan(t/100)*100, cos(t/240)*100); 

  
}
