
// ** Initialize Cards


function init (){
    BuildSectionArrays();
    buildPageTopCards();
    updateTopNavPlayer(data["Player"][0]);
    showPage('Home');

}

function buildPageTopCards(){

  //build challenge cards
  data["Challenge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new challenge_card("Challenge",i)):'';});
  //build event cards



}


function BuildCardArrays(){

      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new player_card("Player",i)):'';});
      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new challengeGuide_card("Player",i)):'';});
      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new eventGuide_card("Player",i)):'';});


      data["Shop"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new shop_card("Shop",i)):'';});
      data["Showcase"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new showcase_card("Showcase",i)):'';});
      data["Badge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new badge_card("Badge",i)):'';});

      const eventBadges = ["Heroes","Minecraft Masters League","Minecraft Masters Tourney","Rocket League Juniors","Minecraft Juniors","Rocket League Masters"];


      eventBadges.forEach((badge,i)=>{
         let eventsInBadge = data["Event"].filter(b=>b[2]==badge);
         let card = new event_card("Event",i , eventsInBadge);
             card.title = badge;
             card.cardHtml = card.makeCardHtml();
         cards.push(card);
      })
      //build character chards
      data["Character"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new character_card("Character",i)):'';});


      data["Badge"].forEach((badge,i)=>{
         for ( var n=0; n < data["Branch"].length ; n ++ ){
               if ( data["Branch"][n][1] == badge[0]){
               cards.push(new branch_card("Branch",n));
             }
         }

      });

      //build character chards

}


function BuildSectionArrays(){

      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new player_card("Player",i)):'';});
      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new challengeGuide_card("Player",i)):'';});
      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new eventGuide_card("Player",i)):'';});


      data["Shop"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new shop_card("Shop",i)):'';});
      data["Showcase"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new showcase_card("Showcase",i)):'';});
      data["Badge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new badge_card("Badge",i)):'';});

      const eventBadges = ["Heroes","Minecraft Masters League","Minecraft Masters Tourney","Rocket League Juniors","Minecraft Juniors","Rocket League Masters"];


      eventBadges.forEach((badge,i)=>{
         let eventsInBadge = data["Event"].filter(b=>b[2]==badge);
         let card = new event_card("Event",i , eventsInBadge);
             card.title = badge;
             card.cardHtml = card.makeCardHtml();
         sections.push(card);
      })
      //build character chards
      data["Character"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? sections.push(new character_card("Character",i)):'';});


      data["Badge"].forEach((badge,i)=>{
         for ( var n=0; n < data["Branch"].length ; n ++ ){
               if ( data["Branch"][n][1] == badge[0]){
               sections.push(new branch_card("Branch",n));
             }
         }

      });

      //build character chards

}

function updateTopNavPlayer(playerArray){
  document.getElementById("nav-player").innerHTML = widget_player(playerArray);
}
