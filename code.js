var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["429df13e-5d6f-4922-b820-db99e1a1616d","73ffb534-f858-4c5e-ad6d-89d41b2e2013","359c5259-335f-4241-b449-f18a3ceeb6ad","88eeb22c-b227-43d1-abe9-0462a37a2eef","d6765be4-8625-410b-b052-78381cf7305b","136c9252-d667-4df0-8028-d4b8139bd2c7","b33fcfb5-2733-465f-b3d1-299a42ef2afb"],"propsByKey":{"429df13e-5d6f-4922-b820-db99e1a1616d":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"73ffb534-f858-4c5e-ad6d-89d41b2e2013":{"name":"striker","sourceUrl":"assets/v3/animations/wJPp2bzgSnAkfUp7P8KvbYYUKPx8nEa2r93nPCxTbWY/73ffb534-f858-4c5e-ad6d-89d41b2e2013.png","frameSize":{"x":91,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"0iZxZMBxl40W7RfJ6U44WueruWVofPyP","loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":91},"rootRelativePath":"assets/v3/animations/wJPp2bzgSnAkfUp7P8KvbYYUKPx8nEa2r93nPCxTbWY/73ffb534-f858-4c5e-ad6d-89d41b2e2013.png"},"359c5259-335f-4241-b449-f18a3ceeb6ad":{"name":"puck","sourceUrl":"assets/v3/animations/wJPp2bzgSnAkfUp7P8KvbYYUKPx8nEa2r93nPCxTbWY/359c5259-335f-4241-b449-f18a3ceeb6ad.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"4TMU1rvAIwJnbmVc9h8AeTAbc0Br7bYV","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/wJPp2bzgSnAkfUp7P8KvbYYUKPx8nEa2r93nPCxTbWY/359c5259-335f-4241-b449-f18a3ceeb6ad.png"},"88eeb22c-b227-43d1-abe9-0462a37a2eef":{"name":"abc","sourceUrl":null,"frameSize":{"x":771,"y":324},"frameCount":1,"looping":true,"frameDelay":12,"version":"niTtKbRTNK1dRjqoj949Kqkdd_gZMHbk","loadedFromSource":true,"saved":true,"sourceSize":{"x":771,"y":324},"rootRelativePath":"assets/88eeb22c-b227-43d1-abe9-0462a37a2eef.png"},"d6765be4-8625-410b-b052-78381cf7305b":{"name":"acb","sourceUrl":null,"frameSize":{"x":771,"y":324},"frameCount":1,"looping":true,"frameDelay":12,"version":"z7ALUQGpn023ga6w15XlPtMuu4Mh7_qq","loadedFromSource":true,"saved":true,"sourceSize":{"x":771,"y":324},"rootRelativePath":"assets/d6765be4-8625-410b-b052-78381cf7305b.png"},"136c9252-d667-4df0-8028-d4b8139bd2c7":{"name":"bca","sourceUrl":null,"frameSize":{"x":771,"y":324},"frameCount":1,"looping":true,"frameDelay":12,"version":"g_q0eaVW5TSbbabnoBKifx3HDjYwQzHa","loadedFromSource":true,"saved":true,"sourceSize":{"x":771,"y":324},"rootRelativePath":"assets/136c9252-d667-4df0-8028-d4b8139bd2c7.png"},"b33fcfb5-2733-465f-b3d1-299a42ef2afb":{"name":"bac","sourceUrl":null,"frameSize":{"x":771,"y":324},"frameCount":1,"looping":true,"frameDelay":12,"version":"WTlAmgQ6cSnPI_g9383mM6vpcUBE461A","loadedFromSource":true,"saved":true,"sourceSize":{"x":771,"y":324},"rootRelativePath":"assets/b33fcfb5-2733-465f-b3d1-299a42ef2afb.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Outside Walls 
var wall_1 = createSprite(10,200,20,330);
var wall_2 = createSprite(390,200,20,330);
var wall_3 = createSprite(200,10,330,20);
var wall_4 = createSprite(200,390,330,20);

//Inside Marker Lines
var wall_1a = createSprite(50,200,10,250);
var wall_2a= createSprite(350,200,10,250);
var wall_3a = createSprite(200,50,250,10);
var wall_4a = createSprite(200,350,240,10);

var abc = createSprite(90,350,50,50);
abc.setAnimation("abc");
abc.scale = 0.6;

var acb = createSprite(336,335,50,50);
acb.setAnimation("acb");
acb.scale = 0.6;

var bca = createSprite(336,60,50,50);
bca.setAnimation("bca");
bca.scale = 0.6;

var bac = createSprite(65,60,50,50);
bac.setAnimation("bac");
bac.scale = 0.6;

//Striker
var striker = createSprite(200,350,25,25);
striker.setAnimation("striker");
striker.scale = 0.4;

//Pawn
var coin = createSprite(200, 200,15,15);
coin.setAnimation("puck");
coin.scale = 0.4;
coin.setCollider("circle",5,5,20);

textSize(45);

function draw() {
  background(200,200,200);
  
  
//Draw The Pockets
 fill("red");
ellipse(0, 0, 75,75);
ellipse(400, 0, 75,75);
ellipse(0, 400, 75,75);
ellipse(400, 400, 75,75);

//circleCentre
fill("red");
ellipse(200, 200, 100, 100);
fill(200,200,200);
ellipse(200, 200, 80, 80); 
fill("red");
ellipse(200, 200, 20, 20);

//Shooter Points
ellipse(75, 350,15, 15);
ellipse(325, 350,15, 15);
ellipse(50, 330,15, 15);
ellipse(50, 70,15, 15);
ellipse(70, 50,15, 15);
ellipse(330, 50,15, 15);
ellipse(350, 70,15, 15);
ellipse(350, 330,15, 15);
  
//Creating The Ball 
fill(200,200,200);
ellipse(54,350,15, 15);
fill(200,200,200);
ellipse(350, 50,15, 15);
fill(200,200,200);
ellipse(50, 50,15, 15);
fill(200,200,200);
ellipse(349, 351,15, 15);
  
//coin.collide(striker);
//Striker And Coin Bounce Against All Sides
coin.bounceOff(wall_1);
striker.bounceOff(wall_1);
coin.bounceOff(wall_2);
striker.bounceOff(wall_2);
coin.bounceOff(wall_3);
striker.bounceOff(wall_3);
coin.bounceOff(wall_4);
striker.bounceOff(wall_4);
striker.bounceOff(wall_4);
coin.bounciness=0.5;
striker.bounciness=0.05;

//We Control The Striker's ,ovement
  if(keyDown(UP_ARROW)) {
    striker.velocityX = 0;
    striker.velocityY = -6;
  }
  if (keyDown(DOWN_ARROW)) {
    striker.velocityX = 0;
    striker.velocityY = 6;
  }
  if (keyDown(RIGHT_ARROW)){
    striker.velocityX = 6;
    striker.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)){
    striker.velocityX = -6;
    striker.velocityY = 0;
  }
  /*text("Push The Box Outside",150,190);
  fill("yellow");*/
  striker.bounce(coin);
  if (coin.x<0||coin.x>400||coin.y<0||coin.y>400) 
    {
    fill("yellow");
    text("YOU WIN", 110, 120);
    
    fill("yellow");
    text("YOU WIN", 110,320);
    
    }
  /*if (striker.x<0||striker.x>400||striker.y<0||striker.y>400)
    {
      text("You Lose", 175,120);
    }
  */
  
   drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
