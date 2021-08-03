document.write(`

<div class="topnav">

<div class="nav-left"  id="nav-player">
  <button class="topnav-button playerStylesButton" style="background-color:white;border:0px;width:25%;" onclick="breakDecks('Mind Foundry Decks')">
    <img class="menuButton-image" src="img/mf_logo.png">
  </button>
  <div class="searchBar" style="display:inline-flex;" style="width:70%;">
      <img src="img/search.svg" style="height:1em;padding:0 .5em 0 .5em;">
    <input id="search" style="background:none;font-size:.9em;border:none;" placeholder="Mind Foundry" style="width:80%;">
  </div>
<!--  ${widget_player(data["Player"][0])}-->
</div>

  <div class="nav-right">
    <button style="width:30%;" class="topnav-button playerStylesButton mf-orange" onclick="breakDecks('Create')">
      <img class="menuButton-image" src="img/Create.svg"> Create
    </button>
    <button class="topnav-button playerStylesButton mf-blue2" onclick="breakDecks('Collaborate')">
      <img class="menuButton-image" src="img/Collaborate.svg"> Collaborate
    </button>
    <button class="topnav-button playerStylesButton mf-red" onclick="breakDecks('Compete')">
      <img class="menuButton-image" src="img/Compete.svg"> Compete
    </button>

    <button class="topnav-button playerStylesButton mf-yellow" onclick="breakDecks('Share')">
      <img class="menuButton-image" src="img/Share.svg"> Share
    </button>

  </div>
</div>
</div>
</div>
  `);
