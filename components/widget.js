



function widget_player(player){
      return `
        <div class="playerWidget">
          <img class="playerWidget-image" src="${player[data["PlayerKey"].indexOf("badge")]}">
          <div class="playerWidget-name"><i>${player[data["PlayerKey"].indexOf("title")]}</i></div>
          <div style="width:50%">

                <div class="playerWidget-item"  onclick="loadMenu('Showcase')">

                    ${data["Showcase"].filter(x=>x[data["ShowcaseKey"].indexOf("Player")]==player[data["PlayerKey"].indexOf("title")]).length}
                    <img class="menuButton-image" src="img/menu/menu_challenges.png">
                    2
                    <img class="menuButton-image" src="img/menu/award.png">

                </div>
                <div class="playerWidget-crest" onclick="loadMenu('Club')" style="z-index:9999;">
                  <img height="50px" src="img/club/${player[data["PlayerKey"].indexOf("club")]}.png">
                </div>
            </div>
        </div>
      `

}

function widget_playerByName(player){

      return  widget_player(data["Player"].find(x=>x[0]==player));
}
