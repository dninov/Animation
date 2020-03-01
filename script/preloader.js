var overlay = document.getElementById("preloader");
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
// document.getElementById('canvas').src = "IntroAnimation.html";
}
else{
//  document.getElementById('canvas').src = "IntroAnimationVector.html";  
//   console.log("desktop");
}
window.addEventListener('load', function(){
 overlay.style.display = "none";
});