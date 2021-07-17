
class challenge_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }

  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType(this.branch + " Challenge")}

            <div class="card-header">
               ${this.badgeImg}

                <div class="card-title-group">
                 <div class="card-title">${this.title}         ${this.hSubtitle()}
                 </div>
                </div>
            </div>



            ${this.hInnerContent()}
            ${this.hFooter()}
        </div>
      `;
  }
  hInnerContent(){
              return `
                        ${this.hDescription()}
                        ${widget_showcase("Challenge",this.title)}
                      <div class="card-section playerStyles2">
                          You have not completed this challenge.
                          <br>
                           ${widget_progressBar()}
                            <button class="menuButton"><h2>Submit</h2>
                            </button>
                      </div>
                      <div class="playerStyles-cardSection">
                        Link to a resource
                        <button>More Resources</button>
                        <h1>Branch Resource: ${this.branch}</h1>
                      </div>


            `

  }
  hSubtitle(){
              return `<div class="card-subtitle">
                      <div style="font-size:.7em;padding-top:.3em;">
                          Skill - - - -<br>
                          Effort - - -
                      </div>
                      </div>`
  }
}
