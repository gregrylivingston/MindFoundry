

function widget_showcase(filterKey, filterValue){

                let myKey = data["ShowcaseKey"].indexOf(filterKey);
                var imgSources = data["Showcase"].filter(x=>x[myKey]==filterValue);
                let html=``;
                let htmlAppend="";
                html+='';

                if (  imgSources[0] !== undefined ){
                  html+=`
                        <div class="card-section">
                          <h3 style="text-align:left;">
                            Latest ${filterValue} Showcase
                            <a style="font-size:.6em;" onclick="loadMenu('Showcase')">See All</a>
                          </h3>
                        </div>
                        <div class="card-section playerStyles">
                        `;
                  html+=addMediaPreview(imgSources[0]);
                          htmlAppend=
                          `
                        </div>
                          `;
                } else {
                  if ( filterValue == data["Player"][0][0] || filterKey !== "Player")html+=addShowcaseButton();
                }
                if ( imgSources[1] !== undefined){
                    html+='</div><div class="card-section playerStyles">';
                    html+=addMediaPreview(imgSources[1]);

                  }
                html+=htmlAppend;

                return html
}


function addMediaPreview(mediaItem){

  let img1 = mediaItem[data["ShowcaseKey"].indexOf("src")];
  let img1Title = mediaItem[data["ShowcaseKey"].indexOf("title")];
  let img1Chal = mediaItem[data["ShowcaseKey"].indexOf("Challenge")];
  return `
                <div>
                  <div style="font-size:1.2em;">${img1Title}</div>
                  <div style="font-size:0.8em"><a href="">${img1Chal}</a></div>

                </div>
                <div>
                  <img src="${img1}" style="max-width:100%;object-fit:cover;">
                </div>
                <div style="text-align:center;width:100%;">
                ${widget_playerByName(mediaItem[data["ShowcaseKey"].indexOf("Player")])}
                </div>

`
}

function addShowcaseButton(){
return ''
/*`
  <div class="layer2">
    <p>Empty Showcase</p>
  </div>
  <div class="media">
        This showcase is currently empty.  Be the first to respond to the challenge.
    <div class="bottom-layer2">
      <p></p>
    </div>
  </div>
`*/
}
