
class section_shop extends section{

  constructor(type, index) {
    super(type,index);
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){

      //add deck
      this.myHtml = myCards.find(x=>x.title==this.title).cardHtml;
      //add cards in deck
      myCards.filter(x=>x.parentCard==this.title).forEach(x=>this.myHtml+=x.cardHtml);

      return  `
        <div class="section playerStyles-bg" id="${this.docId}">
            ${widget_header(this.badgeImg,this.title,"")}
            ${this.myHtml}
        </div>
      `;
  }
}
