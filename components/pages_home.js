
function getHomePage(){
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0;
  document.getElementById("cards").innerHTML =
  `
          <div class="page-section mf-yellow">
            <h1>Profile</h1>
            ${get_cards("title","Spellbound")}

            <div class="card-wrapper">
              Notices
              <button class="topnav-button highlight">
                20 <img src="img/coin.png" style="height:1em;">
              </button>
              <button class="topnav-button highlight">
                Friend
              </button>
              <button class="topnav-button highlight">
                Event
              </button>
              <div style="width:100%">

                    ${getNoticeRow("img/info/profile-card.png",'Youve been awarded an exciting card pack.')}
                    ${getNoticeRow("img/avatar/avatar_tinkerawil.png",'Friend request from Gregry')}

              </div>
            </div>




          </div>

          <div class="page-section mf-blue2">
            <h1>Events</h1>
            ${get_cards("title","Minecraft Explorers")}
          </div>

          <div class="page-section mf-yellow">
            <h1>Friends</h1>
            ${get_cards("title","Harrison")}
            ${get_cards("title","YoungerPetr")}
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
