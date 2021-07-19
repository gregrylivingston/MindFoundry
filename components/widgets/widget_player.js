

function widget_player(player){
      return `
        <div class="playerWidget playerStyles">
          <img class="playerWidget-image"  height="32px" src="${player[data["PlayerKey"].indexOf("imgSrc")]}">
          <div class="playerWidget-name"><i>${player[data["PlayerKey"].indexOf("title")]}</i></div>
          <div style="width:50%">

                <div class="playerWidget-item"  onclick="setCardsByMenu('Showcase')">

                    ${data["Showcase"].filter(x=>x[data["ShowcaseKey"].indexOf("Player")]==player[data["PlayerKey"].indexOf("title")]).length}
                    <img class="menuButton-image" src="img/menu/menu_challenges.png">
                    2
                    <img class="menuButton-image" src="img/menu/award.png">

                </div>
                <div class="playerWidget-crest" onclick="setCardsByMenu('Club')" style="z-index:9999;">
                  <img height="32px" src="img/club/${player[data["PlayerKey"].indexOf("club")]}.png">
                </div>
            </div>
        </div>
      `
}
function widget_playerByName(player){return  widget_player(data["Player"].find(x=>x[0]==player));}
