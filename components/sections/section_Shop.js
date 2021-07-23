
class section_shop extends section{

  constructor(type, index) {
    super(type,index);
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="section playerStyles" id="${this.docId}">
            ${widget_header(this.badgeImg,this.title,"")}
            ${card_shop()}
            ${card_shop()}

            ${this.hFooter()}
        </div>
      `;
  }





}
