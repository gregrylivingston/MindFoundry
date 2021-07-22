
function card_player(player){
      return `
             <div class="card-section playerStyles" style="background:rgba(200,200,200,0.8)">
                <h3>Player</h3>
                ${widget_player(player)}
                <div style="width:100%;text-align:center;border:1px solid white;">
                  <img style="width:50%;" src="${player[data["PlayerKey"].indexOf("imgSrc")]}">
                </div>
                <br>

                 ${widget_attributeSummary("Charisma" , 0)}
                 ${widget_attributeSummary("Perception" , 0)}
                 ${widget_attributeSummary("Wisdom" , 1)}
                 ${widget_attributeSummary("Logic" , 1)}
                 ${widget_attributeSummary("Resilience" , 3)}
                 ${widget_attributeSummary("Dexterity" , 0)}


                            ${new widget_footer(
                               [widget_fFriend()],
                               [widget_fShare(),widget_fMenu()]
                             ).html()}
             </div>`
}
