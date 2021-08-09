
function getHomePage(){
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0;
  document.getElementById("cards").innerHTML =
  `
          <div class="page-section mf-emerald">
            <h1>Spellbound  <img src="img/question-circle.svg" onclick="document.getElementById('tutorial').style.display='';"></h1>

            ${get_cards("title","Spellbound")}

            <div class="card-wrapper" style="border: white solid 2px;border-radius:1.5em;height:35em;overflow-y:scroll;">
              <!-- Important / Events / Inventory / Showcase-->
              <div style="width:98%;display:inline-flex;align-items:center;justify-content:space-between;">
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%">
                   <img src="img/exclamation-lg.svg">
                   <div class="tooltiptext">Notifications</div>
                  </button>
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%">
                    <img src="img/calendar.svg">
                    <div class="tooltiptext">Events</div>
                  </button>
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%">
                    <img src="img/columns-gap.svg">
                    <div class="tooltiptext">Inventory</div>
                  </button>
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%">
                    <img src="img/collection-play.svg">
                    <div class="tooltiptext">Showcase</div>
                  </button>
                </div>
              <div style="width:96%;margin-top:1em;">
                    ${getNoticeRow("img/info/profile-card.png",
                        `2021 New Player Bonus Pack
                      `, "openDeck('New Player Starter Pack')"
                      )}
                    ${getNoticeRow("img/avatar/avatar_tinkerawil.png",
                          `Friend request from Gregry
                          `, "openDeck('Gregry')"
                    )}
                    ${getNoticeRow("img/coin.png",
                    `Login Streak Bonus - 1 Day - 1 Coin`
                  )}
                    ${getNoticeRow("img/info/profile-card.png",'Minecraft Creative League. Mondays and Wednesday at 2pm.')}
                    ${getNoticeRow("img/token_league.png",'You have a League Unlimited Pass.',"openDeck('1 Month League Unlimited Pass')")}
                    ${getNoticeRow("img/token_tourney.png",'You have a Tourney Unlimited Pass.',"openDeck('1 Month Tourney Unlimited Pass')")}

              </div>
            </div>
          </div>

          <div class="page-section mf-purple1">
            <h1>Social</h1>
            ${get_cards("title","Friends")}
            ${get_cards("title","Korora")}
            ${get_cards("title","Join A Club")}
            ${get_cards("title","YoungerPetr")}
          </div>
          <div class="page-section mf-yellow">
               <h1>Rewards</h1>
               ${get_cards("title","Rewards")}
          </div>
          <div class="page-section mf-orange">
               <h1>Create</h1>
               ${get_cards("title","Create")}
          </div>
          <div class="page-section mf-blue2">
               <h1>Collaborate</h1>
               ${get_cards("title","Collaborate")}
          </div>
          <div class="page-section mf-purple">
               <h1>Compete</h1>
               ${get_cards("title","Compete")}
          </div>
          <div class="page-section mf-yellow">
               <h1>Share</h1>
               ${get_cards("title","Share")}
          </div>
        `;
        activateCards();
}



function getNoticeRow(img,text,action){
    return `
    <div class="notice-row highlight" >
        <div class="" style="width:12%;height:4em;" onclick="${action}">
          <img style="height:4em" src="${img}">
        </div>
        <div class="" style="width:58%;font-size:1.1em;padding:.5em;" onclick="${action}">
        ${text}
        </div>
        <div style="width:20%;">
           <button class="half-button playerStylesButton" onclick="${action}">
               <img src="img/check2-circle.svg">
          </button>
           <button class="half-button playerStylesButton" style="z-index:100;" onclick="this.parentElement.parentElement.remove()">
              <img src="img/x-circle.svg">
          </button>
        </div>
    </div>`


}
