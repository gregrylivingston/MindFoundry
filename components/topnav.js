document.write(`

<div class="topnav">

<div class="nav-left"  id="nav-player" onclick="breakDecks('Mind Foundry')" >
  <button class="topnav-button playerStylesButton" style="background-color:white;border:0px;" onclick="breakDecks('Mind Foundry')">
    <img class="menuButton-image" src="img/mf_logo.png">
  </button>
<!--  ${widget_player(data["Player"][0])}-->
</div>

  <div class="nav-right">
    <button class="topnav-button playerStylesButton" onclick="showPage('Squad')">
      6<img class="menuButton-image" src="img/menu/menu_usercrew.png">
    </button>
    <button class="topnav-button playerStylesButton" onclick="breakDecks('Events')">1<img class="menuButton-image" src="img/token_tourney.png">2<img class="menuButton-image" src="img/token_league.png">
    </button>


    <button class="topnav-button playerStylesButton" onclick="breakDecks('Genius Shop')"> 3 <img height="1em" class="menuButton-image" src="img/menu/menu_geniusshop.png"></button>

  </div>
</div>
</div>
</div>
  `);
