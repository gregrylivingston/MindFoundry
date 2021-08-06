document.write(`

<div class="topnav">

<div class="nav-left"  id="nav-player">
  <button class="topnav-button" style="background-color:white;border:0px;height:3em;" onclick="getHomePage()">
    <img class="menuButton-image" src="img/mf_logo.png">
  </button>

<!--  ${widget_player(data["Player"][0])}-->
</div>

  <div class="nav-right">
    <button style="width:30%;" class="topnav-button" onclick="getCreatePage()">
      <img class="menuButton-image" src="img/Create.svg"> Create
    </button>
    <button class="topnav-button" onclick="breakDecks('Collaborate')">
      <img class="menuButton-image" src="img/Collaborate.svg"> Collaborate
    </button>
    <button class="topnav-button" onclick="breakDecks('Compete')">
      <img class="menuButton-image" src="img/Compete.svg"> Compete
    </button>

    <button class="topnav-button" onclick="getSharePage()">
      <img class="menuButton-image" src="img/Share.svg"> Share
    </button>

  </div>
</div>
</div>
</div>
  `);
