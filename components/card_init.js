
//card initializations
var myCards = [];

function makeAllCards(){
  myCards =[];
  for ( var i = 0 ; i < data["card"].length ; i ++ ){
    myCards.push(new card(i));
  }
}
