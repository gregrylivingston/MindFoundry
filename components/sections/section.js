function showDeck(deck){
  resetPage();
  var cardDiv = document.getElementById("cards");
      cardDiv.innerHTML = sectionDeckByTitle(deck);

}

//is the param a row or a string...
function sectionDeckByTitle(deck){
  //add deck
  var myHtml = myCards.find(x=>x.title==deck).cardHtml;
  //add cards in deck
  myCards.filter(x=>(x.parentCard==deck||x.owner==deck)).forEach(x=>myHtml+=x.cardHtml);

  return  `
    <div class="section playerStyles-bg">
        ${widget_header("",deck,"")}
        ${myHtml}
    </div>
  `;
}

function breakDecks(deck){
  var myHtml = "";
  myCards.filter(x=>x.parentCard == deck).forEach(x=>{myHtml+= sectionDeckByTitle(x.title)})
  return myHtml

}

function sectionDeckByType(deck){
  //add deck
    var myHtml = "";
//  var myHtml = myCards.find(x=>x.type==deck).cardHtml;
  //add cards in deck
  myCards.filter(x=>x.type==deck).forEach(x=>myHtml+=x.cardHtml);

  return  `
    <div class="section playerStyles-bg">
        ${widget_header("",deck,"")}
        ${myHtml}
    </div>
  `;
}
