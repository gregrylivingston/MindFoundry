

class event_card extends section{
  constructor(type, index , eventsInBadge){
      super(type, index);
      this.events = "";
      this.eventsInBadge = eventsInBadge;
  }

  makeCardHtml(){

      return  `
      <div class="section playerStyles-bg" id="${this.docId}">
            ${widget_header(this.badgeImg,this.title,this.Grade)}
            ${this.makeEvents()}
      </div>


      `;

  }

  makeEvents(){
        this.events = "";
        this.eventsInBadge.forEach(x=>{
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

            this.events+=`
                <div class="card-section playerStylesCard">
                  <h3>League</h3>
                  <h2>
                        ${x[data["EventKey"].indexOf("eventTitle")]}
                  </h2>
                  <iframe width="100%" style="min-height:12em;" src="${this.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

                  <h3>Head Coach ${widget_playerByName(this.host)}</h3>


                             ${new widget_footer(
                                [widget_fFriend(),widget_fReact()],
                                [widget_fShare(),widget_fMenu()]
                              ).html()}

                </div>
            `
        })
        return this.events
  }
}
