
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

//shows a deck and it's children.
function breakDecks(deck){
  var myHtml = sectionDeckByTitle(deck);
  myCards.filter(x=>x.parentCard == deck).forEach(x=>{myHtml+= sectionDeckByTitle(x.title)})
  return myHtml

}
