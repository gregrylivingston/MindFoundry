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
      return  `
        <div class="section playerStyles-bg" class="${this.docId}">

          <div class="card-header">
              <h3>${player[data["PlayerKey"].indexOf("title")]}</h3>
           </div>

           ${makeAllCards()}
           ${card_player(player)}
           ${card_shopGuide()}
            <div class="card playerStylesCard">
              <h3>Top Badges<h3>
              <div class="acting_badgeprogress">
              <p>Acting Level 1<img src="img/badge/acting1.png" style="height:32px;"> 04/20</p>
                <div class="progressBar-outer playerStyles" style="width:90%;margin-bottom:2px;">
                  <div class="progressBar-inner" style="width:20%;">
                  </div>
                </div>
              </div>
              <div class="animation_badgeprogress">
              <p>Animation Level 1<img src="img/badge/animation1.png" style="height:32px;"> 10/20</p>
                <div class="progressBar-outer playerStyles" style="width:90%;margin-bottom:2px;">
                  <div class="progressBar-inner" style="width:50%;">
                  </div>
                </div>
              </div>
            </div>

        </div>




      `;
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}
}
