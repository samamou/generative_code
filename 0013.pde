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
  rotate(t/200);
  //rotate (t+200);
  
 //event
 //if (mousePressed) {
 // //ellipse (sin(t), cos(t/10)*20, 500,100); 
 // }
  //line (sin(t/120)*300, cos(t/50)*200, cos(t/10)*200, cos(t/5)*200); 
  ellipse (sin(t), cos(t/10)*20, 500,100*frameCount % 700); 
  //ellipse ((75 + 150 * i + 2 * frameCount % 600);

}
