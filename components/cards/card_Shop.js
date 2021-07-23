function card_shop(shopItem){
      return `
             <div class="card-section playerStylesCard">
                <h3>Background</h3>
                <h2>Dark Mode</h2>
                <div style="width:100%;height:12em;text-align:center;margin:.5em 0 .5em 0;" class="playerStyles">
                  <img style="width:50%;" src="">
                </div>
                <div style="width:100%;display:inline-flex;justify-content:space-between;">
                    12 coin
                 </div>
                 <div style="width:100%;display:inline-flex;justify-content:space-between;">

                  </div>
                  <div style="width:100%;display:inline-flex;justify-content:space-between;">

                 </div>

                            ${new widget_footer(
                               [widget_fFriend()],
                               [widget_fShare(),widget_fMenu()]
                             ).html()}
             </div>`
}
