
class section_shopGuide extends section{

  constructor(type, index) {
    super(type,index);
    this.type = "shopGuide";
    this.shopHtml;
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){

      //get deck card
        this.shopHtml = "";
        myCards.filter(x=>x.type=="Genius Shop").forEach(x=>this.shopHtml+=x.cardHtml);


      //get cards in deck
    /*    let shopItems = data["card"].filter(x=>x[data["cardKey"].indexOf("parentCard")]==shop);
            shopItems.forEach(x=>{
              this.shopHtml+= card_shop_item(x);
            })

        return shophtml
*/
      return  `
        <div class="section playerStyles-bg" id="${this.docId}">
            ${widget_header(this.badgeImg,"Genius Shop","")}
            ${card_shopGuide()}

            ${this.shopHtml}

            ${this.hFooter()}
        </div>
      `;
  }





}

function card_shopGuide(){
    return `

           <div class="card playerStylesCard mf-yellow">
              <h3>Coin Stash</h3>
                <h2>${data["Player"][0][0]}'s Coin</h2>
              <div class="highlight cardFrame">
                <img style="width:50%;" src="img/coin.png">
              </div>
              <div style="width:100%;display:inline-flex;justify-content:space-between;">
                  Current: 17
               </div>
               <div style="width:100%;display:inline-flex;justify-content:space-between;">
                  2021: 12
                  Lifetime: 24
                </div>

                <div style="width:100%;display:inline-flex;justify-content:space-between;">
                    Genius Shop
                    Coins can be redeemed in the Genius Shop.
               </div>
                <div style="width:100%;display:inline-flex;justify-content:space-between;">
                    All Transactions
               </div>

                          ${new widget_footer(
                             [widget_fFriend()],
                             [widget_fShare(),widget_fMenu()]
                           ).html()}
           </div>`



}
