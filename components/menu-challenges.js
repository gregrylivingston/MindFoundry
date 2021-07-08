document.write(
  `
  <div class="user-menu" id="menu-Challenge" style="display:none;">


    <div class="submenu-title">Challenges</div>
      <div class="submenu-header">
      <button class="selectButton" style="height:66px;"><span style="font-size:1.5em;display:inline;">Showcase</span>
      </button>
          <button class="selectButton" style="height:66px;"><span style="font-size:1.5em;display:inline;">Challenges</span>
          </button>
          <button class="selectButton" style="height:66px;width:48%" onclick="createCharPopup()"><span style="font-size:1.5em;display:inline;">Characters</span>
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

    var charpop =

            `
            <div class="fill">
            <div class="popup playerStyles">
                <div style="width:100%;height:20%;">
                  <div style="width:60%;height:100%;display:inline-block;padding:1em;padding-left:3em;">
                    <h1>Select a Character</h1>
                    <h4>Level up each character by completing challenges and events in their unique set of badges. Earn coin along the way the can be redeemed for prizes.</h4>
                    </div>
                  <div style="width:20%;height:100%;display:inline-block;text-align:right;vertical-align:middle;">
                    <button class="menuButton" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()" style="font-size:2em;">&nbspX&nbsp</button>

                  </div>
                </div>
                <div style="width:100%;height:80%;">
                  <div class="col3 playerStyles">
                    <div>
                          <img src="img/Character/Artist.png">
                          <div style="font-size:1.5em; width:100%;">
                            Artist &nbsp &nbsp &nbsp &nbsp
                            <br>
                            <div style="font-size:.7em;padding-top:.3em;">
                            Lvl 0
                            <div class="progressBar-outer playerStyles" style="width:60%;">
                              <div class="progressBar-inner" ></div>
                            </div>
                            0 / 10 L
                            </div>
                          </div>
                    </div>
                    <div style="padding-left:5%;padding-top:.em;width:90%">
                      The Artist Knows what's up.  You better believe it.  Here are some additional words about the artist class.
                    </div>
                  </div>
                  <div class="col3">Hello world</div>
                  <div class="col3">Hello world</div>
                  <div class="col3">Hello world</div>
                  <div class="col3">Hello world</div>
                  <div class="col3">Hello world</div>
                  <div class="col3">Hello world</div>
                  <div class="col3">Hello world</div>
                  <div class="col3">Hello world</div>

                </div>


            </div>
            </div>

            `;


                        document.getElementById("popups").innerHTML+=charpop;
      }
