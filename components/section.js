
function init (){
    makeAllCards();
    updateTopNavPlayer(data["Player"][0]);
    breakDecks('Mind Foundry');
}

function updateTopNavPlayer(playerArray){
  document.getElementById("nav-player").innerHTML = widget_player(playerArray);
}



function sectionDeckByTitle(deck){
  //add deck
  console.log(deck);
  let myDeck = myCards.find(x=>x.title==deck);

  var myHtml = myCards.find(x=>x.title==deck).cardHtmlNoDeckReport;
  //add cards in deck
  myCards.filter(x=>(x.parentCard==deck||x.owner==deck)).forEach(x=>myHtml+=x.cardHtml);
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0; // For Safari

  return  `
    <div class="section playerStyles-bg">
        ${widget_header("",deck,"")}
        ${myHtml}
    </div>
  `;
}

function sectionDeckByType(deck){
  //add deck
    var myHtml = "";
//  var myHtml = myCards.find(x=>x.type==deck).cardHtml;
  //add cards in deck
  myCards.filter(x=>x.type==deck).forEach(x=>myHtml+=x.cardHtml);
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0; // For Safari

  return  `
    <div class="section playerStyles-bg">
        ${widget_header("",deck,"")}
        ${myHtml}
    </div>
  `;
}

//shows a deck and it's children.
function breakDecks(deck){
  var myHtml = sectionDeckByTitle(deck);
//  myCards.filter(x=>x.parentCard == deck).forEach(x=>{
//    if ( x.cardsInDeck.length>0 ){ myHtml+= sectionDeckByTitle(x.title)}
//  })
  cardDiv.innerHTML = myHtml;
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0; // For Safari

}


var cardDiv = document.getElementById("cards");

function showPage(page, filterKey = undefined, filterValue = undefined){
    switch (page){
      case "Squad":
        cardDiv.innerHTML = sectionDeckByType("Player Card");
        cardDiv.innerHTML += sectionDeckByType("Coach Card");
        cardDiv.innerHTML += sectionDeckByType("GM Card");
        break
      case "Character":
        cardDiv.innerHTML =sectionDeckByTitle(filterValue);
        break
      default:
    }
}