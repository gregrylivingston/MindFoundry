


function card_showcase(filterKey, filterValue, myIndex = 0){

                let myKey = data["ShowcaseKey"].indexOf(filterKey);
                var imgSources = data["Showcase"].filter(x=>x[myKey]==filterValue);
                let myTitle = `${filterValue} Showcase`;
                    myTitle += `&nbsp <a style="font-size:.6em;" onclick="loadMenu('Showcase')">See All</a>`;
                let mySubtitle = '';
                let html=`
                      ${widget_header("",myTitle,mySubtitle)}

                    `;
                let htmlAppend="";
                html+='';

                if (  imgSources[myIndex] !== undefined ){
                  html+=`
                        <div class="card playerStylesCard">
                        `;
                  html+=addMediaPreview(imgSources[myIndex]);
                          htmlAppend+=
                          `
                        </div>
                          `;
                } else {
                  //if ( filterValue == data["Player"][0][0] || filterKey !== "Player")html+=addShowcaseButton();
                }
                if ( imgSources[1] !== undefined){
                    html+='</div><div class="card playerStylesCard">';
                    html+=addMediaPreview(imgSources[1]);
                  }
                  if ( imgSources[2] !== undefined){
                      html+='</div><div class="card playerStylesCard">';
                      html+=addMediaPreview(imgSources[2]);
                    }
                    if ( imgSources[3] !== undefined){
                        html+='</div><div class="card playerStylesCard">';
                        html+=addMediaPreview(imgSources[3]);
                      }
                html+=htmlAppend;

                return html
}


function addMediaPreview(mediaItem){

  let img1 = mediaItem[data["ShowcaseKey"].indexOf("src")];
  let img1Title = mediaItem[data["ShowcaseKey"].indexOf("title")];
  let img1Chal = mediaItem[data["ShowcaseKey"].indexOf("Challenge")];
  let img1Desc = mediaItem[data["ShowcaseKey"].indexOf("Description")];
  return `      <h3>Artifact</h3>
                      <h2>${img1Title}</h2>
                      <div style="font-size:0.8em"><a href="">${img1Chal}</a></div>

                <div>
                  <img src="${img1}" style="width:100%;object-fit:fill;">
                </div>

                   ${new widget_footer(
                      [widget_fPin(),widget_fReact(),widget_fAward()],
                      [widget_fShare(),widget_fMenu()]
                    ).html()}

                  <div>
                    ${img1Desc}
                  </div>
                    ${widget_playerByName(mediaItem[data["ShowcaseKey"].indexOf("Player")])}

`
}
