class section_badge extends section{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="section playerStyles-bg" class="${this.docId}">
            ${widget_cardType(this.title + " Badge")}
            ${widget_header(this.badgeImg,this.title + widget_progressBar(),this.Description)}
            ${widget_challengeRec("badge",this.title)}

            ${this.hFooter()}
        </div>
        <div class="section playerStyles-bg" class="${this.docId}">
        <h1>This won't actually make showcase</h1>
          ${get_cards("badge",this.title)}
        </div>

      `;
  }

}
