
  function HCardHeader(card){
    let headerDetails = "";
    let subtitle = "";

    switch (card.type){
      case "Challenge":
                subtitle= `<div class="card-subtitle">
                        <div style="font-size:.7em;padding-top:.3em;">
                            Skill - - - -<br>
                            Effort - - -
                        </div>
                        </div>`;
                break
      case "Event":
              subtitle= `<div class="card-subtitle">
                      <div style="font-size:.7em;padding-top:.3em;">
                          Grades 3-5<br>

                      </div>
                      </div>`;

                break
      case "Character":
              subtitle= `<div class="card-subtitle">
                      <div style="font-size:.7em;padding-top:.3em;">
                      Lvl 0
                      <div class="progressBar-outer playerStyles" style="width:50%;">
                        <div class="progressBar-inner" ></div>
                      </div>
                      0 / 10 L
                      </div>
                      </div>`;
              break
      default:

    }

       return  `<div class="card-header">
          ${card.badgeImg}

      <div class="card-title-group">
        <div class="card-title">${card.title}         ${subtitle}</div>
      </div>
        <!--  ${card.branchImg}-->
    </div>

    `

  }


  var badgeHolder = "";

            function HCardBadgesByCharacter(card){
              let mychar =  data["Character"].filter(x=>x[0] == card.title)[0];
              badgeHolder = "<div style='display:inline-block'>";

              let myBadges = data["Badge"].filter(x=>x[1] == card.title);

              myBadges.forEach(bad=>{
                badgeHolder+= `
                  <button class="half-button playerStyles">
                    <img height="32px" src="img/Badge/${bad[0]}2.png">
                    ${bad[0]}
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
          <div>
            <h3>Badges</h3>
          </div>
          <div>${badgeHolder}</div>

        `

    }
