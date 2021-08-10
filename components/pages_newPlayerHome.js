  home = `

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
  </div>`

function getNewPlayerPage(){
  document.getElementById("cards").innerHTML = home;
  buildStarterNotices();
  activateCards();
  topNav=`
      <div class="nav-left"  id="nav-player">
        <button class="topnav-button"  onclick="getHomePage()">
          <img class="menuButton-image" src="img/mf_logo.png">
        </button>
      </div>
  `;
   getTopNav();
}


function buildStarterNotices(){
    getNoticeRow("img/info/profile-card.png",
        `New Player Card Pack
      `, "newTut2()" , "newTut2"
    );
    getNoticeRow("img/avatar/avatar_tinkerawil.png",
          `Friend request from Gregry
          `, "addFriendPopup('Gregry','GM Card')", "newTutB2"
    );
}

function newTut2(){
  document.getElementById("newTut2").remove();
  openDeckPopup('New Player Pack');
  getNoticeRow("img/avatar/avatar_tinkerawil.png",`
      <div style="display:inline-block">
        <div class="cardBlock highlight"><input type="checkbox">Add an Avatar to your Player Card.</div>
        <div class="cardBlock highlight"><input type="checkbox">Add a nickname to your Player Card.</div>
        <div class="cardBlock highlight"><input type="checkbox">Give your Player Card a new color.</div>
        <p>Rewards: Club Key, Member Key</p>
        </div>`,
        ""
  );
  document.getElementById("cards").children[0].innerHTML += get_cards("title","New Player Card");

}


function addFriendPopup(deckName = null,cardType="Player Card"){
  document.getElementById("unlockCards").style.display="";
  document.getElementById("unlockCards").innerHTML = `
    <div class="page-section mf-emerald" style="height:100%">
      <h1>Friend Request</h1>
      ${get_cards("title",deckName)}
       <div class="card-wrapper">
            ${data["cardType"].find(x=>x[0]==cardType)[2]}
          <div class="card-block" style="margin-top:2em;">
              <button class="half-button" style="height:2em;"
                onclick="this.parentElement.parentElement.parentElement.parentElement.style.display='none';addGregry();">Add Friend</button>
              <button class="half-button" style="height:2em;"  onclick="this.parentElement.parentElement.parentElement.parentElement.style.display='none';">Dismiss</button>
          </div>
        </div>
      </div>
  `;
  activateCards();
}

function addGregry(){
  document.getElementById("newTutB2").remove();
  document.getElementById("cards").innerHTML += `
      <div class="page-section mf-orange" style="height:100%">
      <h1>Social</h1>
        ${get_cards("title","Friends")}
        </div>`;
}
