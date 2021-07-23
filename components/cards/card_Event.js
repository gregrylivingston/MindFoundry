

class event_card extends section{
  constructor(type, index , eventsInBadge){
      super(type, index);
      this.events = "";
      this.eventsInBadge = eventsInBadge;
  }

  makeCardHtml(){

      return  `
      <div class="section playerStyles-bg" id="${this.docId}">

            ${widget_cardType(this.characterImg + " " + this.badge + " Events")}
            ${widget_header(this.badgeImg,this.title,this.Grade)}
            ${widget_description(this.Description)}
          ${this.hEventList()}


           ${new widget_footer(
              [widget_fFriend(),widget_fReact()],
              [widget_fShare(),widget_fMenu()]
            ).html()}
            </div>


      `;

  }

  hEventList(){
      return`
      <h3>Event List</h3>
            ${this.makeEvents()}
       `
  }
  makeEvents(){
        this.events = "";
        this.eventsInBadge.forEach(x=>{
            var myDays = "";
            if ( x[data["EventKey"].indexOf("eventType")] == "League"){
                myDays = "On " + x[data["EventKey"].indexOf("Days")];
                myDays = myDays.replace(",", "s and ")+"s ";
                myDays +=  "at " + x[data["EventKey"].indexOf("startTimeCentral")];
            } else {
                myDays = "On " + x[data["EventKey"].indexOf("dateStart")] + " at " +  x[data["EventKey"].indexOf("startTimeCentral")];
            }

            //data on number of sessions
//                  ${x[data["EventKey"].indexOf("Sessions")]} ${x[data["EventKey"].indexOf("SessionsLength")]} Sessions

            this.events+=`
                <div class="card-section playerStylesCard">
                  <h3 style="width:100%;display:inline-flex;">
                        <div style="width:70%">${x[data["EventKey"].indexOf("eventTitle")]}</div>
                        <button class="half-button" style="display:block;">
                          <div>Join</div>
                          <div>1 <img src="img/token_${x[data["EventKey"].indexOf("eventType")]}.png" height="40px"></div>
                        </button>
                  </h3>
                  <br>
                  ${x[data["EventKey"].indexOf("Task")]}
                  <br>
                  ${myDays}
                  <br>
                  Host: ${x[data["EventKey"].indexOf("host")]}




                </div>
            `
        })
        return this.events
  }
}
