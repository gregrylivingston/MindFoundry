



function widget_player(player){
      return `
        <div class="playerWidget">
          <img class="playerWidget-image" src="${player[data["PlayerKey"].indexOf("badge")]}">
          <div class="playerWidget-name"><i>${player[data["PlayerKey"].indexOf("title")]}</i></div>
          <div style="width:50%">
            <img height="32ppx" src="img/club/${player[data["PlayerKey"].indexOf("club")]}.png">

            <b>3 <img height="32ppx" src="img/menu/menu_challenges.png">
                &nbsp 2 <img src="img/menu/award.png">
            </b>
            </div>
        </div>
      `

}

function widget_playerByName(player){

      return  widget_player(data["Player"].find(x=>x[0]==player));
}
