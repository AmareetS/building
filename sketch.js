var b1, b2 , b3 , b4 , b5 , b6 , b7 ,b8 ,b9 ,b10;

function setup() {
  createCanvas(450, 400);
  b1=new Building();
  b1.position=9;
  b1.floors=18;// number of floors
  
  b2=new Building();
  b2.position=8;
  b2.floors=14;// number of floors

  b3=new Building();
  b3.position=7;
  b3.floors=20;// number of floors
 
  b4=new Building();
  b4.position=6;
  b4.floors=30;// number of floors
  
  b5=new Building();
  b5.position=5;
  b5.floors=15;// number of floors
  
  b6=new Building();
  b6.position=4;
  b6.floors=20;// number of floors
  
  b7=new Building();
  b7.position=3;
  b7.floors=10;// number of floors
  
  b8=new Building();
  b8.position=2;
  b8.floors=18;// number of floors
  
  b9=new Building();
  b9.position=1;
  b9.floors=20;// number of floors
  
  b10=new Building();
  b10.position=10;
  b10.floors=15;// number of floors
}

function draw() {
  background('skyblue');
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();

}