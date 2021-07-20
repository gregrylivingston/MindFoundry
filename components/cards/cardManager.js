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
        if (nextSection !== undefined){
          nextSection.addToFeed();
        } else {
          availableSectionIterator=i
        }
    }
    (nextSection !== undefined)? myTarget = document.querySelector('#'+nextSection.docId):myTarget=undefined;
    msnry.reloadItems();
    msnry.layout();
    setTimeout(() => {msnry.layout(); }, 1000);
    setTimeout(() => {msnry.layout(); }, 7000);
}


function showPage(page, filterKey = undefined, filterValue = undefined){
  console.log("page" + page + filterValue);
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
