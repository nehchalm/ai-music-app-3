song = "";
song1 = "";
leftWristX = "0";
leftWristY = "0";
rightWristX = "0";
rightWristY = "0";
scoreLeftWrist = "0";
status = "";


function preload()
{
    song = loadSound("song.mp3");
    song1 = loadSound("song1.mp3");
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = "+ rightWristY);
    }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 500, 500);

    song1_status=song.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(score_left_wrist>0.2)
{
    circle(leftx, lefty, 20);
    song2.stop();

    if(song1_status==false) {
        song.isPlaying();
        document.getElementById("song_name").innerHTML="Playing= Peter Pan Song";
    }
}

}

