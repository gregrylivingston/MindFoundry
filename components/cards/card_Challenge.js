
class challenge_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  hInnerContent(){
              return `
                        ${this.hDescription()}
                        ${this.hShowcaseWidget(this)}
                      <div class="card-section playerStyles">
                          You have not completed this challenge.
                          <br>
                           ${this.makeCardProgressBar()}
                            <button class="menuButton"><h2>Submit</h2></button>
                      </div>
                      <div class="card-section playerStyles">
                        Link to a resource
                        <button>More Resources</button>
                      </div>
                      <div class="card-section playerStyles">
                        <h1>${this.branch}</h1>
                      </div>
            `

  }
}
