
class challenge_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }

  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType(this.branch + " Challenge")}
            ${widget_header(this.badgeImg,this.title,this.hSubtitle())}
            ${widget_description(this.Description)}
            ${widget_showcase("Challenge",this.title)}


            ${this.hInnerContent()}
            ${widget_resource(this)}
        </div>
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
