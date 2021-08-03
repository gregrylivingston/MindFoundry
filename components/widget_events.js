
widget["League"] = function(c){
  //          ${c.Days}<br>${c.startTimeCentral}
  //    ${getReviews()}
  //${widget_playerByName(c.owner)}
    if ( c.costAmount > 0 || true ){
      return `
      <div class="cardBlock">
        <button class="half-button">
        </button>
        <button class="half-button">
          Join for 1 &nbsp;<img src="img/token_league.png">
        </button>
    </div>

      <div class="cardBlock">
        <button class="half-button" style="width:100%;font-size:.8em" onclick="breakDecks('${c.owner}')">
          Coach &nbsp;
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


widget["Testimonial"] = function(c){
    return `
      ${getReviews(c)}
    `
}


function getReviews(){
  return `
  <div class="cardBlock" onclick="breakDecks('Testimonials')">
    <button class="half-button" style="width:100%;">
      17 Reviews &nbsp;
      <img src="img/menu/favorite_checked.png">
      <img src="img/menu/favorite_checked.png">
      <img src="img/menu/favorite_checked.png">
      <img src="img/menu/favorite_checked.png">
      <img src="img/menu/favorite_checked.png">

    </button>
  </div>
  `
}
