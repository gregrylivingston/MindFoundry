

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
  hOwnerWidget(){
   return `<div class="card-section">
   <div style="font-size:1.65em;">
       ${this.title}
   </div>
         <div>
             ${widget_playerByName(this.Player)}
         </div>
         <div>
              Challenge Coin:
              ${this.makeCardProgressBar()}
         </div>

         `
 }
 hFooter(){
         return `
         <div class="card-footer">
           <div class="card-footer-left">
                 <button class="topnav-button playerStyles"><img src="img/menu/favorite_unchecked.png"></button>
                 <button class="topnav-button playerStyles">3<img src="img/menu/react.png"></button>
                 <button class="topnav-button playerStyles">2<img src="img/menu/award.png"></button>

                 </div>
           <div class="card-footer-right">
             <button class="topnav-button playerStyles"><img src="img/menu/share.png"></button>
             <button class="topnav-button playerStyles">...</button>
           </div>
         </div>`
       }
}
