document.write(`

<div class="topnav playerStyles">

<div style="max-width:30em;">
  ${widget_player(data["Player"][0])}
</div>
  <div style="width:50%;display:inline-flex;">

  <button class="topnav-button playerStylesButtonHighlight" onclick="loadMenu('Squad')">
    6<img class="menuButton-image" src="img/menu/menu_usercrew.png">
  </button>
  <button class="topnav-button playerStylesButtonHighlight" onclick="loadMenu('Club')">Korora<img class="menuButton-image" src="img/menu/menu_korora.png"></button>


  <button class="topnav-button playerStylesButtonHighlight" onclick="loadMenu('Event')">1<img class="menuButton-image" src="img/token_tourney.png">2<img class="menuButton-image" src="img/token_league.png"></button>


    <button class="topnav-button playerStylesButtonHighlight" onclick="loadMenu('Shop')"> 3 <img height="1em" class="menuButton-image" src="img/menu/menu_geniusshop.png"></button>
      <button class="topnav-button playerStylesButtonHighlight" style="background-color:white;border:0px;" onclick="loadMenu('Settings')"><img class="menuButton-image" src="img/mf_logo.png"></button>
  </div>
    <img src="img/mf_logo.png" height="2em">
</div>
</div>
</div>
  `);
