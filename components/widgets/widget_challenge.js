

function widget_level(lvl){
        let myHtml = "<div style='display:inline-flex;width:70%;min-width:3em;max-width:15em;'>";
        for ( var i = 0 ; i < lvl ; i ++ ){
          myHtml+="<div class='playerStyles' style='height:.5em;width:10%;margin-left:5%;background:white;'></div>"
        }
        for ( ; i < 5 ; i ++ ){
          myHtml+="<div class='playerStyles' style='height:.5em;width:10%;margin-left:5%;'></div>"

        }
        myHtml+="</div>"
  return myHtml
}
