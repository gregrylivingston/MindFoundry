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
        <div class="card playerStyles-bg" id="${this.docId}">
            ${widget_cardType("Player Card")}
          <div class="card-header">
            ${widget_player( data["Player"][this.index])}
           </div>
           ${widget_showcase("Player",this.title)}
           ${widget_leaderboard()}

           ${new widget_footer(
              [widget_fFriend()],
              [widget_fShare(),widget_fMenu()]
            ).html()}

        </div>
      `;
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}
}
