status = "";

function preload(){
    
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelloaded(){
    console.log("Model Loaded");
    status = true;
}
function draw(){
    image(video, 0, 0, 600, 500);
}