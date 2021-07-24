
class section_showcase extends section{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="section" id="${this.docId}">

            ${widget_header(this.badgeImg,this.title,'<a href="">'+this.Challenge+'</a>')}

            <div>
              <img style="max-width:100%" src="${this.src}">
            </div>

            ${this.hOwnerWidget()}
            ${this.hFooter()}
        </div>
      `;
  }

  hOwnerWidget(){
   return `<div class="card">
             <div style="font-size:1.65em;">
                 ${this.title}
             </div>
                   <div>
                       ${widget_playerByName(this.Player)}
                   </div>
                   <div>
                        Challenge Coin:
                        ${widget_progressBar(1,10)}
                   </div>
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
