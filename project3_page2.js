
let totalPts = 300;
let steps = totalPts + 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  background(0);
  stroke(1)
  strokeWeight(5)
  stroke(255);
  let rand = 0;
  for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    rand += random(-6, 6);
  }
  
  translate(width/2,height/2)
  
  noStroke()
  fill(255)
  ellipse(0,0,300,300)
  
  fill(0)
  ellipse(mouseX/3-200,0,300,300);
  
  fill(255)
  stroke(1)
  textSize(15)
  strokeWeight(1)

  
  text('With an easy-grade hike to the Sentinel Dome, visitors of all ages can experience the dramatic landscape during sunset and moon rise',-450,400-40)
    text('on the top of Sentinel Dome. Under the light of a full moon the vast landscape is breathtaking.',-350,420-40)
    text('Its granite cliffs glow in the silvery light like a moonscape.',-200,440-40)  

    let c = createA('project 3_page3.html', '>')
    c.position(width-50,height/2-25);
    c.style('font-size', '50px');
    c.style('color', '#ffffff');

    let b = createA('project 3_page1.html', '<')
    b.position(50,height/2-25);
    b.style('font-size', '50px');
    b.style('color', '#ffffff');
}



