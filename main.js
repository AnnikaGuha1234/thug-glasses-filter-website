glassx=0;
glassy=0;
function preload(){
   thugglass=loadImage('https://i.postimg.cc/C5T3VHxr/thug-life-glasses-icon-pixel-goggles-on-isolated-vector-33340893-removebg-preview-1.png');
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center();
    video=createCapture(VIDEO);
    video.size (300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

}
function modelLoaded(){
    console.log('posenet is intialized')
}
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
    save('thugglassimg.png');
}
function gotposes(results){
if (results.length>0){
    console.log(results);
    glassx=results[0].pose.nose.x-50;
    glassy=results[0].pose.nose.y-110;
    console.log("thug glass X = "+ glassx);
    console.log("thug glass Y = "+ glassy);

}
}
function draw(){
    image(video,0,0,350,300);
 
    image(thugglass,glassx,glassy,200,200);
}



