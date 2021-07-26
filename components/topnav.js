document.write(`

<div class="topnav">

<div class="nav-left"  id="nav-player" onclick="showPage('Home')" >
  ${widget_player(data["Player"][0])}
</div>

  <div class="nav-right">
    <button class="topnav-button playerStylesButton" onclick="showPage('Squad')">
      6<img class="menuButton-image" src="img/menu/menu_usercrew.png">
    </button>
    <button class="topnav-button playerStylesButton" onclick="showPage('Events')">1<img class="menuButton-image" src="img/token_tourney.png">2<img class="menuButton-image" src="img/token_league.png">
    </button>


    <button class="topnav-button playerStylesButton" onclick="showPage('Shop')"> 3 <img height="1em" class="menuButton-image" src="img/menu/menu_geniusshop.png"></button>
    <button class="topnav-button playerStylesButton" style="background-color:white;border:0px;" onclick="showPage('MF')">
      <img class="menuButton-image" src="img/mf_logo.png">
    </button>
  </div>
</div>
</div>
</div>
  `);
