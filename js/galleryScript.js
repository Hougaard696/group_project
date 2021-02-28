
function handleClick(){

  document.addEventListener("click", function displayOverlay (e){
    window.event;
    let target = e.target
    let src = target.getAttribute("src");
    if (e.target.tagName === "IMG") {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay-img").src = src;
      document.removeEventListener("click", displayOverlay);
      
      document.getElementById("overlay-btn").addEventListener("click", function close(){
        document.getElementById("overlay").style.display = "none";
        document.getElementById("overlay-img").src = "#";
        handleClick();
      });
    } 
  });
}
  
handleClick();