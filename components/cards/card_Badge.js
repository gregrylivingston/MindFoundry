
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
  hInnerContent(){
    return  this.hDescription() //+ HCardBadgesByCharacter(this)
  }
  hcharacterStatus(){

  }
  htargetBadge(){

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
