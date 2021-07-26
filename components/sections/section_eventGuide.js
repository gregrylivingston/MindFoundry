
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
            ${myCards.find(x=>x.title=="1 League Token").cardHtml}
            ${myCards.find(x=>x.title=="1 Tourney  Token").cardHtml}

            ${this.hFooter()}
        </div>
      `;
  }



}
