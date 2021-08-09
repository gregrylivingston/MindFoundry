
widget["Player Card"] = function (c){
  let html =
  `
    <div class="cardBlock">
      <div class="half-button mf-orange" onclick="getCreatePage()">
          <img src="img/Create.svg">
      </div>
      <div class="half-button mf-blue2"  onclick="getCollaboratePage()">
          <img src="img/Collaborate.svg">
      </div>
    </div>
    <div class="cardBlock">
      <div class="half-button mf-red" onclick="getCompetePage()">
          <img src="img/Compete.svg">
      </div>
      <div class="half-button mf-yellow" onclick="getSharePage()">
          <img src="img/Share.svg">
      </div>
    </div>
    <div class="cardBlock" style="align-items:center;margin-top:1em">
        <div style="width:60%">Level Up the 4 Core Skills to Advance Your Player Level
        </div>
        <button class="createButton">Lvl 2 Rewards</button>
    </div>
  `;
  return html;
}

widget["GM Card"] = function (c){
  let html =
  `
    <div class="cardBlock">
      <div class="half-button mf-orange" onclick="getCreatePage()">
          <img src="img/Create.svg">
          <img src="img/Create.svg">
          <img src="img/Create.svg">
          <img src="img/Create.svg">
          <img src="img/Create.svg">

      </div>
      <div class="half-button mf-blue2"  onclick="getCollaboratePage()">
          <img src="img/Collaborate.svg">
          <img src="img/Collaborate.svg">
          <img src="img/Collaborate.svg">

      </div>
    </div>
    <div class="cardBlock">
      <div class="half-button mf-red" onclick="getCompetePage()">
          <img src="img/Compete.svg">
          <img src="img/Compete.svg">
          <img src="img/Compete.svg">

      </div>
      <div class="half-button mf-yellow" onclick="getSharePage()">
          <img src="img/Share.svg">
          <img src="img/Share.svg">
          <img src="img/Share.svg">
          <img src="img/Share.svg">

      </div>
    </div>
    <div class="cardBlock" style="align-items:center;margin-top:1em">
        <div style="width:60%">GMs are here for you if you need help
        </div>
        <button class="createButton">Contact GM</button>
    </div>
  `;
  return html;
}


widget["Coach Card"] = function (c){
  let html =
  `
    <div class="cardBlock">
      <div class="half-button mf-orange" onclick="getCreatePage()">
          <img src="img/Create.svg">
          <img src="img/Create.svg">
          <img src="img/Create.svg">
          <img src="img/Create.svg">


      </div>
      <div class="half-button mf-blue2"  onclick="getCollaboratePage()">
          <img src="img/Collaborate.svg">
          <img src="img/Collaborate.svg">
          <img src="img/Collaborate.svg">

      </div>
    </div>
    <div class="cardBlock">
      <div class="half-button mf-red" onclick="getCompetePage()">
          <img src="img/Compete.svg">
          <img src="img/Compete.svg">

      </div>
      <div class="half-button mf-yellow" onclick="getSharePage()">
          <img src="img/Share.svg">
          <img src="img/Share.svg">
          <img src="img/Share.svg">

      </div>
    </div>
    <div class="cardBlock" style="align-items:center;margin-top:1em">
        <div style="width:60%">Coaches are here for you if you need help
        </div>
        <button class="createButton">Contact Coach</button>
    </div>
  `;
  return html;
}
