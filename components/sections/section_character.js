
class section_character extends section{
  constructor(type, index){
      super(type, index);
      this.Character="";
      this.badgeImg='<img class="card-header-img" src="img/Character/'+this.title +'.png">';
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `

          ${sectionDeckByTitle(this.title)}
        <div class="section playerStyles-bg" class="${this.docId}">
          ${widget_header(this.badgeImg,this.title + widget_progressBar(),this.Description)}
          ${myCards.find(x=>x.title==this.title).cardHtml}
          ${widget_challengeRec("Character",this.title)}
          ${this.hFooter()}

        </div>


        <div class="section playerStyles-bg" class="${this.docId}">
          ${get_cards("parentCard",this.title)}
        </div>

        <div class="section playerStyles-bg" class="${this.docId}">
          ${widget_header(this.badgeImg,this.title + " Leaderboard",this.Description)}
          ${widget_leaderboard()}
        </div>

        <div class="section playerStyles-bg" class="${this.docId}">
            ${widget_header('',this.title + " Badges",'')}
            ${widget_badgeByCharacter(this)}
        </div>


      `;
      //          ${widget_description(this.Description)}

  }

}
