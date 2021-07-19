
class character_card extends card{
  constructor(type, index){
      super(type, index);
      this.Character="";
      this.badge=this.title;
      this.badgeImg='<img class="card-header-img" src="img/Character/'+this.title +'.png">';
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles-bg" class="${this.docId}">
          ${widget_cardType("Character Progress")}
          ${widget_header(this.badgeImg,this.title + widget_progressBar(),this.Description)}

          ${widget_badgeByCharacter(this)}
          ${widget_challengeRec("Character",this.title)}
          ${this.hFooter()}
    <!--    </div>
        <div class="card playerStyles-bg" class="${this.docId}">
-->
        </div>
        <div class="card playerStyles-bg" class="${this.docId}">

          ${widget_showcase("Character",this.title)}
        </div>

        <div class="card playerStyles-bg" class="${this.docId}">
          ${widget_header(this.badgeImg,this.title + " Leaderboard",this.Description)}

          ${widget_leaderboard()}

        </div>

      `;
      //          ${widget_description(this.Description)}

  }

}
