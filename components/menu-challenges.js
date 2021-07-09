document.write(
  `
  <div class="user-menu" id="menu-Challenge" style="display:none;">


    <div class="submenu-title">Challenges</div>
      <div class="submenu-header">
      <button class="selectButton" style="height:66px;"><span style="font-size:1.5em;display:inline;">Showcase</span>
      </button>
          <button class="selectButton" onclick="createCharPopup()" style="height:66px;"><span style="font-size:1.5em;display:inline;">Challenges</span>
          </button>
          <button class="selectButton" style="height:66px;width:48%" onclick="setCardsByMenu('Character')"><span style="font-size:1.5em;display:inline;">Characters</span>
          </button>
        <!--  <button class="selectButton" style="height:66px;"><span style="font-size:1.5em;display:inline;">Badges</span>
          </button>-->
      </div>

    <div class="table">

      <div style="width:75%;display:inline-block;">

          <button class="table-filter-button">
              <span style="font-size:1.5em;display:inline;">Progress</span>
          </button>
          <button class="table-filter-button">
              <span style="font-size:1.5em;display:inline;">Characters</span>
          </button>
          <button class="table-filter-button">
              <span style="font-size:1.5em;display:inline;">Leaderboard</span>
          </button>
      </div>
      <div style="width:24%;display:inline-block;text-align:right;">

          <button class="table-filter-button">
              <span style="font-size:1.5em;display:inline;"><img src="img/brain.png"></span>
          </button>
          <button class="table-filter-button">
              <span style="font-size:1.5em;display:inline;">Media</span>
          </button>
      </div>

          <div class="table-body">
<br><br>
          </div>
    </div>


  </div>
  `
);

//      Character Popup



  function createCharPopup(){
    console.log("hello worl2d");

    var charpop =

            `
            <div class="fill">
            <div class="popup playerStyles">
                <div style="width:100%;height:15%;">
                  <div style="margin-top:1vh;margin-left:1%;width:10%;display:inline-block;text-align:left;vertical-align:middle;">
                    <button class="menuButton" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()" style="font-size:1.5em;width:3em;">&nbspX&nbsp</button>

                  </div>
                  <div style="width:60%;height:100%;display:inline-block;padding:1em;padding-left:3em;">
                    <div style="width:50%;display:inline-block;font-size:2em;">Select a Character</div>
                    <div style="width:48%;display:inline-block">Level up each character by completing challenges and events in their unique set of badges. Earn coin along the way the can be redeemed for prizes.</div>

                    </div>

                </div>
                <div style="width:100%;height:80%;">
                  ${getCharacterWidget("Artist")}
                  ${getCharacterWidget("Builder")}
                  ${getCharacterWidget("Writer")}
                  ${getCharacterWidget("Competer")}
                  ${getCharacterWidget("Negotiator")}
                  ${getCharacterWidget("Thinker")}
                  ${getCharacterWidget("Engineer")}
                  ${getCharacterWidget("Grower")}
                  ${getCharacterWidget("Scientist")}


                </div>


            </div>
            </div>

            `;
            document.body.innerHTML+=charpop;

      }

var badgeHolder;
