document.write(
  `
  <div class="user-menu" id="menu-Challenge" style="display:none;">


    <div class="submenu-title">Challenges</div>
      <div class="submenu-header">
      <button class="selectButton" style="height:66px;"><span style="font-size:1.5em;display:inline;">Showcase</span>
      </button>
          <button class="selectButton" style="height:66px;"><span style="font-size:1.5em;display:inline;">Challenges</span>
          </button>
          <button class="selectButton" style="height:66px;width:48%"><span style="font-size:1.5em;display:inline;">Characters</span>
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
              <span style="font-size:1.5em;display:inline;"><img src="img/mindfoundry_brain.png"></span>
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


      var charpop = `<div class="largepopup playerStyles">
        Hello world
        <button onclick="this.parentElement.remove()">Close</button>
      </div>
      `;

        window.onload = function() {
          console.log("hello so much world.");
          document.getElementById("popups").innerHTML+=charpop;}
