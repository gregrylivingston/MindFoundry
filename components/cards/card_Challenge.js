
class challenge_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  hInnerContent(){
              return `
                        ${this.hDescription()}
                        ${this.hShowcaseWidget(this)}
                      <div class="card-section playerStyles2">
                          You have not completed this challenge.
                          <br>
                           ${this.makeCardProgressBar()}
                            <button class="menuButton"><h2>Submit</h2></button>
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
