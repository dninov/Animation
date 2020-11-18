document.addEventListener("DOMContentLoaded", function(event) { 
    
    let arrow = document.getElementById('arrow');
    let logo = document.getElementById('canvas1');
    let topBar = document.getElementById('topBar');
    let logoTxt = document.getElementById('logoTxt');
    let services = document.getElementById('servicesRow');
    let logoBig = true;
    let curScroll = window.scrollY;
    window.addEventListener("resize", Resize);

    if (curScroll > 0){
        logoBig = false;
        TweenMax.to(logoTxt, 0.5, {y: 200, ease:Power1.easeIn})
        TweenMax.to(arrow, 1,{ alpha: 0});
        TweenMax.to(topBar, 1, { y: 80, ease:Power1.easeOut});
        logoSmall();
    }

    window.onscroll = function() {
        console.log(services.offsetTop - window.scrollY);
        if (window.scrollY > 100 && logoBig == true) {
           logoBig = false;
           TweenMax.to(logo, 0.8,{y:"-55%", ease:Elastic.easeIn.config(1.1, 0.8), onComplete:logoSmall})
           TweenMax.to(logoTxt, 0.5,{y: 50, alpha: 0, ease:Power1.easeIn})
           TweenMax.to(arrow, 1,{ alpha: 0});
           TweenMax.to(topBar, 1,{y: 80, ease:Power1.easeOut});
        }
        else if(window.scrollY == 0 && logoBig == false){
            console.log("in");
            logoBig = true;
            TweenMax.to(logo, 2,{ y: "0%",scale: 1, x:"-50%", ease: Elastic.easeOut.config(1, 0.7) });
            TweenMax.to(logoTxt, 0.5, {delay:0.5, alpha:1, y: 0, ease:Power3.easeOut})
            TweenMax.to(arrow, 1, {alpha: 1});
            TweenMax.to(topBar, 1, {y: 0, ease:Power1.easeIn});
        }
        if (services.offsetTop - window.scrollY < 0) {
            document.getElementById("Video").style.display = "none";
        }
        else{
            document.getElementById("Video").style.display = "";
        }
        
    };

    function logoSmall(){
        TweenMax.set(logo, {clearProps: "x, scale"})
        if (window.innerWidth < 600) {
            console.log("<600");
            TweenMax.set(logo, { scale:0.3, y:"-55%",x:"-80%", zIndex:50})
        }
        else if (window.innerWidth < 800){
            console.log("<800");
            TweenMax.set(logo, { scale:0.3, y:"-55%",x:"-80%", zIndex:50})
        }
        else if (window.innerWidth < 1200){
            console.log("<1200");
            TweenMax.set(logo, { scale:0.2, y:"-55%",x:"-80%", zIndex:50})
        }else{
            console.log("else");
            TweenMax.set(logo, { scale:0.15, y:"-55%",x:"-80%", zIndex:50})
        }
      setSmallLogo();
    }
    function setSmallLogo(){
         
        if (window.innerWidth < 600) {
            console.log("<600");
            TweenMax.to(logo, 1,{scale:0.4, y:"-37%",x:"-80%", zIndex:50, ease: Elastic.easeOut.config(1.05, 0.8), })
        }
        else if (window.innerWidth < 800){
            console.log("<800");
            TweenMax.to(logo, 1,{ scale:0.3, y:"-42%",x:"-80%", zIndex:50, ease: Elastic.easeOut.config(1.05, 0.8), })
        }
        else if (window.innerWidth < 1200){
            console.log("<1200");
            TweenMax.to(logo, 1,{scale:0.2, y:"-45%",x:"-80%", zIndex:50, ease: Elastic.easeOut.config(1.05, 0.8), })
        }else{
            console.log("else");
            TweenMax.to(logo, 1,{scale:0.15, y:"-46%",x:"-80%", zIndex:50, ease: Elastic.easeOut.config(1.05, 0.8), })
        }
    }
    function Resize(){
        if (logoBig == false) {
            console.log("resize logo Small");
          setSmallLogo();  
        } 
        else{
            console.log("resize logo Big");
            TweenMax.set(logo, {clearProps: "left, scale"})
            // TweenMax.to(logo, 2, { y: "0%",scale: 1, left:"50%"});
        }
    }

  });