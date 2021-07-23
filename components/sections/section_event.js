

class section_event extends section{
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
        this.eventsInBadge.forEach(x=>{this.events+=card_event(x);})
        return this.events
  }
}
