var Engine = Matter.Engine,
Runner = Matter.Runner,
Body = Matter.Body,
Events = Matter.Events,
Composite = Matter.Composite,
Composites = Matter.Composites,
Common = Matter.Common,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var boxes = [];
var myWorld;
var floor1;
var mConstraint;
var myCanvas;


function setup() {
    myCanvas = createCanvas(1000,1000);
    engine = Engine.create();
    myWorld = engine.World;
    Engine.run(engine);
    var option1 = {
        isStatic: true
    }
    floor1 = Bodies.rectangle(500, height+100, width, 200, option1);
    floor2 = Bodies.rectangle(500, -100, width, 200, option1);
    floor3 = Bodies.rectangle(-100, height/2, 200, height, option1);
    floor4 = Bodies.rectangle(1100, height/2, 200, height, option1);
    World.add(engine.world, [floor1, floor2, floor3, floor4]);

    var canvasMouse = Mouse.create(myCanvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    var options = {
    mouse: canvasMouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(engine.world, mConstraint);
    
    for (var i = 0; i<80; i++) {
        boxes.push(new Box(500, 500, random(5, 70)));
    }
}



function draw() {    
    noStroke();
    let burnt = '#F8FCFF';
    let hottest = '#F95151';
    let hotter = '#F9A055';
    let hot = '#FAC511';
    background(221, 221, 221);
    for (var i = 0; i < boxes.length; i++) {


        boxes[i].show();
        if (boxes[i].body.position.y > 0 && boxes[i].body.position.y < 250) {
            fill(burnt);
        }
    
        if (boxes[i].body.position.y > 250 && boxes[i].body.position.y < 500) {
            fill(hottest);
        }
    
        if (boxes[i].body.position.y > 500 && boxes[i].body.position.y < 750) {
            fill(hotter);
        }
    
        if (boxes[i].body.position.y > 750 && boxes[i].body.position.y < 1000) {
            fill(hot);
        }
        
    }
}