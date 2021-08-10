
var topNav = `

<div class="nav-left"  id="nav-player">
  <button class="topnav-button"  onclick="getHomePage()">
    <img class="menuButton-image" src="img/mf_logo.png">
  </button>

  <button class="topnav-button" onclick="getCreatePage()">
    <img class="menuButton-image" src="img/Create.svg"> Create
  </button>
  <button class="topnav-button" onclick="getCollaboratePage()">
    <img class="menuButton-image" src="img/Collaborate.svg"> Collaborate
  </button>
  <button class="topnav-button" onclick="getCompetePage()">
    <img class="menuButton-image" src="img/Compete.svg"> Compete
  </button>

  <button class="topnav-button" onclick="getSharePage()">
    <img class="menuButton-image" src="img/Share.svg"> Share
  </button>
<!--  ${widget_player(data["Player"][0])}-->
</div>

  <div class="nav-right">


</div>
</div>
</div>`


function getTopNav(){
      document.getElementsByClassName("topnav")[0].innerHTML = topNav;
}


document.write(`
  <div class="topnav">
  </div>
  `);


getTopNav();
