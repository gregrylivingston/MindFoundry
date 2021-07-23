
function widget_challengeRec(myKey, myValue){
    var myChall = ``;/*
        <div class="card-section playerStyles">
          <h3 style="text-align:left;" onclick="showChallenges({'column':'${myKey}','row':'${myValue}'})">
            Featured Challenges
            <a style="font-size:.6em;">See All</a>
          </h3>
    `;*/
    var mychallenges = shuffle(data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf(myKey)] == myValue));
    for (var i = 0 ; (i < 1 )  ; i ++){
      if ( mychallenges[i]!== undefined)
        {myChall+= card_monthly_challenge(mychallenges[i],myKey,myValue);}
    }
  //  myChall+=        "</div>";

    return myChall;
}


function widget_level(lvl){
        let myHtml = "<div style='display:inline-flex;width:80%;min-width:5em;max-width:15em;'>";
        for ( var i = 0 ; i < lvl ; i ++ ){
          myHtml+="<div class='playerStyles' style='height:.5em;width:10%;margin-left:4%;background:white;'></div>"
        }
        for ( ; i < 5 ; i ++ ){
          myHtml+="<div class='playerStyles' style='height:.5em;width:10%;margin-left:4%;'></div>"

        }
        myHtml+="</div>"
  return myHtml
}
