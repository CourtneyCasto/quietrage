function setup() {
  createCanvas(650, 650);
}
function draw() {
  console.log(mouseX)
  let circDiameter = width/8;         // variable for circle diameter width of the canvas divided by 8
  let circSpacing = 5;                // variable for spacing between circles
  
  background(0);
    // ellipse((circDiameter + circSpacing) * j, (circDiameter + circSpacing) * i, circDiameter, circDiameter);
  for (let i = 0; i < 8; i+=2) {       // this line determines the number of rows
     for (let j = 1; j <= i; j++) {   // this line determines the amount of ellipses on each row
         ellipse((circDiameter + circSpacing) * j - circDiameter / 4, (circDiameter + circSpacing) * i, circDiameter + (mouseX - width / 2) / width * 45, circDiameter + (mouseY - width / 2) / width * 45);
     }
 }
  
}