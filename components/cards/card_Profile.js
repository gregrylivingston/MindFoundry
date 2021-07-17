
class player_card extends card{

  constructor(type, index) {
    super(type,index);
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
    this.docId = this.type + this.index;
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
