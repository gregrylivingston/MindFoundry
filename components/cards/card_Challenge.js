
function card_monthly_challenge(chall , myKey, myValue){
  return  `
  <div class="card-section playerStylesCard">
    <h3 onclick="showPage('Challenge','${myKey}','${myValue}')" style="display:inline-flex;align-items:center;width:100%;justify-content:center;">
      <!--July -->
      <img style="max-height:1.5em;" src="img/Character/${chall[data["ChallengeKey"].indexOf("Character")]}.png">
      Challenge<!--<a style="font-size:.6em;">See All</a>-->
    </h3>
    <h2 style="display:inline-flex;align-items:center;width:100%;">
      <img style="max-height:2em;" src="${chall[data["ChallengeKey"].indexOf("imgSrc")]}1.png">
      ${chall[data["ChallengeKey"].indexOf("title")]}
    </h2>

    <div style="width:100%;text-align:center;margin:.5em 0 .5em 0;display:inline-flex;flex-wrap:wrap;flex-direction:row;justify-content:space-around;" class="playerStyles">
        <div style="vertical-align:top;width:30%;" class="">
            ${chall[data["ChallengeKey"].indexOf("submissionType")]}
            <br>
            Type
        </div>
        <div style="vertical-align:top;width:50%" class="">
              <div style='display:inline-flex;width:15%;'>Skill:</div>
              ${widget_level(chall[data["ChallengeKey"].indexOf("Skill")])}
              <div style='display:inline-flex;width:15%;'>Effort:</div>
              ${widget_level(chall[data["ChallengeKey"].indexOf("Effort")])}
        </div>
        <div style="vertical-align:top;" class="">

            Max Coins: ${chall[data["ChallengeKey"].indexOf("Effort")] * chall[data["ChallengeKey"].indexOf("Effort")]}
        </div>

    </div>



    <div>${chall[data["ChallengeKey"].indexOf("Description")]}</div>

    <div class="playerStyles">
        You have not completed this challenge.
        <br>
         ${widget_progressBar()}
          <button class="menuButton"><h2>Submit</h2>
          </button>
    </div>

  </div>
  `

}
