let video;
let poseNet;
let poses = [];

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
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  // image(video, 0, 0, width, height);
  // drawKeypoints();
  changeColor();
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

function changeColor() {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
  let nosePosition = pose.keypoints[0];
        let rightHand = pose.keypoints[10];
        
        console.log(nosePosition.position.x)
        if (nosePosition.position.x < 320) {
          // ellipse(200,200,200,200)
          // fill(255,0,0)
          background('#FD3FEA');
        } else {
          // ellipse(200,200,200,200)
          // fill(0,255,0)
          background('#FD613F');
        }
  }
}