noseX = 0;
noseY = 0;

function preload()
{
    mustache = loadImage('Mustache.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-10;
        console.log("nose X = " + noseX);
        console.log("nose Y = " + noseY);
    }
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 20);
    image(mustache, noseX, noseY, 100, 50);
}

function take_snapshot()
{
    save('My Filter Image.png');
}