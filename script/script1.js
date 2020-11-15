document.addEventListener("DOMContentLoaded", function(event) { 
    
    let arrow = document.getElementById('arrow');
    let logo = document.getElementById('canvas1');
    let topBar = document.getElementById('topBar');
    let logoTxt = document.getElementById('logoTxt');
    let logoBig = true;
    window.addEventListener("resize", Resize);
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: arrow,
            start: "bottom center"
        }
    });
    tl.to(logo, {duration:1.5, y: -500, ease:Elastic.easeIn.config(0.5, 0.3), onComplete:logoSmall})

    // window.onscroll = function() {
    //     if (window.scrollY > 0 && logoBig == true) {
    //        logoBig = false;
    //        gsap.to(logo, {duration:1.5, y: -500, ease:Elastic.easeIn.config(0.5, 0.3), onComplete:logoSmall})
    //        gsap.to(logoTxt, {duration:0.5, y: 200, ease:Power1.easeIn})
    //        gsap.to(arrow, {duration:1, alpha: 0});
    //        gsap.to(topBar, {duration:1, y: 80, ease:Power1.easeOut});
    //     }        
    // };

    function logoSmall(){
      setSmallLogo();
    }
    function setSmallLogo(){
        if (window.innerWidth < 400) {
            console.log("<400");
            gsap.set(logo, { scaleX:0.4, scaleY:0.4, y:"-37%",left:"25%"})
        }
        else {
            gsap.set(logo, { scaleX:0.2, scaleY:0.2, y:"-45%",left:"10%"})
        }
    }
    function Resize(){
        if (logoBig == false) {
          setSmallLogo();  
        } 
    }

  });