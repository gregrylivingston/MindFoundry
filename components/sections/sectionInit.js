
// ** Initialize Cards


function init (){
    makeAllCards();
    BuildSectionArrays();
    buildPageTopCards();
    updateTopNavPlayer(data["Player"][0]);
    showPage('Home');

}

function buildPageTopCards(){

  //build challenge cards
  data["Challenge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new section_challenge("Challenge",i)):'';});
  //build event cards

}




function BuildSectionArrays(){

      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new section_challengeGuide("Player",i)):'';});
      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new section_shopGuide("Player",i)):'';});


      data["Showcase"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new section_showcase("Showcase",i)):'';});
      data["Badge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new section_badge("Badge",i)):'';});

      const eventBadges = ["Heroes Masters League",
                          "Heroes Explorers League",
                      ,"Minecraft Masters League",
                      "Minecraft Masters Tourney",
                      "Minecraft Explorers League",
                      "Minecraft Explorers Tourney",
                      "Rocket League Explorers",
                      "Rocket League Masters"];


      eventBadges.forEach((badge,i)=>{
         let eventsInBadge = data["Event"].filter(b=>b[2]==badge);
         let card = new section_event("Event",i , eventsInBadge);
             card.title = badge;
             card.cardHtml = card.makeCardHtml();
         sections.push(card);
      })
      //build character chards
      data["Character"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new section_character("Character",i)):'';});


      data["Badge"].forEach((badge,i)=>{
         for ( var n=0; n < data["Branch"].length ; n ++ ){
               if ( data["Branch"][n][1] == badge[0]){
               sections.push(new section_branch("Branch",n));
             }
         }

      });

      //build character chards

}

function updateTopNavPlayer(playerArray){
  document.getElementById("nav-player").innerHTML = widget_player(playerArray);
}
