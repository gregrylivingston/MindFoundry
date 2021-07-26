//card item types...

/*
Styles (avatar, background,)
        Unlocked  unlocked
Reactions (emoticons, awards)
            unlocked / accrued&spent

Tokens (League, Tourney, Friend)
        accrued&spent (league is subscribe)
Prizes ()
Community Shop ()




*/


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

function card_shop_items(shop){
    let shopItems = data["ShopItem"].filter(x=>x[data["ShopItemKey"].indexOf("type")]==shop);
        shophtml = "";
        shopItems.forEach(x=>{
          shophtml+= card_shop_item(x);
        })

    return shophtml
}


function card_shop(shop){
      let thisShop = data["Shop"].find(x=>x[0]==shop);
      let  desc = thisShop[data["ShopKey"].indexOf("Description")];
      let  imgSrc = thisShop[data["ShopKey"].indexOf("imgSrc")];

      let shopItems = data["ShopItem"].filter(x=>x[data["ShopItemKey"].indexOf("type")]==shop);
      let  shopProgress = "0 / " + shopItems.length + " Unlocked";
      return `
             <div class="card playerStylesCard mf-yellow">
                <h3>Genius Shop</h3>
                <h2>${shop} Shop</h2>
                <div style="width:100%;height:12em;text-align:center;margin:.5em 0 .5em 0;" class="highlight">
                  <img style="width:50%;" src="${imgSrc}">
                </div>
                <div style="width:100%;display:inline-flex;justify-content:space-between;">
                    ${desc}
                 </div>
                 <div class="menuButton" style="width:100%;display:inline-flex;align-items:center;justify-content:center;font-size:2em;">
                    ${shopProgress}
                  </div>
                  <div style="width:100%;display:inline-flex;justify-content:space-between;">

                 </div>

                            ${new widget_footer(
                               [],
                               [widget_fShare(),widget_fMenu()]
                             ).html()}
             </div>`
}
