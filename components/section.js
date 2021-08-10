
function init (){
    makeAllCards();
    document.getElementById("cards").innerHTML = `
    <div class="page-section playerStyles-bg">
      ${get_cards("title","Demo - Public Landing")}
      ${get_cards("title","Demo - Player Homepage")}

    </div>
`

}
var cardDiv = document.getElementById("cards");


function sectionDeckByType(deck){
  //add deck
    var myHtml = "";
//  var myHtml = myCards.find(x=>x.type==deck).makeCardHtml;
  //add cards in deck
  myCards.filter(x=>x.type==deck).forEach(x=>myHtml+=x.makeCardHtml());
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0; // For Safari

  return  `
    <div class="section playerStyles-bg">
      <!--  ${widget_header("",deck,"")}-->
        ${myHtml}
    </div>
  `;
}

function breakDecks(deck){
 var myHtml = "";

myCards.filter(x=>(x.parentCard==deck||x.owner==deck)).forEach(x=>myHtml+=x.makeCardHtml());
document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0;
  cardDiv.innerHTML = `
    <div class="section">
    <!--    ${widget_header("",deck,"")}-->
        ${myHtml}
    </div>
  `;
  activateCards();

}





//get all showcase cards based on a key / value pair...
function get_cards(filterKey, filterValue){
          var myHtml = "";
          myCards.filter(x=>x[filterKey]==filterValue).forEach(x=>{
            myHtml+=x.makeCardHtml();
          })
          return myHtml;
}
