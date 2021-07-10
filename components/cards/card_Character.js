
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
  hInnerContent(){
    return  this.hDescription() + HCardBadgesByCharacter(this)
  }
}
