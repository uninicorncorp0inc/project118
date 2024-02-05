function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    } 

function clearCanvas(){
    background("white");
}
function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
    strokeWeight(8);
    stroke("purple");

    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
