let video;
let poseNet;
let poses = [];
let variable;

function setup() {
  createCanvas(640, 640);
  video = createCapture(VIDEO);
  video.size(width, 480);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  variable = select('h1');
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  // image(video, 0, 0, width, height);
  // drawKeypoints();
  changeFontWeight();
}

// A function to draw ellipses over the detected keypoints (for testing)
// function drawKeypoints()  {
//   for (let i = 0; i < poses.length; i++) {
//     let pose = poses[i].pose;
//     for (let j = 0; j < pose.keypoints.length; j++) {
//       let keypoint = pose.keypoints[j];
      
//       if (keypoint.score > 0.2) {
//         fill(255, 0, 0);
//         noStroke();
//         ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        
//       }
      
//     }
//   }
// }

function changeFontWeight() {

  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    let nosePosition = pose.keypoints[0];
        
    let nosePositionValueX= nosePosition.position.x
    variable.style('font-weight', 300+nosePosition.position.x);
    
  }
}