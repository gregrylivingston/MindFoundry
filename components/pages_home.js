
function getHomePage(){
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0;
  document.getElementById("cards").innerHTML =
  `
          <div class="page-section mf-yellow">
            <h1>Profile</h1>
            ${get_cards("title","Spellbound")}

            <div class="card-wrapper" style="border: white solid 2px;border-radius:1.5em;">
              <h1 style="display:inline-block;width:30%;">Notifications</h1>
              <button class="topnav-button highlight">
                20 <img src="img/coin.png" style="height:1em;">
              </button>
              <button class="topnav-button highlight">
                Friends
              </button>
              <button class="topnav-button highlight">
                Club
              </button>
              <div style="width:100%">
                    ${getNoticeRow("img/info/profile-card.png",'New Player Card Pack.')}
                    ${getNoticeRow("img/info/profile-card.png",'2021 Bonus Pack')}
                    ${getNoticeRow("img/avatar/avatar_tinkerawil.png",'Friend request from Gregry')}

              </div>
            </div>

            <div class="card-wrapper" style="border: white solid 2px;border-radius:1.5em;">
              <h1 style="display:inline-block;">Events</h1>
                <button class="topnav-button highlight">
                  My Events
                </button>
                <button class="topnav-button highlight">
                  1-Time
                </button>
                <button class="topnav-button highlight">
                  Ongoing
                </button>
              <div style="width:100%">
                    ${getNoticeRow("img/info/profile-card.png",'Minecraft Creative League. Mondays and Wednesday at 2pm.')}
                    ${getNoticeRow("img/token_tourney.png",'You have an Tourney League Token.  See whats coming up here.')}
                    ${getNoticeRow("img/token_league.png",'You have an unlimited League Token.  See whats coming up here.')}

              </div>
            </div>
          </div>

          <div class="page-section mf-purple1">
            <h1>Social</h1>
            ${get_cards("title","Friends")}
            ${get_cards("title","Korora")}
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
          <div class="page-section mf-purple">
               <h1>Share</h1>
               ${get_cards("title","Share")}
          </div>
        `;
        activateCards();
}



function getNoticeRow(img,text){
    return `
    <div class="notice-row">
        <div class="" style="width:20%;height:4em;">
          <img style="height:4em" src="${img}">
        </div>
        <div class="highlight playerStyles" style="width:65%;height:4em;padding:.5em;">
        ${text}
        </div>
    </div>`


}
