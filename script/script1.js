document.addEventListener("DOMContentLoaded", function(event) { 
    
    let arrow = document.getElementById('arrow');
    let logo = document.getElementById('canvas1');
    let topBar = document.getElementById('topBar');
    let logoTxt = document.getElementById('logoTxt');
    let logoBig = true;
    let curScroll = window.scrollY;
    window.addEventListener("resize", Resize);

    if (curScroll > 0){
        logoBig = false;
        gsap.to(logoTxt, {duration:0.5, y: 200, ease:Power1.easeIn})
        gsap.to(arrow, {duration:1, alpha: 0});
        gsap.to(topBar, {duration:1, y: 80, ease:Power1.easeOut});
        logoSmall();
    }

    window.onscroll = function() {
        console.log(window.scrollY, logoBig);
        if (window.scrollY > 0 && logoBig == true) {
           logoBig = false;
           gsap.to(logo, {duration:0.8, y: -500, ease:Elastic.easeIn.config(1.1, 0.8), onComplete:logoSmall})
           gsap.to(logoTxt, {duration:0.5, y: 50, alpha: 0, ease:Power1.easeIn})
           gsap.to(arrow, {duration:1, alpha: 0});
           gsap.to(topBar, {duration:1, y: 80, ease:Power1.easeOut});
        }
        else if(window.scrollY == 0 && logoBig == false){
            console.log("in");
            logoBig = true;
            gsap.to(logo, {duration:2, y: "0%",scale: 1, left:"50%", ease: Elastic.easeOut.config(1, 0.7) });
            gsap.to(logoTxt, {delay:0.5, duration:1,alpha:1, y: 0, ease:Power3.easeOut})
            gsap.to(arrow, {duration:1, alpha: 1});
            gsap.to(topBar, {duration:1, y: 0, ease:Power1.easeIn});
        }
    };

    function logoSmall(){
        gsap.set(logo, {clearProps: "left, scale"})
        if (window.innerWidth < 600) {
            console.log("<600");
            gsap.set(logo, { scale:0.4, y:"-55%",left:"25%", zIndex:50})
        }
        else if (window.innerWidth < 800){
            console.log("<800");
            gsap.set(logo, { scale:0.3, y:"-55%",left:"15%", zIndex:50})
        }
        else if (window.innerWidth < 1200){
            console.log("<1200");
            gsap.set(logo, { scale:0.2, y:"-55%",left:"10%", zIndex:50})
        }else{
            console.log("else");
            gsap.set(logo, { scale:0.15, y:"-55%",left:"8%", zIndex:50})
        }
      setSmallLogo();
    }
    function setSmallLogo(){
         
        if (window.innerWidth < 600) {
            console.log("<600");
            gsap.to(logo, {duration:1, scale:0.4, y:"-37%",left:"25%", zIndex:50, ease: Elastic.easeOut.config(1.05, 0.8), })
        }
        else if (window.innerWidth < 800){
            console.log("<800");
            gsap.to(logo, {duration:1, scale:0.3, y:"-42%",left:"15%", zIndex:50, ease: Elastic.easeOut.config(1.05, 0.8), })
        }
        else if (window.innerWidth < 1200){
            console.log("<1200");
            gsap.to(logo, {duration:1, scale:0.2, y:"-45%",left:"10%", zIndex:50, ease: Elastic.easeOut.config(1.05, 0.8), })
        }else{
            console.log("else");
            gsap.to(logo, {duration:1, scale:0.15, y:"-46%",left:"8%", zIndex:50, ease: Elastic.easeOut.config(1.05, 0.8), })
        }
    }
    function Resize(){
        if (logoBig == false) {
          setSmallLogo();  
        } 
        else{
            gsap.to(logo, {duration:2, y: "0%",scale: 1, left:"50%", ease: Elastic.easeOut.config(1.2, 0.5), });
        }
    }

  });