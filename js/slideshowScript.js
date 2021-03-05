////Variables

var i =0;
var images = [];
var time = 4000;

///Images List
images[0] = './images/macro.jpg';
images[1] = './images/wildlife.jpg';
images[2] = './images/fern.jpg';
images[3] = './images/wildlife/ANN_6361.jpg';
images[4] = './images/landscape/ANN_5649.jpg';
images[5] = './images/landscape/ANN_6309.jpg';
images[6] = './images/landscape/ANN_6323.jpg';
images[7] = './images/landscape/ANN_6235.jpg';
images[8] = './images/landscape/ANN_6730.jpg';
images[9] = './images/landscape/ANN_6889.jpg';
images[10] = './images/water/_ANN0654.jpg';
images[11] = './images/water/ANN_5176.jpg';
images[12] = './images/macro/_ANN1939.jpg';
images[13] = './images/landscape/ANN_5532.jpg';
images[14] = './images/macro/_ANN5684_2926.jpg';


i = images.length


//Next Image

function nextImage(){
  if(i<images.length) {
    i = i+1;
  } else {
    i = 1;
  }
  document.slide.src = images[i -1];
}

//Previous Image

function previousImage() {
  if(i<images.length + 1 && i>1){
    i = i - 1;
  } else {
    i = images.length;
  }
  document.slide.src = images[i -1];
}

////Change Images Automatically

setInterval(nextImage, time);


////Display Images Automatically
window.onload = nextImage();



////Change Images Automatically

// function changeImg (){
//   document.slide.src = images[i];

//   if (i < images.length - 1){
//     i++;
//   } else {
//     i = 0
//   }
//   setTimeout('changeImg()', time);
// }


