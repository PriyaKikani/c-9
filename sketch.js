var num1,num2;
var b1,b2;
function setup() {
  createCanvas(400, 400);
  num1 = createInput();
  num1.position(30,50);

  num2 = createInput();
  num2.position = (80,50);

  b1 = createButton("Add");
  b1.position(50,250);
  //b1.mousePressed(add);

  b2 = createButton("Subtract");
  b2.position(150,250);
  //b2.mousePressed(subtract);

}

function draw() {
  background(220);
}