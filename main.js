function preload(){

}

function setup(){
 canvas=createCanvas(300,300)
 canvas.center();
 vedeo=createCapture(VIDEO)
 vedeo.size(300,300)
 vedeo.hide()
 poseNet=ml5.poseNet(vedeo,model_oaded)
 poseNet.on("pose",got_results)
}
function model_oaded(){
    console.log("model loadded")
}
function got_results(results){
if(results.length>0){
console.log(results)
}

}
function draw(){
    image(vedeo,0,0,300,300)
}
function take_snapshot(){
    save("mustache_filter.png")
}