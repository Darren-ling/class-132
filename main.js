img="";
status="";

function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("Cat",315,50);
    noFill();
    stroke("#FF0000");
    rect(280,60,300,350);
}

function gotResult(error,results){
    if (error) {
        console.log(error);
    }
    console.log(results);
}