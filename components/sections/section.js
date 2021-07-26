//is the param a row or a string...
function sectionDeck(deck){
  console.log(deck);
  //add deck
  var myHtml = myCards.find(x=>x.title==deck).cardHtml;
  //add cards in deck
  myCards.filter(x=>x.parentCard==deck).forEach(x=>myHtml+=x.cardHtml);

  return  `
    <div class="section playerStyles-bg">
        ${widget_header("",deck,"")}
        ${myHtml}
    </div>
  `;
}

function breakDecks(deck){
  var myHtml = "";
  myCards.filter(x=>x.parentCard == deck).forEach(x=>{myHtml+= sectionDeck(x.title)})
  return myHtml

}
