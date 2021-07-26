function card_shop_item(shopItem){
      return `
             <div class="card playerStylesCard mf-orange">
                <h3>
                    ${shopItem[data["ShopItemKey"].indexOf("type")]}
                    ${shopItem[data["ShopItemKey"].indexOf("subType")]}
                </h3>
                <h2>
                    ${shopItem[data["ShopItemKey"].indexOf("title")]}
                </h2>
                <div style="width:100%;height:12em;text-align:center;margin:.5em 0 .5em 0;" class="highlight cardFrame">
                  <img style="width:50%;" src="${shopItem[data["ShopItemKey"].indexOf("imgSrc")]}">
                </div>
                <div style="width:100%;display:inline-flex;justify-content:center;">
                    ${shopItem[data["ShopItemKey"].indexOf("coin")]}
                    <img src="img/coin.png" style="height:2em;">
                 </div>
                 <div style="width:100%;display:inline-flex;justify-content:space-between;">
                    ${shopItem[data["ShopItemKey"].indexOf("Description")]}

                  </div>
                  <div style="width:100%;display:inline-flex;justify-content:space-between;">

                 </div>

                            ${new widget_footer(
                               [],
                               [widget_fShare(),widget_fMenu()]
                             ).html()}
             </div>`
}

var shophtml;
