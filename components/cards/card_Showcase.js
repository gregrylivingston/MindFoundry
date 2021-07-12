

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
  hHeader(card){
       return  `<div class="card-header">
          ${this.badgeImg}

      <div class="card-title-group">
        <div class="card-title">${this.title}         ${this.hSubtitle()}</div>
      </div>
        <!--  ${this.branchImg}-->
    </div>

    `

  }
  hSubtitle(){
              return `<div class="card-subtitle">
                      <div style="font-size:.7em;padding-top:.3em;">
                        <a href="">${this.Challenge}</a>
                      </div>
                      </div>`
  }
}
