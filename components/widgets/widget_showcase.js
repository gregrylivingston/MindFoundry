

function widget_showcase(filterKey, filterValue){
                let myKey = data["ShowcaseKey"].indexOf(filterKey);
                var imgSources = data["Showcase"].filter(x=>x[myKey]==filterValue);
                let html="";
                let htmlAppend="";
                html+='<div class="card-section">';

                if (  imgSources[0] !== undefined ){
                  html+=addMediaPreview(imgSources[0]);
                          htmlAppend=
                          `<button class="selectButton playerStylesButton" onclick="loadMenu('Showcase')">
                            ${this.title}'s Showcase</button>
                          `;
                } else {
                  if ( filterValue == data["Player"][0][0] )html+=addShowcaseButton();
                }
                if ( imgSources[2] !== undefined){
                    html+='<div class="card-section"><div style="width:49%;display:inline-block;">';
                    html+=addMediaPreview(imgSources[1]);
                    html+='<div style="width:49%;display:inline-block;">';
                    html+=addMediaPreview(imgSources[2]);
                    html+='</div>'
                  }
                html+=htmlAppend;

                return html
}


function addMediaPreview(mediaItem){

  let img1 = mediaItem[data["ShowcaseKey"].indexOf("src")];
  let img1Title = mediaItem[data["ShowcaseKey"].indexOf("title")];
  let img1Chal = mediaItem[data["ShowcaseKey"].indexOf("Challenge")];
  return `
                <div class="layer2">
                  <p>${img1Title}</p>
                </div>
                <div class="media">


                  <img src="${img1}" style="max-width:100%;object-fit:cover;">
                  <div class="bottom-layer2">
                  </div>
                </div>
                <p>${img1Chal}</p>

            </div>
`
}

function addShowcaseButton(){
return ` <div class="layer2">
    <p></p>
  </div>
  <div class="media">

        +
        Add a showcase to your player card from your completed challenges.
    <div class="bottom-layer2">
      <p></p>
    </div>
  </div>
</div>`
}
