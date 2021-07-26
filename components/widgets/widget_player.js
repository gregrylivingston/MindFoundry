

function widget_player(player){
      return `
        <div class="playerWidget">
          <div class="playerWidget-crest" onclick="setCardsByMenu('Club')" style="z-index:9999;">
            <img src="img/club/${player[data["PlayerKey"].indexOf("club")]}.png">
          </div>
          <div style="width:90%;align-items:center;display:inline-flex;justify-content:start;">
            <img class="playerWidget-image" src="${player[data["PlayerKey"].indexOf("imgSrc")]}">
            <div class="playerWidget-name">${player[data["PlayerKey"].indexOf("title")]}</div>
            <div class="playerWidget-item"  onclick="setCardsByMenu('Showcase')">
                ${data["Showcase"].filter(x=>x[data["ShowcaseKey"].indexOf("Player")]==player[data["PlayerKey"].indexOf("title")]).length}
                    <img class="menuButton-image" src="img/menu/award.png">
            </div>

            </div>
        </div>
      `
}
function widget_playerByName(player){return  widget_player(data["Player"].find(x=>x[0]==player));}




function getAllPlayerAttributes(){
  return `
    <div class="cardBlock">
     ${widget_attributeSummary("Charisma" , 0)}
     ${widget_attributeSummary("Perception" , 0)}
     </div>
     <div class="cardBlock">
    ${widget_attributeSummary("Wisdom" , 1)}
    ${widget_attributeSummary("Logic" , 1)}
    </div>
    <div class="cardBlock">

     ${widget_attributeSummary("Resilience" , 3)}
     ${widget_attributeSummary("Dexterity" , 0)}
     </div>
   `
}

function  widget_attributeSummary(char , lvl){
  return `
        <div class="playerStylesButton half-button" onclick="showPage('Character','','${char}')">
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
