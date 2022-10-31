function setup(){
    video = createCapture(VIDEO)
    video.size(540,540);

    canvas = createCanvas(540,450)
    canvas.position(560,119)

    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotposes)
}

function draw(){
    background("pink")
}

function modelLoaded(){
    console.log("modle is loaded")
}

function gotposes(result){
    if (result.length > 0) {
        console.log(result)
    }
}