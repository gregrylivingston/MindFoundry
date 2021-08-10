function getNewPlayerPage(){
  document.getElementById("cards").innerHTML =
  `
          <div class="page-section mf-emerald">
            <div class="card-wrapper" style="margin-top:-.5em;height:35em;">
              <!-- Important / Events / Inventory / Showcase-->
              <div style="width:98%;display:inline-flex;align-items:center;justify-content:space-between;">
                  <button class="topnav-button playerStylesButton tooltip" style="width:23%" onclick="showNotificationList('Notifications')">
                   <img src="img/exclamation-lg.svg">
                   <div class="tooltiptext">Notifications</div>
                  </button>

                </div>
              <div id="Notifications" class="notificationList">

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

  `;
  buildStarterNotices();
  activateCards();

}


function buildStarterNotices(){
    getNoticeRow("img/info/profile-card.png",
        `New Player Card Pack
      `, "openDeck('New Player Pack')"
    );
    getNoticeRow("img/avatar/avatar_tinkerawil.png",
          `Friend request from Gregry
          `, "openDeck('Gregry')"
    );
}
