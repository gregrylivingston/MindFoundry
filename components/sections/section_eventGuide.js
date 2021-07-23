//uses the data from the player table.
//One is created for each player.
//active player is stored in slot 0.
class section_eventGuide extends section{

  constructor(type, index) {
    super(type,index);
    this.type = "eventGuide";
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="section playerStyles-bg" id="${this.docId}">
            ${widget_cardType("Event Guide")}

            <div class="card-header">
                <h3>Event Guide</h3>
             </div>
            ${card_token_tourney()}
            ${card_token_league()}
            ${this.hCalendar()}

            ${this.hFooter()}
        </div>
      `;
  }

  hCalendar(){
      return `<div class="card playerStylesCard">
      <h3>Calendar</h3>
      <div>You don't have any events on the calendar.  Here are some events you might enjoy.</div>
    </div>`
  }



}
