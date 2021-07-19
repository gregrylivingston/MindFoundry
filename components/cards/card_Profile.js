//uses the data from the player table.
//One is created for each player.
//active player is stored in slot 0.
class player_card extends card{

  constructor(type, index) {
    super(type,index);
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      let player = data["Player"][this.index];
      return  `
        <div class="card playerStyles-bg" class="${this.docId}">

          <div class="card-header">
            <div class="playerWidget">
              <img class="playerWidget-image"  height="64px" src="${player[data["PlayerKey"].indexOf("imgSrc")]}">
              <div class="playerWidget-name"><i>${player[data["PlayerKey"].indexOf("title")]}</i></div>
            </div>
           </div>
           <div class="card-section playerStyles">
              <h3>Player Card</h3>
              ${widget_player(player)}
           </div>
           <div class="card-section playerStyles">
              <h3>Progress</h3><br>
             ${widget_attributeSummary("Charisma" , 0)}
             ${widget_attributeSummary("Perception" , 0)}
             ${widget_attributeSummary("Wisdom" , 1)}
             ${widget_attributeSummary("Logic" , 1)}
             ${widget_attributeSummary("Resilience" , 3)}
             ${widget_attributeSummary("Dexterity" , 0)}
           </div>


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
