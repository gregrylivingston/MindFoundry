



function widget_player(player){
      return `
        <div class="playerWidget " onclick="loadMenu('Challenge')">
          <img class="playerWidget-image" src="${player[data["PlayerKey"].indexOf("badge")]}">
          <div class="playerWidget-name"><i>${player[data["PlayerKey"].indexOf("title")]}</i></div>
          <img class="playerWidget-image" src="${player[data["PlayerKey"].indexOf("profileBadgeLeft")]}">
          <img class="playerWidget-image" src="${player[data["PlayerKey"].indexOf("profileBadgeRight")]}">
          <div class="playerWidget-level playerStyles"><b>${player[data["PlayerKey"].indexOf("level")]}</b></div>
        </div>
      `

}

function widget_playerByName(player){
      console.log(player);
      console.log(data["Player"].find(x=>x[0]==player));
      console.log( data["Player"][data["Player"][0].indexOf(player)]);
      return  widget_player(data["Player"].find(x=>x[0]==player));
}
