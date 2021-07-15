



function widget_player(player){
      return `
        <div class="playerWidget">
          <img class="playerWidget-image" src="${player[data["PlayerKey"].indexOf("badge")]}">
          <div class="playerWidget-name"><i>${player[data["PlayerKey"].indexOf("title")]}</i></div>
          <div style="width:50%">

                <div class="playerWidget-item">
                  ${data["Showcase"].filter(x=>x[data["ShowcaseKey"].indexOf("Player")]==player[data["PlayerKey"].indexOf("title")]).length} <img height="32ppx" src="img/menu/menu_challenges.png">
                </div>
                <div class="playerWidget-item">
                  2 <img style="padding-left:.2em" img src="img/menu/award.png">
                </div>
                <div class="playerWidget-item" onclick="loadMenu('Club')" style="z-index:9999;">
                  <img height="32ppx" src="img/club/${player[data["PlayerKey"].indexOf("club")]}.png">
                </div>
            </div>
        </div>
      `

}

function widget_playerByName(player){

      return  widget_player(data["Player"].find(x=>x[0]==player));
}
