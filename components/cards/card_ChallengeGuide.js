//uses the data from the player table.
//One is created for each player.
//active player is stored in slot 0.
class challengeGuide_card extends card{

  constructor(type, index) {
    super(type,index);
    this.type = "challengeGuide";
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType("Challenge Guide")}

            <div class="card-header">
                <h3>Challenge Guide</h3>
             </div>
            ${this.hPlayerProgress()}
            ${this.hFooter()}
        </div>
      `;
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}



    hPlayerProgress(){
      return `
          <div class="card-section">
            <h3>Player Progress</h3>
          </div>
          <div class="card-section playerStyles">
            <h3>Top Character</h3>


          <p><img src="img/Character/Artist.png"></img></p>

          <p>Spellbound Level 2 Artist Trophy</p>
          </div>
        <br>
          <div class="card-section playerStyles">
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
      `
    }


}
