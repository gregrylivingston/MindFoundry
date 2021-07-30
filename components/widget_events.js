
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
    ${getReviews()}

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

widget["Testimonial"] = function(c){
    return `
      ${getReviews(c)}
    `
}

widget["Create"]= function(c){
  return `
    <div class="cardBlock">
    <button class="half-button" style="height:2.5em;width:100%;font-size:1.4em">
      Points &nbsp;&nbsp; 0 &nbsp;<img src="img/Create.svg" style="height:1.2em;"> 
    </button>
    </div>
    <div class="cardBlock">
        <div style="width:32%;style:inline-block;">
              <button class="half-button" style="height:4em;display:inline-block;">
                <img src="img/file-play.svg" style="height:2em"><br>
                3
            </button>
            <button class="half-button" style="height:4em;display:inline-block;">
                <img src="img/file-music.svg" style="height:2em">
                0
            </button>
        </div>
        <div style="width:32%;style:inline-block;">
            <button class="half-button" style="height:4em;display:inline-block;">
                <img src="img/file-code.svg" style="height:2em">
                0
            </button>
            <button class="half-button" style="height:4em;display:inline-block;">
                  <img src="img/file-text.svg" style="height:2em">
                  0
              </button>
        </div>
        <div style="width:32%;style:inline-block;">
              <button class="half-button" style="height:4em;display:inline-block;">
                  <img src="img/file-richtext.svg" style="height:2em">
                  0
              </button>
              <button class="half-button" style="height:4em;display:inline-block;">
                  <img src="img/file-image.svg" style="height:2em">
                  0
              </button>
        </div>
    </div>



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
