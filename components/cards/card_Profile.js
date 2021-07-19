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
        <div class="card playerStyles-bg" class="${this.docId}">
            ${widget_cardType("Player Card")}
          <div class="card-header">
            ${widget_player( data["Player"][this.index])}
           </div>

           ${new widget_footer(
              [widget_fFriend()],
              [widget_fShare(),widget_fMenu()]
            ).html()}

        </div>
        <div class="card playerStyles-bg" class="${this.docId}">

        ${widget_showcase("Player",this.title)}
        </div>



      `;
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}
}
