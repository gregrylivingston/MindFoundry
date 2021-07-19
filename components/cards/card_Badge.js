
class badge_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles-bg" id="${this.docId}">
            ${widget_cardType(this.title + " Badge")}
            ${widget_header(this.badgeImg,this.title,widget_progressBar())}
            ${widget_description(this.Description)}
            ${widget_showcase("badge",this.title)}
            ${widget_challengeRec("badge",this.title)}
            ${widget_leaderboard()}

            ${this.hFooter()}
        </div>
      `;
  }

}
