function setup(){
    video=createCapture(VIDEO);
    video.size(510,500);

    canvas=createCanvas(510,550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)

noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;


}

function draw(){
    background("#f4c2c2");
    textSize(difference);
    fill('#ADD8E6');
    text('Hi!', noseX, noseY);

}

function modelLoaded(){
    console.log("PoseNet is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        noseX= results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" +noseX+ "noseY="+noseY);

        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX);
        difference= floor (leftWristX-rightWristX);
        console.log(difference);
     
    }
}
    
