

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


           ${new widget_footer(
              [widget_fFriend(),widget_fReact()],
              [widget_fShare(),widget_fMenu()]
            ).html()}
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
                  <iframe width="100%" style="min-height:12em;" src="https://www.youtube.com/embed/Z_cQoHK2tTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                  <br>
                  ${myDays}
                  <br>
                  <button class="selectButton playerStylesButton">
                    <div>Subscribe<img src="img/token_${x[data["EventKey"].indexOf("eventType")]}.png" height="40px"></div>
                  </button>
                  <button class="selectButton playerStylesButton">
                    <div><br>Info<br><br></div>
                  </button>
                  <button class="selectButton playerStylesButton">
                    <div>Calendar <img src="img/menu/menu_challenges.png"></div>
                  </button>
                  <button class="selectButton playerStylesButton">
                    <div>Awards <img src="img/menu/award.png"></div>
                  </button>
                  <div style="margin:.5em 0 .5em 0;">${x[data["EventKey"].indexOf("Description")]}</div>
                  <div style="margin:.5em 0 .5em 0;">July Challenge: ${x[data["EventKey"].indexOf("Task")]}</div>
                  <div>Host: ${widget_playerByName(this.host)}</div>
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



                </div>
            `
        })
        return this.events
  }
}
