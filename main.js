img = "";
status = "";
object = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded !!!");
    status = true;
    
}
function gotResult(error,results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        object = results;
    }

}

function draw(){
    image(video, 0, 0, 380, 380);

    r = random(255);
    g = random(255);
    b = random(255);

    if (status != "")
    {
        objectDetection.detect(video , gotResult);

        for(i = 0; i < object.length; i++);
        document.getElementById("status").innerHTML = "Status = Object Detected";
        document.getElementById("objects").innerHTML = "Number of Objects Detected = " + objects.length;
        fill(r,g,b);
        percent = floor(object[i].confidence * 100);
        
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y , objects[i].width, objects[i].height);
    }

 



    stroke("red");
    noFill();
   /*
    rect(100,50,200,350);
    fill("white");
    text("DOG", 115 , 75 );

    noFill();
    rect(305,50,300,350);
    fill("white");
    text("CAT", 325,75);
    
    noFill();
    rect(275,310,120,100);
    fill("blue");
    stroke("black");
    text("BOWL" , 290, 330);
    
*/}

