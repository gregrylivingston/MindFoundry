
function card_event(x){


        var myDays = "";
        if ( x[data["EventKey"].indexOf("eventType")] == "League"){
            myDays = x[data["EventKey"].indexOf("Days")];
            myDays = myDays.replace(",", "s and ")+"s ";
            myDays +=  "<br>" + x[data["EventKey"].indexOf("startTimeCentral")];
        } else {
            myDays = "On " + x[data["EventKey"].indexOf("dateStart")] + " at " +  x[data["EventKey"].indexOf("startTimeCentral")];
        }

        //data on number of sessions
        //                  ${x[data["EventKey"].indexOf("Sessions")]} ${x[data["EventKey"].indexOf("SessionsLength")]} Sessions

        return`
            <div class="card playerStylesCard">
              <h3>League</h3>
              <h2>
                    ${x[data["EventKey"].indexOf("eventTitle")]}
              </h2>
              <iframe width="100%" style="min-height:12em;" src="${x[data["EventKey"].indexOf("videoUrl")]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <br>


              <button style="width:100%;" class="selectButton playerStylesButton">
                <div style="width:100%;">
                  ${myDays}<br><br>
                  ${x[data["EventKey"].indexOf("Task")]}
                </div>
                <div style="width:100%;">
                   <img src="img/token_${x[data["EventKey"].indexOf("eventType")]}.png" width="50%">
                   <br>
                   Subscribe
                </div>
              </button>



              <button class="playerStylesButton">
                <div>Awards, Artifacts & Leaderboards <img src="img/menu/award.png"></div>
                <div style="margin:.5em 0 .5em 0;">${x[data["EventKey"].indexOf("Description")]}</div>
              </button>

              <button style="width:100%;margin:1em 0 1em 0;" class="playerStylesButton">
                <div>
                    <img src="img/menu/favorite_checked.png">
                    <img src="img/menu/favorite_checked.png">
                    <img src="img/menu/favorite_checked.png">
                    <img src="img/menu/favorite_checked.png">
                    <img src="img/menu/favorite_checked.png">
                    32 Ratings
                 </div>
                <div>Aiden had an amazing time.</div>
                <div><a href="">17 Reviews</a></div>
              </button>

              <h3>Head Coach ${widget_playerByName(x[data["EventKey"].indexOf("host")])}</h3>


                         ${new widget_footer(
                            [widget_fFriend(),widget_fReact()],
                            [widget_fShare(),widget_fMenu()]
                          ).html()}

            </div>

        `
}

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
