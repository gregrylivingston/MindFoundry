
function nextCard(el){
    let myCardDiv = el.parentElement.parentElement;
    let card = myCards.find(x=>x.index==myCardDiv.id);
    let deckIt = document.getElementById("deckIt" + myCardDiv.id).innerHTML;
    deckIt = Number(deckIt)+1;
    if ( deckIt > card.cardsInDeck.length ){ deckIt = 0}
    myCardDiv.removeChild(myCardDiv.firstChild);myCardDiv.removeChild(myCardDiv.firstChild);myCardDiv.removeChild(myCardDiv.firstChild);
    if (deckIt != 0 )
    {
      myCardDiv.innerHTML = myCards.find(x=>x.title==card.cardsInDeck[deckIt-1][1]).innerCardHtml + myCardDiv.innerHTML;
      document.getElementById("deckIt" + myCardDiv.id + "Parent").style.display = "inline-block";
    }
    else
    {
      myCardDiv.innerHTML = card.innerCardHtml + myCardDiv.innerHTML;
      document.getElementById("deckIt" + myCardDiv.id + "Parent").style.display = "none";
    }
    document.getElementById("deckIt" + myCardDiv.id).innerHTML = Number(deckIt);
}

function previousCard(el){
  let myCardDiv = el.parentElement.parentElement;
  let card = myCards.find(x=>x.index==myCardDiv.id);
  let deckIt = document.getElementById("deckIt" + myCardDiv.id).innerHTML;
  deckIt =  deckIt - 1;
  if ( deckIt < 0 ){ deckIt = card.cardsInDeck.length;}
  myCardDiv.removeChild(myCardDiv.firstChild);myCardDiv.removeChild(myCardDiv.firstChild);myCardDiv.removeChild(myCardDiv.firstChild);
  document.getElementById("deckIt" + myCardDiv.id).innerHTML = deckIt;
  if ( deckIt != 0 ){ //FOR NON TITLE  CARD OF DECK
    myCardDiv.innerHTML = myCards.find(x=>x.title==card.cardsInDeck[deckIt-1][1]).innerCardHtml + myCardDiv.innerHTML;
    document.getElementById("deckIt" + myCardDiv.id + "Parent").style.display="inline-block";
  } else { // FOR TITLE CARD OF DECK
    myCardDiv.innerHTML = card.innerCardHtml + myCardDiv.innerHTML;
    document.getElementById("deckIt" + myCardDiv.id + "Parent").style.display="none";
  }
}


//add deck size classlist
function getDeckCSSClass(d){
  if (d.cardsInDeck.length>49)
    { return " deck50";}
  else if (d.cardsInDeck.length>24)
    { return" deck25";}
  else if (d.cardsInDeck.length>11)
    { return" deck12";}
  else if (d.cardsInDeck.length>5)
    { return" deck6";}
  else if (d.cardsInDeck.length>1)
    { return" deck3";}
  else if (d.cardsInDeck.length>0)
    { return" deck2";}
}




  //basically the  deck switch menu...
  function makeDeckReport(thisCard){
    thisCard.deckReport = `
    <h2 style="width:80%;text-align:center;padding:0 5% 0 5%">
      <button class="playerStylesButton  ${thisCard.rules.defaultColor}" style="height:2em;width:4em;width:30%;max-width:10em" onclick="previousCard(this)"><</button>
        <div style="width:30%;display:inline-flex;justify-content:center;max-width:10em">
          <div id="deckIt${thisCard.index}Parent" style="display:none;">
            <div id="deckIt${thisCard.index}" style="display:inline-block;">
              0
            </div>
            / &nbsp;
          </div>
          <button class="mini-deck ${thisCard.rules.defaultColor}" onclick="breakDecks('${thisCard.title}')">
             ${thisCard.cardsInDeck.length}
          </button>
        </div>
      <button class="playerStylesButton  ${thisCard.rules.defaultColor}" style="height:2em;width:4em;width:30%;max-width:10em" onclick="nextCard(this)">></button>
    </h2>
      `;
  }


  //See a card in full screen view
  function viewCard(c){
    var el = document.getElementById(c);
    if ( el.classList.contains("fullscreen") == true ){
      el.classList.remove("fullscreen");
      el.children[0].classList.remove("fsView");
    }
    else {
      el.classList.add("fullscreen");
      el.children[0].classList.add("fsView");
      el.innerHTML += getSocial();
    }
  }

function getSocial(){
  return `
  <h4 style="text-align:left;">Menu</h4>
  <p style="display:inline-flex;width:100%;width:90%;margin:0em 5% 0em 5%;">
      <button class="menuButton">Report issue</button><br>
      <button class="menuButton">Ask for Help</button><br>
  </p>
  <h4>Share</h4>
  <div style="display:inline-flex;width:90%;margin:0em 5% 0em 5%;">
      <button class="menuButton">Link</button><br>
      <button class="menuButton">Facebook</button><br>
      <button class="menuButton">Twitter</button><br>
      <button class="menuButton playerStyles">Email</button>
  </div>
  <p>Receive 5 <img src="img/coin.png" style="height:1em;"> when someone joins Mind Foundry from your shared post.
  </p>
  `
}
