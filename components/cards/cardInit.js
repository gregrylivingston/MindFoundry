
// ** Initialize Cards


function init (){

    buildPageTopCards();
    BuildCardArrays();
    updateTopNavPlayer(data["Player"][0]);
    loadMenu('Home');

}

function buildPageTopCards(){

  //build challenge cards
  data["Challenge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new challenge_card("Challenge",i)):'';});
  //build event cards



}


function BuildCardArrays(){

      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new player_card("Player",i)):'';});
      data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new challengeGuide_card("Player",i)):'';});

      data["Shop"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new shop_card("Shop",i)):'';});
      data["Showcase"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new showcase_card("Showcase",i)):'';});
      data["Badge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new badge_card("Badge",i)):'';});

      const eventBadges = ["Heroes","Minecraft_Masters","Rocket_League_Juniors","Minecraft_Juniors","Rocket_League_Masters"];


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

function updateTopNavPlayer(playerArray){
  document.getElementById("nav-player").innerHTML = widget_player(playerArray);
}


// currently unused

function creatBranches(){

      var branchHolder = {};
      var myBadges = {};
              data["Character"].forEach(char=>{
                            data["Challenge"].filter(x=>x[4]==char[0]).forEach((x,i)=>{
                let badge = x[2];
                            if ( myBadges[badge] === undefined ){
                                myBadges[badge] = {};
                              }else{
                          //      myBadges[badge].push(...[x]);
                              }

                let branch = x[3];

                if ( myBadges[badge][branch] === undefined ){
                  myBadges[badge][branch] = [x];
                }else{
                  myBadges[badge][branch].push(...[x]);
                }
              })

              for ( var i = 0 ; i < branchHolder.length ; i++){
                badgeHolder+='<h3>'+branchHolder[i][0]+'</h3>';
                banchHolder[i].forEach(bad=>{
            //      badgeHolder+='<img src="img/Badge/' + bad[0] + '2.png" style="display:inline;width:5em;">';
                })
              }
            });
}
