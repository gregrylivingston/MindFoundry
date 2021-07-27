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
  availableSections = [];
}

function addSectionsToPage(){
    for( var i = availableSectionIterator + 4 ; availableSectionIterator < i ;availableSectionIterator++)
    {
        nextSection = availableSections[availableSectionIterator];
        if (nextSection !== undefined){
          nextSection.addToFeed();
        } else {
          availableSectionIterator=i
        }
    }
    (nextSection !== undefined)? myTarget = document.querySelector('#'+nextSection.docId):myTarget=undefined;
  /*  msnry.reloadItems();
    msnry.layout();
    setTimeout(() => {msnry.layout(); }, 1000);
    setTimeout(() => {msnry.layout(); }, 7000);*/
}


function showPage(page, filterKey = undefined, filterValue = undefined){
    resetPage();
    var cardDiv = document.getElementById("cards");
    switch (page){
      case "Home":
        cardDiv.innerHTML = sectionDeckByTitle("Decks");
        break
      case "Events":
        cardDiv.innerHTML = sectionDeckByTitle("Events");
        cardDiv.innerHTML += breakDecks("Events");

        break
      case "League":
      case "Tourney":
        availableSections = shuffle(sections.filter(c=>c.type=="Event"));
        availableSections = availableSections.filter(c=>c["eventType"]==page);
        break
      case "Shop":
        cardDiv.innerHTML = sectionDeckByTitle("Genius Shop");
        cardDiv.innerHTML += breakDecks("Genius Shop");
        break
      case "Squad":
        cardDiv.innerHTML = sectionDeckByType("Player Card");
        cardDiv.innerHTML += sectionDeckByType("Coach Card");
        cardDiv.innerHTML += sectionDeckByType("GM Card");

    //    availableSections = shuffle(sections.filter(c=>c.type=="Player"&&c.title!=data["Player"][0][0]));
        break
      case "Showcase":
        availableSections = shuffle(sections.filter(c=>c.type=="Showcase"));
        break
      case "Character":
        availableSections = sections.filter(c=>c.type=="Character"&&c.title==filterValue);
        availableSections.push(... shuffle(sections.filter(c=>c.type=="Badge"&&c.Character==filterValue)));
        break
      case "Badge":
        availableSections = shuffle(sections.filter(c=>c.type=="Badge"&&c[filterKey]==filterValue));
        availableSections.push(... shuffle(sections.filter(c=>c.type=="Branch"&&c[filterKey]==filterValue)));
        break
      case "Challenge":
        availableSections = shuffle(sections.filter(c=>c.type=="Challenge"));
        availableSections = availableSections.filter(c=>c[filterKey]==filterValue);
        break
      case "MF":
        cardDiv.innerHTML = sectionDeckByTitle("Decks");

    }

    addSectionsToPage();

}






var scroller =   document.getElementById("cards").parentElement;
var myTarget = undefined;
scroller.addEventListener('scroll', function() {
  if (myTarget!==null){
    if(myTarget.getBoundingClientRect().top <= 500){
      addSectionsToPage();
    }}
})


var mediaHTML;
