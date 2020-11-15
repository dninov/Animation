
    var jsonfile3 = "frames/timeline_SnapSVGAnimator.json",fps = 24, width = 300, height = 220, AJAX_req;
  
    AJAX_JSON_Req2(jsonfile3);
    // AJAX_JSON_Req(jsonfile2);

       function AJAX_JSON_Req2( url )
        {
            AJAX_req2 = new XMLHttpRequest();
            AJAX_req2.open("GET", url, true);
            AJAX_req2.setRequestHeader("Content-type", "application/json");
            AJAX_req2.onreadystatechange = handle_AJAX_Complete2;
            AJAX_req2.send();
        }

      function handle_AJAX_Complete2() {
          if( AJAX_req2.readyState == 4 && AJAX_req2.status == 200 )
          {
              json2 = JSON.parse(AJAX_req2.responseText);
              comp2 = new SVGAnim(
                            json2,
                            width,
                            height,
                            fps
                            );
              document.getElementById('animation').appendChild(comp2.s.node); // Add this line of cod
            } 
}