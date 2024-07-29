let catcher, fallingObject;
let score = 0;
let width = 400;
let height = 400;

function setup() {
  createCanvas(width, height);
  background(224, 224, 224);
  catcher = {
    x: 200,
    y: 380,
    width: 100,
    height: 20,
    color: color(95, 158, 160),
  };
  fallingObject = {
    x: random(width),
    y: 0,
    width: 10,
    height: 10,
    color: color(0, 128, 128),
    speed: 6,
  };
}

function draw() {
  background("Lavender"); 

  if (kb.pressing("left")||kb.pressing("d")) { 
  catcher.x -= 4;
  } else if (kb.pressing("right")||kb.pressing("a")) { 
  catcher.x += 4;
  }
  catcher.x = constrain(catcher.x, 0, width - catcher.width);
  fallingObject.y += fallingObject.speed;
  if (
    catcher.x < fallingObject.x + fallingObject.width &&
    catcher.x + catcher.width > fallingObject.x &&
    catcher.y < fallingObject.y + fallingObject.height &&
    catcher.y + catcher.height > fallingObject.y
  ) {
    score++;
    fallingObject.y = 0;
    fallingObject.x = random(width);
  }

  fill(catcher.color);
  rect(catcher.x, catcher.y, catcher.width, catcher.height);
  fill(fallingObject.color);
  rect(fallingObject.x, fallingObject.y, fallingObject.width, fallingObject.height);

  fill(0);
  textSize(12);
  text("Score: " + score, width - 50, 20);

  fill(0);
  textSize(12);
  text("Welcome to Catcher! \nUse your arrows to \ncatch the ball!", width -400, 20);
  if (fallingObject.y > 390) {
      fallingObject.y = 430
      fallingObject.speed = 0;

    fill(0);
    textSize(20);
    text('You lose!', 160, 160); 
  }
}