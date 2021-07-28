var widget = {};

widget["Player Card"] = function(c){
  c.cardsInDeck = data["card"].filter(x=>x[data["cardKey"].indexOf("owner")]==this.title);
  return `

  <div class="cardBlock">
     ${widget_attributeSummary("Charisma" , 0)}
     ${widget_attributeSummary("Perception" , 0)}
   </div>
   <div class="cardBlock">
    ${widget_attributeSummary("Wisdom" , 1)}
    ${widget_attributeSummary("Logic" , 1)}
  </div>
  <div class="cardBlock">
     ${widget_attributeSummary("Resilience" , 3)}
     ${widget_attributeSummary("Dexterity" , 0)}
   </div>
  `
}
widget["Coach Card"] = widget["Player Card"];
widget["GM Card"] = widget["Player Card"];


widget["Virtue Card"]= function (c){
  return `
  <div style="display:inline-flex;width:90%;">
    <div class="half-button">
        3 &nbsp; <img src="img/brain.png">
    </div>
    <div class="half-button">
        3 &nbsp; <img src="img/menu/award.png">
        </div>
</div>`
}

widget["Mind Foundry"]= function (c){
  return `
    <p>An incredible online experience helping children discover their inner genius.</p>
    <ul>
      <li>Live online events promoting healthy cooperation and competition.</li>
      <li>Challenges and rewards promoting creation, innovation, and sharing.</li>
      <li>Clubs, Prizes, Group Programs and More.</li>
    </ul>
    <div class="cardBlock">
      <button class="playerStylesButton half-button">
        Join Now
      </button>
      <button class="half-button" style="background:none;">
        Sign In
      </button>
    </div>
  `
}

widget["Background"] = function(c){
    if ( c.costAmount > 0 ){
      return `
      <div class="cardBlock">
        <button class="half-button" style="width:100%">
          Unlock for ${c.costAmount} &nbsp;<img src="${currencyImg[c.costType]}">
        </button>
    </div>`
    }
    return ``
}

widget["Avatar"] = widget["Background"];
widget["Reaction Pack"] = widget["Background"];

widget["Tokens"] = function(c){
    if ( c.costAmount > 0 ){
      return `
      <div class="cardBlock">
        <button class="half-button" style="width:100%">
          Purchase for ${c.costAmount} &nbsp; <img src="${currencyImg[c.costType]}">
        </button>
    </div>`
    }
    return ``
}

widget["Award"] = widget["Tokens"];
widget["Prize"] = widget["Tokens"];


widget["League"] = function(c){
    if ( c.costAmount > 0 ){
      return `
      <div class="cardBlock">
        <button class="half-button">
          ${c.Days}<br>${c.startTimeCentral}
        </button>
        <button class="half-button">
          Join for ${c.costAmount} &nbsp;<img src="${currencyImg[c.costType]}">
        </button>
    </div>

      <div class="cardBlock">
        <button class="half-button" style="width:100%;">
          17 Reviews &nbsp;
          <img src="img/menu/favorite_checked.png">
          <img src="img/menu/favorite_checked.png">
          <img src="img/menu/favorite_checked.png">
          <img src="img/menu/favorite_checked.png">
          <img src="img/menu/favorite_checked.png">

        </button>
      </div>
      <div class="cardBlock">
        <button class="half-button" style="width:100%;font-size:.8em" onclick="cardDiv.innerHTML = sectionDeckByTitle('${c.owner}')">
          Coach &nbsp; ${widget_playerByName(c.owner)}
        </button>
      </div>
      `
    }
    return ``
}
widget["Tourney"] = widget["League"];


var currencyImg={
    "League Token":"img/token_league.png",
    "Tourney Token":"img/token_tourney.png",
    "Coin":"img/coin.png",
}

widget["Events"] = function (c){
  var ages;
  (c.title.indexOf("Master")>-1) ? ages = `<button style="width:100%" class="half-button">Ages 11-13</button>`: ages = `<button style="width:100%" class="half-button">Ages 8-10</button>`;

  return `<br><br>
    <div class="cardBlock">
      <button class="half-button" onclick="breakDecks('Events')">
        1 <img src="img/token_tourney.png">
        1 <img src="img/token_league.png">
      </button>
      <button class="half-button" onclick="cardDiv.innerHTML = sectionDeckByTitle('${c.title}')">
        View Events
      </button>
    </div>
    <div class="cardBlock">
      ${ages}
    </div>
    `
}
