//uses the data from the player table.
//One is created for each player.
//active player is stored in slot 0.
class eventGuide_card extends card{

  constructor(type, index) {
    super(type,index);
    this.type = "eventGuide";
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles-bg" id="${this.docId}">
            ${widget_cardType("Event Guide")}

            <div class="card-header">
                <h3>Event Guide</h3>
             </div>
            ${this.hComingUpEvents()}
            ${this.hFooter()}
        </div>
      `;
  }



    hComingUpEvents(){
      return `
          <div class="card-section">
            <h3>You don't have any events on the calendar.  Here are some events you might enjoy.</h3>
          </div>
          <div class="card-section">
            <h3>Subscription Status</h3>
            <p>
              Basic - Free
              <button>Upgrade</button>
            </p>
            <p>
              Premium
              Unlimited Tokens
              <button>Update</button>
            </p>
          </div>


      `
    }


}
