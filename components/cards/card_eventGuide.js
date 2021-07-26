
function card_token_league(){
    return `
        <div class="card playerStylesCard mf-blue">
          <h3>League Token</h3>
          <h2>Subscribe to a League</h2>
          <div class="cardFrame highlight">
            <img style="width:50%;" src="img/token_league.png">
          </div>
          <p>
            Use this token to subscribe to a league.
            Leagues meet twice a week.  Coorperate with your club to complete monthly challenges.
            Earn awards and coin that can be redemmed for prizes.
            League tokens automatically renew but will be returned if you leave your current league.
          <p>
          <button onclick="showPage('League')" class="playerStylesButton half-button" style="height:5em;">
            <h3>Leagues</h3>
          </button>
          <button class="playerStylesButton half-button" style="height:5em;display:inline-block;text-align:left;">
                  <p>Event Pass</p>
                  <p>1 <img style="height:1em;" src="img/token_league.png"></p>
          </button>

        </div>
    `
}


function card_token_tourney(){
    return `
        <div class="card playerStylesCard mf-red">
          <h3>Tourney Token</h3>
          <h2>Join One Tourney</h2>
          <div class="cardFrame highlight">
            <img style="width:50%;" src="img/token_tourney.png">
          </div>
          <p>Spend this token to join a tourney.
             Tourneys are 1 time events that happen on a Friday, Saturday, or Sunday.
             Join with your clubmates to compete, earn awards, and win coin which can be redeemed for awesome prizes.
          </p>
          <button  onclick="showPage('Tourney')" class="playerStylesButton half-button" style="height:5em;">
            <h3>Tourneys</h3>
          </button>
          <button class="playerStylesButton half-button" style="height:5em;display:inline-block;text-align:left;">
                  <p>Event Pass</p>
                  <p>+1 <img style="height:1em;" src="img/token_tourney.png"> on June 1st</p>
          </button>
        </div>
    `
}
