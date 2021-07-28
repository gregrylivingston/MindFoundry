
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
widget["Card Style"] = widget["Background"];


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

widget["Award Pack"] = widget["Tokens"];
widget["Prize"] = widget["Tokens"];


widget["Genius Shop"] = function(c){
    switch (c.title){
        case "Avatar Shop":
        case "Reaction Shop":
        case "Award Shop":
        case "Card Style Shop":
              return `
                <div class="cardBlock">
                  <button class="half-button" style="width:100%;font-size:1.5em" onclick="breakDecks('${c.title}')">
                    0 / ${c.cardsInDeck.length} Unlocked
                  </button>
                </div>`
        default: return `
            <div class="cardBlock">
              <button class="half-button" style="width:100%;font-size:1.5em" onclick="breakDecks('${c.title}')">
                View All
              </button>
            </div>`
    }

}
