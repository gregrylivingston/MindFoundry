
function widget_challengeRec(myKey, myValue){
    var myChall = ``;/*
        <div class="card-section playerStyles">
          <h3 style="text-align:left;" onclick="showChallenges({'column':'${myKey}','row':'${myValue}'})">
            Featured Challenges
            <a style="font-size:.6em;">See All</a>
          </h3>
    `;*/
    var mychallenges = shuffle(data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf(myKey)] == myValue));
    for (var i = 0 ; (i < 2 )  ; i ++){
      if ( mychallenges[i]!== undefined)
        {myChall+= widget_challenge(mychallenges[i],myKey,myValue);}
    }
  //  myChall+=        "</div>";

    return myChall;
}

function widget_challenge(chall , myKey, myValue){
  return  `
  <div class="card-section playerStylesButton">
    <h3 style="text-align:left;" onclick="showPage('Challenge','${myKey}','${myValue}')">
      Featured Challenges
      <a style="font-size:.6em;">See All</a>
    </h3>

    <h3 style="width:100%;display:inline-flex;">
          <div style="width:70%">${chall[0]}</div>
    </h3>
      <div>${chall[data["ChallengeKey"].indexOf("submissionType")]}</div>
      <div>${chall[data["ChallengeKey"].indexOf("Description")]}</div>
      <div>
        <div style='display:inline-flex;width:18%;'>Skill:</div>
        ${widget_level(chall[data["ChallengeKey"].indexOf("Skill")])}
      </div>
      <div>
        <div style='display:inline-flex;width:18%;'>Effort:</div>
        ${widget_level(chall[data["ChallengeKey"].indexOf("Effort")])}
      </div>

  </div>
  `

}

function widget_level(lvl){
        let myHtml = "<div style='display:inline-flex;width:80%'>";
        for ( var i = 0 ; i < lvl ; i ++ ){
          myHtml+="<div class='playerStyles' style='height:.5em;width:1.5em;margin-left:.5em;background:white;'></div>"
        }
        for ( ; i < 5 ; i ++ ){
          myHtml+="<div class='playerStyles' style='height:.5em;width:1.5em;margin-left:.5em;'></div>"

        }
        myHtml+="</div>"
  return myHtml
}
