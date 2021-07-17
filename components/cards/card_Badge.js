
class badge_card extends card{
  constructor(type, index){
      super(type, index);
      this.Character="";
      this.badge=this.title;
      this.badgeImg='<img class="card-header-img" src="img/Character/'+this.title +'.png">';
      this.characterImg='<img style="width:1em;" src="img/Character/'+this.badge +'.png">';
      this.branchImg='';
      this.cardHtml = this.makeCardHtml();
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}

  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType(this.title + " Badge")}


            <div class="card-header">
               ${this.badgeImg}

                <div class="card-title-group">
                 <div class="card-title">${this.title}         ${this.hSubtitle()}
                 </div>
                </div>
            </div>


            ${this.hDescription()}
            ${widget_showcase("badge",this.title)}
            ${this.hFooter()}
        </div>
      `;
  }

  hSubtitle(){
            return `<div class="card-subtitle">
                        <div style="font-size:.7em;padding-top:.3em;">
                            Lvl 0
                            <div class="progressBar-outer playerStyles" style="width:50%;">
                              <div class="progressBar-inner" ></div>
                            </div>
                              0 / 10 L
                        </div>
                    </div>`;

  }
}
