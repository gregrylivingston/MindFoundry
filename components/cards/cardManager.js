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

function showBadge(b){
  setCardsByMenu("Badge", b);
}

function setCardsByMenu(menu, cardFilter){
    scroller.scrollTop = 0 ;
    document.getElementById("cards").innerHTML = "";
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
      case "Badge":
        availableCards = shuffle(cards.filter(c=>c.type=="Badge"&&c.title==cardFilter));
        availableCards.push(... shuffle(cards.filter(c=>c.type=="Branch"&&c.badge==cardFilter)));
          console.log(availableCards.length);
        break
      case "Home":
      case "Character":
      case "Challenge":
        availableCards = [cards.find(c=>c.type=="Player")];
        availableCards.push(... [cards.find(c=>c.type=="challengeGuide")]);
        availableCards.push(...shuffle(cards.filter(c=>c.type=="Character")));
        break
      case "Event":
        availableCards = [cards.find(c=>c.type=="eventGuide")];
        availableCards.push(... shuffle(cards.filter(c=>c.type==menu)));
        break
      default:
        availableCards = shuffle(cards.filter(c=>c.type=="Event" ));
        availableCards.push(... shuffle(cards.filter(c=>c.type=="Challenge")));
    }
    availableCardIterator = 0;
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
}


var mediaHTML;
