

function widget_player(player){
      return `
        <div class="playerWidget">
          <div class="playerWidget-crest" onclick="setCardsByMenu('Club')" style="z-index:9999;">
            <img src="img/club/${player[data["PlayerKey"].indexOf("club")]}.png">
          </div>
          <div style="width:90%;align-items:center;display:inline-flex;justify-content:start;">
            <img class="playerWidget-image" src="${player[data["PlayerKey"].indexOf("avatar")]}">
            <div class="playerWidget-name">${player[data["PlayerKey"].indexOf("title")]}</div>
            <div class="playerWidget-item"  onclick="setCardsByMenu('Showcase')">
                    <img class="menuButton-image" src="img/menu/award.png">
            </div>

            </div>
        </div>
      `
}
function widget_playerByName(player){return  widget_player(data["Player"].find(x=>x[0]==player));}



function  widget_attributeSummary(char , lvl){
  return `
        <div class="half-button" onclick="showPage('Character','','${char}')">
          ${lvl}<img height="30px" src="img/Character/${char}.png">
          <div style="display:inline-block;width:80%;padding-left:.3em;">
            ${char}
          <!--  <div style="max-width:80%;display:inline-block">
              ${widget_level(lvl)}
            </div>-->
          </div>
        </div>
  `

}
