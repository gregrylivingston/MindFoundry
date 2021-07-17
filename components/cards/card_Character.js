
class character_card extends card{
  constructor(type, index){
      super(type, index);
      this.Character="";
      this.badge=this.title;
      this.badgeImg='<img class="card-header-img" src="img/Character/'+this.title +'.png">';
      this.characterImg='<img style="width:1em;" src="img/Character/'+this.badge +'.png">';
      this.branchImg='';
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
          ${widget_cardType(this.characterImg + " " + this.badge + " " + this.type)}


          <div class="card-header">
             ${this.badgeImg}
            <div class="card-title-group">
               <div class="card-title">
                ${this.title}
                  <div class="card-subtitle">
                    ${widget_progressBar(2,10)}
                  </div>
               </div>
            </div>
          </div>

          ${this.hDescription()}
          ${HCardBadgesByCharacter(this)}
          ${widget_showcase("Character",this.title)}
          ${this.hFooter()}
        </div>
      `;
  }

}
