//uses the data from the player table.
//One is created for each player.
//active player is stored in slot 0.
class section_profile extends section{

  constructor(type, index) {
    super(type,index);
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){


      let player = data["Player"][this.index];

      let allCards = myCards.forEach(x=>x.cardHtml);

      return  `
        <div class="section playerStyles-bg" class="${this.docId}">

          <div class="card-header">
              <h3>${player[data["PlayerKey"].indexOf("title")]}</h3>
           </div>

           ${myCards.find(x=>x.title==this.title).cardHtml}
           ${get_cards("title","Genius Shop")}
           ${get_cards("owner",this.title)}
          

        </div>




      `;
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}
}
