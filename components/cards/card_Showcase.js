

class showcase_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();

  }
  hPreTitle(){
    return "";
  }
  hInnerContent(){
    return this.hShowcaseItem() + this.hOwnerWidget()
  }
  hShowcaseItem(){
    return `<div>
      <img style="max-width:100%" src="${this.src}">
    </div>`
  }
}
