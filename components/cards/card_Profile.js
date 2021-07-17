//uses the data from the player table.
//One is created for each player.
//active player is stored in slot 0.
class player_card extends card{

  constructor(type, index) {
    super(type,index);
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType("Player Card")}
          <div class="card-header">
            ${widget_player( data["Player"][this.index])}
           </div>
           ${widget_showcase("Player",this.title)}
           ${widget_leaderboard()}

            <div class="card-footer">
              <div class="card-footer-left">
                    <button class="selectButton playerStyles"><img src="img/menu/menu_usercrew.png"></button>
              </div>
              <div class="card-footer-right">
                <button class="selectButton playerStyles"><img src="img/menu/share.png"></button>
                <button class="selectButton playerStyles">...</button>
              </div>
            </div>

        </div>
      `;
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}
}
