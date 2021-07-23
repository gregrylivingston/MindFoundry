class section_branch extends section{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="section playerStyles-bg" id="${this.docId}">
            ${widget_cardType(this.title + " Branch")}
            ${widget_header(this.badgeImg,this.title,widget_progressBar())}
            ${widget_description(this.Description)}
            ${widget_challengeRec("branch", this.title)}
            ${this.hFooter()}
        </div>
      `;
  }

}
