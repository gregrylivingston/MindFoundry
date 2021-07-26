
class section_challengeGuide extends section{

  constructor(type, index) {
    super(type,index);
    this.type = "challengeGuide";
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="section playerStyles-bg" id="${this.docId}">
            ${widget_cardType("Player Progress")}

            <div class="card-header">
                <h3>Challenge Guide</h3>
             </div>
            ${this.hPlayerProgress()}
            ${this.hFooter()}
        </div>
      `;
  }



    hPlayerProgress(){
      return `
          <div class="card-section playerStyles">
            <h3>Attributes</h3>

              ${widget_attributeSummary("Charisma" , 0)}
              ${widget_attributeSummary("Perception" , 0)}
              ${widget_attributeSummary("Wisdom" , 1)}
              ${widget_attributeSummary("Logic" , 1)}
              ${widget_attributeSummary("Resilience" , 3)}
              ${widget_attributeSummary("Dexterity" , 0)}


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