
function widget_challengeRec(myKey, myValue){
    var myChall = `
        <div class="card-section">
          <h3 style="text-align:left;">
            Recommended Challenges
            <a style="font-size:.6em;">See All</a>
          </h3>
        </div>
    `;
    var mychallenges = shuffle(data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf(myKey)] == myValue));
    for (var i = 0 ; (i < 2 )  ; i ++){
      if ( mychallenges[i]!== undefined){myChall+= widget_challenge(mychallenges[i]);}
    }
    return myChall;
}

function widget_challenge(chall){
  return  `
  <div class="card-section playerStyles">
    <h3 style="width:100%;display:inline-flex;">
          <div style="width:70%">${chall[0]}</div>
  </div>
  `

}
