var lastScrollTop = 0;
var st = window.pageYOffset || document.documentElement.scrollTop;
var windowWidth;
var logoBig = true;
var vid;

$(document).ready(function() {  
window.scrollTo(0, 0);
var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

document.addEventListener('DOMContentLoaded', function() {
   
        window.addEventListener("resize", Resize);
        readyListeners();
}, false);

function readyListeners(){
    TweenMax.to("#logoBgr", 1, { scaleX:4,scaleY:4, autoAlpha:"1", ease:Power3.easeOut}); 
    console.log("alpha");
    TweenMax.from("#share", 2, {top:-100,alpha:0, ease: Elastic.easeOut.config(1, 0.3)});
    window.addEventListener('scroll',Scroll, false);
}
function Resize() {
    if (logoBig == false){
   resizeLogо();
    }
    
}
function Scroll() {
  
   st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
       if (logoBig == true){
       console.log("goSmall");
       TweenMax.set("#canvas1", {zIndex:4});
       TweenMax.to("#canvas1", 0.5, {y:"-80%",   ease:Power3.easeIn, onComplete: smallOver});     
       TweenMax.to("#arrow", 0.2, {   autoAlpha:"0", ease:Power3.easeOut});
       TweenMax.to("#logoBgr", 1, {    scaleX:2,scaleY:2,  autoAlpha:"0.7", ease:Power3.easeOut}); 
       TweenMax.to('.fixed-top', 0.5, {marginTop:"0px", ease:Power3.easeOut});
       TweenMax.to('.nav-link1', 1, {color:"#354355", ease:Power3.easeOut});
       TweenMax.to(".text-container", 1, {  y:+250, ease:Power3.easeOut});    
       logoBig = false;        
       }

   } 
  else  if  (st < 300 ){
      if(logoBig == false){
        console.log("goBig");
       TweenMax.to("#arrow", 1, {   autoAlpha:"1", ease:Power3.easeOut}); 
       TweenMax.to("#logoBgr", 3, {  scaleX:4,scaleY:4,autoAlpha:"1", ease:Power3.easeOut}); 
        TweenMax.to('.nav-link1', 1, {color:"#FFFFFF", ease:Power3.easeOut});
       TweenMax.to('.fixed-top', 0.5, {marginTop:"-80px", ease:Power3.easeOut});
        TweenMax.to(".text-container", 2, { delay:0.5, y:0, ease: Elastic.easeOut.config(0.8, 0.8)});
        logoBig = true;
        TweenMax.to("#canvas1", 2, {yPercent:-50, xPercent:-50, x:"-50%", y:"0%", scale:1,   ease: Elastic.easeOut.config(0.8, 0.5), clearProps:"xPercent, yPercent"});      
      }      
    }
   lastScrollTop = st <= 0 ? 0 : st; 
    
    
    
  if (document.getElementById("video-row").getBoundingClientRect().top == 80){
      document.getElementById('logoBgr').style.display="none"; 
      }  
    else if (document.getElementById("video-row").getBoundingClientRect().top > 80){     
      document.getElementById('logoBgr').style.display="";             
    }
    
  if (document.getElementById("servicesRow").getBoundingClientRect().top < 80){
      document.getElementById('video-row').style.display="none"; 
      }  
    else if (document.getElementById("servicesRow").getBoundingClientRect().top > 80){     
      document.getElementById('video-row').style.display="";             
    }
    
    
      console.log(document.getElementById("servicesRow").getBoundingClientRect().top);  
    
    
}
function smallOver(){
    //window.addEventListener('scroll',Scroll, false);
    
        if (window.innerWidth <=400){
       TweenMax.set("#canvas1", {yPercent:-50, xPercent:-50, x:"-70%", scale:0.5, zIndex:51});        
            }
            if (window.innerWidth >400){
       TweenMax.set("#canvas1", {yPercent:-50,  xPercent:-50, x:"-80%", scale:0.4, zIndex:51});
            }
            if (window.innerWidth >600){
       TweenMax.set("#canvas1", {yPercent:-50,  xPercent:-50, x:"-80%", scale:0.3, zIndex:51});
            }
            if (window.innerWidth >1000){
       TweenMax.set("#canvas1", {yPercent:-50, xPercent:-50, x:"-88%", scale:0.2, zIndex:51});      
           }
           if (window.innerWidth >1800){
       TweenMax.set("#canvas1", {yPercent:-50,  xPercent:-50, x:"-108%", scale:0.2, zIndex:51});  
    }
    
    TweenMax.to("#canvas1", 2, {y:"40", ease: Elastic.easeOut.config(0.5, 0.5)}); 
    
}
function resizeLogо(){
    
     console.log("resize");
            if (window.innerWidth <=400){
       TweenMax.to("#canvas1", 0.5,{yPercent:-50, y:"40", xPercent:-50, x:"-70%", scale:0.5, zIndex:100,  ease:Power3.easeOut});
            }
            if (window.innerWidth >400){
        TweenMax.to("#canvas1", 0.5,{yPercent:-50, y:"40", xPercent:-50, x:"-70%", scale:0.4, zIndex:100,  ease:Power3.easeOut});
            }
            if (window.innerWidth >600){
       TweenMax.to("#canvas1", 0.5,{yPercent:-50, y:"40", xPercent:-50, x:"-80%", scale:0.3, zIndex:100,  ease:Power3.easeOut});
            }
            if (window.innerWidth >1000){
                 console.log("resize");
       TweenMax.to("#canvas1", 0.5,{yPercent:-50, y:"40", xPercent:-50, x:"-88%", scale:0.2, zIndex:100,  ease:Power3.easeOut});      
           }
           if (window.innerWidth >1800){
       TweenMax.to("#canvas1", 0.5,{yPercent:-50, y:"40", xPercent:-50, x:"-108%", scale:0.2, zIndex:100,  ease:Power3.easeOut});  
        }         
}
 function openNav() {
   console.log('nav open');
    TweenMax.to(".overlay", 0.5, {   opacity:"1", ease:Power3.easeOut});
    TweenMax.from(".overlay a", 0.5, {opacity:0, delay: 0.2,  y:'-20px', ease:Power3.easeOut});
}
 function closeNav() {
   console.log('nav close');
     TweenMax.to(".overlay", 0.3, {   opacity:"0", ease:Power3.easeOut});
}

 //var testDiv = document.getElementById("logoBgr");


