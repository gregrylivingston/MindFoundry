
var cardDiv = document.getElementById("cards");

function showPage(page, filterKey = undefined, filterValue = undefined){
    switch (page){
      case "Home":
        cardDiv.innerHTML = breakDecks("Decks");
        break
      case "Events":
        cardDiv.innerHTML = breakDecks("Events");
        break
      case "Shop":
        cardDiv.innerHTML = breakDecks("Genius Shop");
        break
      case "Squad":
        cardDiv.innerHTML = sectionDeckByType("Player Card");
        cardDiv.innerHTML += sectionDeckByType("Coach Card");
        cardDiv.innerHTML += sectionDeckByType("GM Card");
        break
      case "Character":
        cardDiv.innerHTML =sectionDeckByTitle(filterValue);
        break
      case "MF":
        cardDiv.innerHTML = sectionDeckByTitle("Decks");
      break
    }
}
