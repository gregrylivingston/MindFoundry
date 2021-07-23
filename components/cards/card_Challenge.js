
function card_monthly_challenge(chall , myKey, myValue){
  let coins = (chall[data["ChallengeKey"].indexOf("Skill")] + chall[data["ChallengeKey"].indexOf("Effort")])  * (chall[data["ChallengeKey"].indexOf("Skill")] + chall[data["ChallengeKey"].indexOf("Effort")]);
  return  `
  <div class="card playerStylesCard">
    <h3 onclick="showPage('Challenge','${myKey}','${myValue}')" style="display:inline-flex;align-items:center;width:100%;justify-content:center;">
      <!--July -->
      <img style="max-height:1.5em;" src="img/Character/${chall[data["ChallengeKey"].indexOf("Character")]}.png">
      Challenge<!--<a style="font-size:.6em;">See All</a>-->
    </h3>
    <h2 style="display:inline-flex;align-items:center;width:100%;">
      <img style="max-height:2em;" src="${chall[data["ChallengeKey"].indexOf("imgSrc")]}1.png">
      ${chall[data["ChallengeKey"].indexOf("title")]}
    </h2>


    <div style="width:100%;height:12em;text-align:center;margin:.5em 0 .5em 0;background-image:url('img/Showcase/painting_harrison_1.jpg');background-size:cover;vertical-align:bottom;" class="playerStyles">
        <div style="background-color:rgba(255,255,255,0.3);">Showcase</div>
    </div>


    <div style="margin:.2em 0 .2em 0;">${chall[data["ChallengeKey"].indexOf("Description")]}</div>

    <div class="" style="padding:.1em;display:inline-flex;justify-content:space-between;margin:.3em 0 .3em 0;">

        <div style="vertical-align:top;width:30%;" class="">
            Type: ${chall[data["ChallengeKey"].indexOf("submissionType")]}
        </div>
        <div style="vertical-align:top;width:50%" class="">
              <div style='display:inline-flex;width:25%;'>Skill:</div>
              ${widget_level(chall[data["ChallengeKey"].indexOf("Skill")])}
              <div style='display:inline-flex;width:25%;'>Effort:</div>
              ${widget_level(chall[data["ChallengeKey"].indexOf("Effort")])}
        </div>

    </div>

          <button class="playerStylesButton" style="width:100%;padding:.4em;">
            ${widget_progressBar(0,coins)}

            <h2>Submit</h2>
          </button>
          <br>
          Resource, Branch

  </div>
  `

}
