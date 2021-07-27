
// ** Initialize Cards


function init (){
    makeAllCards();
    updateTopNavPlayer(data["Player"][0]);
    showPage('Home');

}



function updateTopNavPlayer(playerArray){
  document.getElementById("nav-player").innerHTML = widget_player(playerArray);
}
