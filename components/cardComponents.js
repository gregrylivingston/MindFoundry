function HCardFooter(card){
    return `
    <div class="card-footer">
      <div class="card-footer-left"></div>
      <div class="card-footer-right">
      <button class="little-button">+ React</button><button class="little-button">+ Favorite</button>
          <button class="little-button">+ React</button><button class="little-button">+ Award</button>
          <button class="little-button">+ Share</button><button class="little-button">...</button>
      </div>
    </div>`
  }
  function HCardHeader(card){
    let headerDetails = "";
    let subtitle = "";
    if ( card.type == "Challenge" || card.type == "Event"){
         headerDetails= ` <div class="" style="width:18%;display:inline-block;text-align:left">${card.badge.replace("_"," ")}</div>
           <div class="" style="width:60%;display:inline-block;text-align:center">${card.brains}</div>
           <div class="" style="width:18%;display:inline-block;text-align:right;">${card.branch.replace("_"," ").replace("_"," ")}</div>
           `;
          (card.type == "Challenge")?subtitle=`<div class="card-subtitle">Incomplete</div>`:'';
     } else if (card.type == "Character"){
       subtitle= `<div class="card-subtitle">
               <div style="font-size:.7em;padding-top:.3em;">
               Lvl 0
               <div class="progressBar-outer playerStyles" style="width:50%;">
                 <div class="progressBar-inner" ></div>
               </div>
               0 / 10 L
               </div>
               </div>`;
      }
       return  `<div class="card-header">
          ${card.badgeImg}

      <div class="card-title-group">
        <div class="card-title">${card.title}</div>
         ${subtitle}
      </div>
          ${card.branchImg}
          ${headerDetails}
    </div>

    `

  }

            function HCardBadgesByCharacter(card){
              let mychar =  data["Character"].filter(x=>x[0] == card.title)[0];

            //looks right in the console, still need to construct new html out of it....

/*            Object.keys(myBadges).forEach(bad=>{
                Object.keys
            })
*/
        return `
        <div class="card-section playerStyles">
          <div>
            <h3>Badges</h3>
          </div>
          <div>${badgeHolder}</div>
        </div>

        `

    }


    function   HCardOwnerWidget(card){
        return `<div class="card-description">

        <div style="font-size:1.65em;">My Great Monologue</div>
              <div>
                  <button class="little-button">3 <img src='img/menu/menu_geniusshop.png' height='32px'> | :) | Emoticons</button>

                  <div class="playerWidget" onclick="loadMenu('mmenu')" style="width:10em !important;">
                              <img class="playerWidget-image" src="img/avatar/avatar_cuteawil.png">
                              <div class="playerWidget-name" style="font-size:.75em;width:80%">Spellbound on 09/27/21</div>
                  </div>
              </div>`
      }

      function HCardDescription(card){
        return `<div class="card-section playerStyles">

          <p>${card["Description"]}</p>
        </div>`
      }

      function HCardShowcaseWidget(card){
          return`          <div class="card-section playerStyles" style="vertical-align:top;height:14em;">
                                <div style="width:50%;border-right:2px solid white;display:inline-block;height:14em;vertical-align:top;">
                                    <div style="width:100%;height:45%;border-bottom:1px black solid">Showcase Item 1</div>
                                    <div style="width:50%;height:41%;display:inline-block;border-right:1px black solid;">Showcase Item 2</div>
                                    <div style="width:47%;height:41%;display:inline-block;border-left:1px black solid;">Showcase Item 3</div>
                                    <div style="width:100%;height:15%;text-align:center;">Showcase</div>

                                </div>
                                <div style="width:45%;display:inline-block;">
                                  Club Leaderboard<br>
                                  <img src="img/Club/korora.png" width="80%;"><br>
                                  Korora
                                </div>
                              </div>`;
        }
