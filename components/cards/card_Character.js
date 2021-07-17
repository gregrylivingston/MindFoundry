
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
        <div class="card playerStyles" id="${this.docId}">
          ${widget_cardType(this.characterImg + " " + this.badge + " " + this.type)}

          ${widget_header(this.badgeImg,this.title,widget_progressBar())}
          ${widget_description(this.Description)}
          ${HCardBadgesByCharacter(this)}
          ${widget_showcase("Character",this.title)}
          ${this.hFooter()}
        </div>
      `;
  }

}
