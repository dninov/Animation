
    
    var jsonfile2 = "frames/interactive_SnapSVGAnimator.json",fps = 24, width = 300, height = 220, AJAX_req;
    AJAX_JSON_Req(jsonfile2);

      function AJAX_JSON_Req( url )
        {
            AJAX_req1 = new XMLHttpRequest();
            AJAX_req1.open("GET", url, true);
            AJAX_req1.setRequestHeader("Content-type", "application/json");
            AJAX_req1.onreadystatechange = handle_AJAX_Complete;
            AJAX_req1.send();
        }

      function handle_AJAX_Complete() {
          console.log("complete");
          if( AJAX_req1.readyState == 4 && AJAX_req1.status == 200 )
          {
              json = JSON.parse(AJAX_req1.responseText);
              comp = new SVGAnim(
                            json,
                            width,
                            height,
                            fps
                            );
              document.getElementById('interactive').appendChild(comp.s.node); // Add this line of cod
            }        
}