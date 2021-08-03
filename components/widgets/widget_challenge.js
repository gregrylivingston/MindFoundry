

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

function widget_progressBar(earned = 0, max = 10){
  return `
        <div class="progressBar-outer playerStyles" style="width:40%;">
          <div class="progressBar-inner" style="width:${earned*10}%"></div>
        </div>
          ${earned} / ${max}
          <img src='img/coin.png' height='32px'>`
}

function widget_resource(resource){
  return `
          <div class="card-section">
            <h3 style="text-align:left;">
              Top Resources
              <a style="font-size:.6em;">More</a>
            </h3>
          </div>
          <div class="card-section playerStyles">

            Link to a resource


            <h1>Branch Resource: ${resource.branch}</h1>
          </div>
      `
}
