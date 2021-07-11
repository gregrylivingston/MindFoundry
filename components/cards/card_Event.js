

class event_card extends card{
  constructor(type, index , eventsInBadge){
      super(type, index);
      this.events = "";
      this.eventsInBadge = eventsInBadge;

  }
  hInnerContent(){
    return this.hDescription() + this.hEventList()
  }
  hSubtitle(){
    return `<div class="card-subtitle">
            <div style="font-size:.7em;padding-top:.3em;">
                ${this.Grade}<br>

            </div>
            </div>`;

  }
  hPreTitle(){  return `
        <div class="card-type">
          <div style="display:inline-flex;align-items:center;">
              ${this.characterImg} &nbsp ${this.badge.replace("_"," ")} Events
          </div>
        </div>`
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
                <div class="card-section playerStyles">
                  <h3 style="width:100%;display:inline-flex;">
                        <div style="width:70%">${x[data["EventKey"].indexOf("eventTitle")]}</div>
                        <button class="selectButton" style="width:29%;">
                          <div>Join</div><br>
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
  hFooter(){
          return `
          <div class="card-footer">
            <div class="card-footer-left">
                  <button class="topnav-button playerStyles"><img src="img/menu/favorite_unchecked.png"></button>
                  <button class="topnav-button playerStyles"><img src="img/menu/react.png"></button>

                  </div>
            <div class="card-footer-right">
              <button class="topnav-button playerStyles"><img src="img/menu/share.png"></button>
              <button class="topnav-button playerStyles">...</button>
            </div>
          </div>`
        }
}
