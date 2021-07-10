

class showcase_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();

  }

  hInnerContent(){
    return hOwnerWidget(this)
  }
}
