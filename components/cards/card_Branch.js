class branch_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType(this.title + " Branch")}
            ${widget_header(this.badgeImg,this.title,widget_progressBar())}
            ${widget_description(this.Description)}
            ${this.makeChallenges()}
            ${this.hFooter()}
        </div>
      `;
  }

  makeChallenges(){
        this.challenges = `
            <div class="card-section">
              <h3 style="text-align:left;">
                Recommended Challenges
                <a style="font-size:.6em;">See All</a>
              </h3>
            </div>
        `;
        var mychallenges = shuffle(data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf("branch")] == this.title));
        console.log(mychallenges.length);
        for (var i = 0 ; (i < 2 )  ; i ++){
          if ( mychallenges[i]!== undefined){
          this.challenges+=`
              <div class="card-section playerStyles">
                <h3 style="width:100%;display:inline-flex;">
                      <div style="width:70%">${mychallenges[i][0]}</div>
              </div>
          `
          }
        }

        return this.challenges;

    }
}
