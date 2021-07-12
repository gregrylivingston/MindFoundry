


  var badgeHolder = "";

            function HCardBadgesByCharacter(card){
              let mychar =  data["Character"].filter(x=>x[0] == card.title)[0];
              badgeHolder = "<div style='display:inline-block'>";

              let myBadges = data["Badge"].filter(x=>x[1] == card.title);

              myBadges.forEach(bad=>{
                badgeHolder+= `
                  <button class="half-button playerStyles">
                    <img height="32px" src="img/Badge/${bad[0]}2.png">
                    <div style="text-align:left;">
                      ${bad[0].replace("_"," ").replace("_"," ")}<br>
                      Level
                    </div>
                  </button>

                `;
              })
              myBadges+="<div>";
            //looks right in the console, still need to construct new html out of it....

/*            Object.keys(myBadges).forEach(bad=>{
                Object.keys
            })
*/
        return `
          <div class="card-section">
            <div>Badges</div>

            <div>${badgeHolder}</div>
          </div>
        `

    }
