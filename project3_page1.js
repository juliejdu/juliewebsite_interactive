var img
function preload() {
    
}
  
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('moon1.jpg');
  myFont = loadFont('RobotoMono-VariableFont_wght.ttf');
}

function draw() {
  background(0);
  image(img, 0, 0,width, height);
  
    for(var y = 0; y< img.height; y++){
    
    var c = img.get(mouseX*1.875, y*1.875);
    
    stroke(c);
    line(mouseX, y, width, y);
  }
  
if(mouseX<=200){
  noStroke()
  fill(255)
  textFont(myFont)
  textSize(50)
  text('Full Moon Tour in Yosemite',100,150)
  }
  if(mouseX<=150){
  textSize(20)
  text('Location:Yosemite National Park - Taft Point',100,430)
  text('Time:January 6,2023',100,460)
  }
   
  let c = createA('project 3_page2.html', 'learn more')
  c.position(10,10);


}

