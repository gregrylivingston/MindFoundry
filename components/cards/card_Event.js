

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
            this.events+=`
                <div class="card-section playerStyles">
                  ${x[data["EventKey"].indexOf("eventTitle")]}
                  <br>
                  ${x[data["EventKey"].indexOf("Task")]}
                  <br>
                  ${x[data["EventKey"].indexOf("Sessions")]} Sessions
                  <br>
                  ${x[data["EventKey"].indexOf("SessionsLength")]} Minute Sessions

                  <button class="half-button">
                    <div>Join</div><br>
                    <div>1 <img src="img/token_league.png" height="40px"></div>
                  </button>
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

                  </div>
            <div class="card-footer-right">
              <button class="topnav-button playerStyles"><img src="img/menu/share.png"></button>
              <button class="topnav-button playerStyles">...</button>
            </div>
          </div>`
        }
}
