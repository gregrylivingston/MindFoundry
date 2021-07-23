
function card_player(player){
      return `
             <div class="card-section playerStylesCard">
                <h3>Player</h3>
                ${widget_player(player)}
                <div style="width:100%;text-align:center;margin:.5em 0 .5em 0;" class="playerStyles">
                  <img style="width:50%;" src="${player[data["PlayerKey"].indexOf("imgSrc")]}">
                </div>
                <div style="width:100%;display:inline-flex;justify-content:space-between;">
                   ${widget_attributeSummary("Charisma" , 0)}
                   ${widget_attributeSummary("Perception" , 0)}
                 </div>
                 <div style="width:100%;display:inline-flex;justify-content:space-between;">
                  ${widget_attributeSummary("Wisdom" , 1)}
                  ${widget_attributeSummary("Logic" , 1)}
                  </div>
                  <div style="width:100%;display:inline-flex;justify-content:space-between;">
                   ${widget_attributeSummary("Resilience" , 3)}
                   ${widget_attributeSummary("Dexterity" , 0)}
                 </div>

                            ${new widget_footer(
                               [widget_fFriend()],
                               [widget_fShare(),widget_fMenu()]
                             ).html()}
             </div>`
}



function  widget_attributeSummary(char , lvl){
  return `
        <div class="playerStylesButton attributeRow" onclick="showPage('Character','','${char}')">
          <img height="30px" src="img/Character/${char}.png">
          <div style="display:inline-block;width:80%;padding-left:.3em;">
            ${char}
            <div style="max-width:80%;display:inline-block">
              ${widget_level(lvl)}
            </div>
          </div>
        </div>
  `

}
