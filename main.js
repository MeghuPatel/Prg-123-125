noseX = 0;
noseY = 0;
difference = 0
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(450,450);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function draw()
{
    background('#87CEEB');
    textsize(difference);
    fill("#00008B");
    text('Megh', 50, 400);
}

function gotPoses()
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        difference = floor(leftWristX - rightWristX);
    }
}