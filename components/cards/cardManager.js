/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: string         max char 40
subtitle: string      max char ?
img: string           file location of image



*/

var nextSection;
var sections = [];
var availableSections = [];
var availableSectionIterator = 0;

function resetPage(){
  scroller.scrollTop = 0 ;
  document.getElementById("cards").innerHTML = "";
  availableSectionIterator = 0;
}

function addSectionsToPage(){
    for( var i = availableSectionIterator + 4 ; availableSectionIterator < i ;availableSectionIterator++)
    {
        nextSection = availableSections[availableSectionIterator];
        (nextSection !== undefined)? nextSection.addToFeed():availableSectionIterator=i;
    }
    (nextSection !== undefined)? myTarget = document.querySelector('#'+nextSection.docId):myTarget=undefined;
    msnry.reloadItems();
    msnry.layout();
    setTimeout(() => {msnry.layout(); }, 1000);
    setTimeout(() => {msnry.layout(); }, 7000);
}


function showPage(page, filterKey = undefined, filterValue = undefined){
    resetPage();
    switch (page){
      case "Home":
        availableSections = [sections.find(c=>c.type=="Player")];
        availableSections.push(...[sections.find(c=>c.type=="eventGuide")]);
        break
      case "Events":
        availableSections = [sections.find(c=>c.type=="eventGuide")];
        availableSections.push(... shuffle(sections.filter(c=>c.type=="Event")));
        break
      case "Shop":
        availableSections = shuffle(sections.filter(c=>c.type=="Shop"));
        break
      case "Squad":
        availableSections = shuffle(sections.filter(c=>c.type=="Player"&&c.title!=data["Player"][0][0]));
        break
      case "Showcase":
        availableSections = shuffle(sections.filter(c=>c.type=="Showcase"));
        break

    }
    addSectionsToPage();

}








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
  availableCards = cards.filter(c=>c.type=="Character"&&c.title==myCharacter);
  availableCards.push(... shuffle(cards.filter(c=>c.type=="Badge"&&c.Character==myCharacter)));
  addCardsToFeed();
}

function showBadge(cardFilter){
  resetCardHolder();
  availableCards = shuffle(cards.filter(c=>c.type=="Badge"&&c.title==cardFilter));
  availableCards.push(... shuffle(cards.filter(c=>c.type=="Branch"&&c.badge==cardFilter)));
  addCardsToFeed();
}



function showChallenges(search){
  console.log("showchallenges +  " + search.column + search.row)

  resetCardHolder();
  availableCards = shuffle(cards.filter(c=>c.type=="Challenge"));
  availableCards = availableCards.filter(c=>c[search.column]==search.row);
  addCardsToFeed();

}


var nextCard;
var scroller =   document.getElementById("cards").parentElement;
var myTarget = undefined;
scroller.addEventListener('scroll', function() {
  if (myTarget!==null){
    if(myTarget.getBoundingClientRect().top <= 500){
      addSectionsToPage();
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
