

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
                <div style="width:100%;vertical-align:top;">
                  <div style="display:inline-block;width:58%;">
                      <div style="font-size:1.2em;">${img1Title}</div>
                      <div style="font-size:0.8em"><a href="">${img1Chal}</a></div>
                  </div>
                  <div style="display:inline-block;width:40%;text-align:right;vertical-align:top;height:100%;">
                    <button class="menuButton playerStylesButton" style="font-size:1.5em;width:45%;">
                      4
                      <img class="menuButton-image" src="img/menu/react.png">

                    </button>
                    <button class="menuButton playerStylesButton"  style="font-size:1.5em;width:45%;">
                      2
                      <img class="menuButton-image" src="img/menu/award.png">
                    </button>
                  </div>
                </div>
                <div>
                  <img src="${img1}" style="width:100%;object-fit:fill;">
                </div>
                <div style="text-align:center;width:100%;" class="playerStylesButton">
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
