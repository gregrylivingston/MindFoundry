
class section_shopGuide extends section{

  constructor(type, index) {
    super(type,index);
    this.type = "shopGuide";

    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="section playerStyles-bg" id="${this.docId}">
            ${widget_header(this.badgeImg,"Genius Shops","")}
            ${card_shopGuide()}
            ${card_shop("Style")}
            ${card_shop("Reaction")}
            ${card_shop("Token")}
            ${card_shop("Community")}
            ${card_shop("Prize")}

            ${this.hFooter()}
        </div>
      `;
  }





}

function card_shopGuide(){
    return `

           <div class="card playerStylesCard mf-yellow">
              <h3>Coin Stash</h3>
                ${data["Player"][0][0]}'s Coin Collection
              <div style="width:100%;text-align:center;margin:.5em 0 .5em 0;" class="highlight">
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
                    All Transactions
               </div>

                          ${new widget_footer(
                             [widget_fFriend()],
                             [widget_fShare(),widget_fMenu()]
                           ).html()}
           </div>`



}
