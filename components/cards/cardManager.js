/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: string         max char 40
subtitle: string      max char ?
img: string           file location of image



*/


var cards = [];
var availableCards = [];
var availableCardIterator = 0;

function resetCardHolder(){
  scroller.scrollTop = 0 ;
  document.getElementById("cards").innerHTML = "";
  availableCardIterator = 0;
}

function showBadgesByCharacter(myCharacter){
  resetCardHolder();
  availableCards = shuffle(cards.filter(c=>c.type=="Badge"&&c.Character==myCharacter));
  addCardsToFeed();
}

function showBadge(cardFilter){
  resetCardHolder();
  availableCards = shuffle(cards.filter(c=>c.type=="Badge"&&c.title==cardFilter));
  availableCards.push(... shuffle(cards.filter(c=>c.type=="Branch"&&c.badge==cardFilter)));
  addCardsToFeed();
}

function showEvents(){
  resetCardHolder();
  availableCards = [cards.find(c=>c.type=="eventGuide")];
  availableCards.push(... shuffle(cards.filter(c=>c.type=="Event")));
  addCardsToFeed();
}

function showChallenges(search){
  console.log("showchallenges +  " + search.column + search.row)

  resetCardHolder();
  availableCards = shuffle(cards.filter(c=>c.type=="Challenge"));
  availableCards = availableCards.filter(c=>c[search.column]==search.row);
  addCardsToFeed();

}

function setCardsByMenu(menu, cardFilter = undefined){
    resetCardHolder();
    switch (menu){
      case "Showcase":
        availableCards = shuffle(cards.filter(c=>c.type=="Showcase"));
        break
      case "Shop":
        availableCards = shuffle(cards.filter(c=>c.type=="Shop"));
        break
      case "Club":
      case "Squad":
        availableCards = shuffle(cards.filter(c=>c.type=="Player"&&c.title!=data["Player"][0][0]));
        break
      case "Home":
      case "Character":
      case "Challenge":
        availableCards = [cards.find(c=>c.type=="Player")];
  //      availableCards.push(... [cards.find(c=>c.type=="challengeGuide")]);
        availableCards.push(...shuffle(cards.filter(c=>c.type=="Character")));
        break
      default:
        availableCards = shuffle(cards.filter(c=>c.type=="Event" ));
        availableCards.push(... shuffle(cards.filter(c=>c.type=="Challenge")));
    }
    addCardsToFeed();

}

var nextCard;
var scroller =   document.getElementById("cards").parentElement;
var myTarget = undefined;
scroller.addEventListener('scroll', function() {
  if (myTarget!==null){
    if(myTarget.getBoundingClientRect().top <= 500){
      addCardsToFeed();
    }}
})

function addCardsToFeed(){
    for( var i = availableCardIterator + 10 ; availableCardIterator < i ;availableCardIterator++)
    {
        nextCard = availableCards[availableCardIterator];
        (nextCard !== undefined)? nextCard.addToFeed():availableCardIterator=i;
    }
    (nextCard !== undefined)? myTarget = document.querySelector('#'+nextCard.docId):myTarget=undefined;
    msnry.reloadItems();
    msnry.layout();
    setTimeout(() => {msnry.layout(); }, 1000);
    setTimeout(() => {msnry.layout(); }, 7000);
}


var mediaHTML;
