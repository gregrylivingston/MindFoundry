
class challenge_card extends section{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }

  makeCardHtml(){
      return  `
        <div class="section playerStyles" id="${this.docId}">
            ${widget_cardType(this.branch + " Challenge")}
            ${widget_header(this.badgeImg,this.title,this.hSubtitle())}
            ${widget_description(this.Description)}


            ${this.hInnerContent()}
            ${widget_resource(this)}
        </div>
        ${widget_showcase("Challenge",this.title)}

      `;
  }
  hInnerContent(){
              return `
                      <div class="card-section playerStyles">
                          You have not completed this challenge.
                          <br>
                           ${widget_progressBar()}
                            <button class="menuButton"><h2>Submit</h2>
                            </button>
                      </div>


            `

  }
  hSubtitle(){
              return `<div class="card-subtitle">
                      <div style="font-size:.85em;padding-top:.3em;">
                          Skill: ${widget_level(this.Skill)}<br>
                          Effort:  ${widget_level(this.Effort)}
                      </div>
                      </div>`
  }
}
