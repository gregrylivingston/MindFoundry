
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
  var ages = "";
  if ( c.title.indexOf("Master")>-1){
    ages = `<button style="width:100%" class="half-button">Ages 11-13</button>`;
  } else if ( c.title.indexOf("Explor")>-1){
    ages = `<button style="width:100%" class="half-button">Ages 8-10</button>`;
  }

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
