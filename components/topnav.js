document.write(`

<div class="topnav playerStyles">

<div class="nav-left"  id="nav-player" onclick="setCardsByMenu('Home')" >
  ${widget_player(data["Player"][0])}
</div>
  <div class="nav-right">

  <button class="topnav-button playerStylesButtonHighlight" onclick="setCardsByMenu('Squad')">
    6<img class="menuButton-image" src="img/menu/menu_usercrew.png">
  </button>


  <button class="topnav-button playerStylesButtonHighlight" onclick="showEvents()">1<img class="menuButton-image" src="img/token_tourney.png">2<img class="menuButton-image" src="img/token_league.png"></button>


    <button class="topnav-button playerStylesButtonHighlight" onclick="setCardsByMenu('Shop')"> 3 <img height="1em" class="menuButton-image" src="img/menu/menu_geniusshop.png"></button>
      <button class="topnav-button playerStylesButtonHighlight" style="background-color:white;border:0px;" onclick="setCardsByMenu('Settings')"><img class="menuButton-image" src="img/mf_logo.png"></button>
  </div>
    <img src="img/mf_logo.png" height="2em">
</div>
</div>
</div>
  `);
