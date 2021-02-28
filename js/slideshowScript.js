////Variables

var i =0;
var images = [];
var time = 3000;

///Images List
images[0] = './images/macro.jpg';
images[1] = './images/wildlife.jpg';
images[2] = './images/fern.jpg';

////Change Images

function changeImg (){
  document.slide.src = images[i];

  if (i < images.length - 1){
    i++;
  } else {
    i = 0
  }
  setTimeout('changeImg()', time);
}

window.onload = changeImg;
