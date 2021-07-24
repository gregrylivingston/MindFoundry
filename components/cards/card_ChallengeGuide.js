
function card_token_league(){
    return `
        <div class="card playerStylesCard mf-blue">
          <h3>League Token</h3>
          <h2>Subscribe to a League</h2>
          <div style="width:100%;min-height:5em;text-align:center;margin:.5em 0 .5em 0;display:inline-flex;align-items:center;justify-content:center;font-size:2em;" class="highlight">
            <img style="width:50%;" src="img/token_league.png">
          </div>
            Use this token to subscribe to a league.  You can always get it back by unsubscribing.
          <button style="width:100%;" class="playerStylesButton selectButton">See Leagues</button>
          <button style="width:100%;text-align:left;" class="playerStylesButton">
                <h2>Subscription</h2>
                <h4><a>Event Pass &nbsp;&nbsp; +1 League Token</a></h4>
          </button>
        </div>
    `
}


function card_token_tourney(){
    return `
        <div class="card playerStylesCard mf-red">
          <h3>Tourney Token</h3>
          <h2>Join One Tournament</h2>
          <div style="width:100%;min-height:5em;text-align:center;margin:.5em 0 .5em 0;display:inline-flex;align-items:center;justify-content:center;font-size:2em;" class="highlight">
            <img style="width:50%;" src="img/token_tourney.png">
          </div>
            Spend this token to join a tournament.  Compete for your club.
          <button style="width:100%;" class="playerStylesButton selectButton">See Tournaments</button>
          <button style="width:100%;text-align:left;" class="playerStylesButton">
                <h2>Subscription</h2>
                <h4><a>Event Pass &nbsp;&nbsp; Next Token: June 1st</a></h4>
          </button>
        </div>
    `
}
