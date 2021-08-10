
function getHomePage(){
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0;
  document.getElementById("cards").innerHTML =
  `
          <div class="page-section mf-emerald">
            <h1>Spellbound  <img src="img/question-circle.svg" onclick="document.getElementById('tutorial').style.display='';"></h1>

            ${get_cards("title","Spellbound")}

            <div class="card-wrapper" style="margin-top:-.5em;height:35em;">
              <!-- Important / Events / Inventory / Showcase-->
              <div style="width:98%;display:inline-flex;align-items:center;justify-content:space-between;">
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%" onclick="showNotificationList('Notifications')">
                   <img src="img/exclamation-lg.svg">
                   <div class="tooltiptext">Notifications</div>
                  </button>
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%" onclick="showNotificationList('Events')">
                    <img src="img/calendar.svg">
                    <div class="tooltiptext">Events</div>
                  </button>
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%" onclick="showNotificationList('Inventory')">
                    <img src="img/columns-gap.svg">
                    <div class="tooltiptext">Inventory</div>
                  </button>
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%"  onclick="showNotificationList('Showcase')">
                    <img src="img/collection-play.svg">
                    <div class="tooltiptext">Showcase</div>
                  </button>
                </div>
              <div id="Notifications" class="notificationList">
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
              <div id="Events" class="notificationList" style="display:none;">
                    <h1>These are events</h1>
              </div>
              <div id="Inventory" class="notificationList" style="display:none;">
                    <h1 style="width:100%">Inventory Items &nbsp; &nbsp; 12 <img src="img/coin.png" style="height:1em;"></h1>
                    ${getInventory()}
              </div>
              <div id="Showcase" class="notificationList" style="display:none;">
                    <h1>These are Showcase Items</h1>
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


function showNotificationList(myId){
  let els = document.getElementsByClassName('notificationList');
  for ( var i = 0 ; i < els.length ; i ++ ){ els[i].style.display="none"}
  document.getElementById(myId).style.display="";
}


function getNoticeRow(img,text,action){
    return `
    <div class="notice-row highlight" >
        <div class="" style="width:8%;height:2.5em;padding-left:.5em;" onclick="${action}">
          <img style="height:2.5em" src="${img}">
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

function getInventory(){
    var html = `
    <div class="inventoryShelf">
        <div style="width:100%;display:inline-flex;">
            <div class="shelf mf-orange">
              Create
            </div>
            <div class="shelf mf-purple2" style="width:24%">
              <div>Keys</div>
              <div style="height:75%"> 1 &nbsp; <img src="img/key.svg" style="height:4em;"></div>
            </div>
            <div class="shelf mf-purple1" style="width:24%">
              Avatars
            </div>
        </div>
        <div style="width:100%;display:inline-flex;">
            <div class="shelf mf-yellow" style="width:24%">
              Styles
            </div>
            <div class="shelf mf-blue3" style="width:24%">
              <div>League Tokens</div>
                <div style="height:75%">1 <img src="img/token_league.png"  style="height:4em;"></div>
            </div>
            <div class="shelf mf-blue2">
              Collaborate
            </div>
        </div>
        <div style="width:100%;display:inline-flex;">
            <div class="shelf mf-red">
              Compete
            </div>
            <div class="shelf mf-orange" style="width:24%">
              <div>Tourney Tokens</div>
              <div style="height:75%">3 <img src="img/token_tourney.png"  style="height:4em;"></div>
            </div>
            <div class="shelf mf-blue1" style="width:24%">
              Awards
            </div>
        </div>
        <div style="width:100%;display:inline-flex;">

            <div class="shelf mf-yellow" style="width:24%">
              Emoticons
            </div>
            <div class="shelf mf-orange" style="width:24%">
                <div>Friend Tokens</div>
                <div style="height:75%">3 <img src="img/token_tourney.png"  style="height:4em;"></div>            </div>
            <div class="shelf mf-yellow">
              Share
            </div>
        </div>
        </div>
    `
    return html
}
