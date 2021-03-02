////Variables

var i =0;
var images = [];
var time = 4000;

///Images List
images[0] = './images/macro.jpg';
images[1] = './images/wildlife.jpg';
images[2] = './images/fern.jpg';


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


