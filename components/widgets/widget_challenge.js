
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

function card_monthly_challenge(chall , myKey, myValue){
  return  `
  <div class="card-section playerStylesCard">
    <h3 onclick="showPage('Challenge','${myKey}','${myValue}')">
      July Challenge
      <!--<a style="font-size:.6em;">See All</a>-->
    </h3>

    <div style="width:100%;vertical-align:top;" class="">
      <div style="display:inline-block;width:58%;">
          <h2>${chall[data["ChallengeKey"].indexOf("title")]}</h2>
          <div style="font-size:0.8em">
                <div>
                  <div style='display:inline-flex;width:18%;'>Skill:</div>
                  ${widget_level(chall[data["ChallengeKey"].indexOf("Skill")])}
                </div>
                <div>
                  <div style='display:inline-flex;width:18%;'>Effort:</div>
                  ${widget_level(chall[data["ChallengeKey"].indexOf("Effort")])}
                </div>
          </div>
      </div>


    <h3 style="width:100%;display:inline-flex;">
          <div style="width:70%"></div>
    </h3>
      <div>${chall[data["ChallengeKey"].indexOf("submissionType")]}</div>
      <div>${chall[data["ChallengeKey"].indexOf("Description")]}</div>


  </div>
  `

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
