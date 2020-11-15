
    var jsonfile1 = "frames/res_SnapSVGAnimator.json",fps = 24, width = 300, height = 220, AJAX_req;
  
    AJAX_JSON_Req1(jsonfile1);
    // AJAX_JSON_Req(jsonfile2);

       function AJAX_JSON_Req1( url )
        {
            AJAX_req = new XMLHttpRequest();
            AJAX_req.open("GET", url, true);
            AJAX_req.setRequestHeader("Content-type", "application/json");
            AJAX_req.onreadystatechange = handle_AJAX_Complete1;
            AJAX_req.send();
        }

      function handle_AJAX_Complete1() {
          if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
          {
              json1 = JSON.parse(AJAX_req.responseText);
              comp1 = new SVGAnim(
                            json1,
                            width,
                            height,
                            fps
                            );
              document.getElementById('res').appendChild(comp1.s.node); // Add this line of cod
            } 
}