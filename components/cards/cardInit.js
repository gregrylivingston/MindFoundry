
// ** Initialize Cards

const eventBadges = ["Mind Foundry Heroes","Minecraft","Rocket League"];
const difficultyLevels = ["Very Easy","Easy","Medium","Hard","Very Hard"];
const brains = [
        "<img src='img/brain.png'>",
        "<img src='img/brain.png'><img src='img/brain.png'>",
        "<img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'>",
        "<img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'>",
        "<img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'> <img src='img/brain.png'>",
      ];
//build challenge cards
data["Challenge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new challenge_card("Challenge",i)):'';});
//build event cards
eventBadges.forEach((badge,i)=>{
   let eventsInBadge = data["Event"].filter(b=>b[1]==badge);
   cards.push(new event_card("Event",i));
})
//build character chards
data["Character"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new character_card("Character",i)):'';});

//cards.push(new categoryCard("Character"));


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
            console.log("branch holder: ");
            console.log(myBadges);


    data["Player"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new player_card("Player",i)):'';});
