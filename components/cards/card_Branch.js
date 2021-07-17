
class branch_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType(this.title + " Badge")}
            ${widget_header(this.badgeImg,this.title,widget_progressBar())}
            ${widget_description(this.Description)}
            ${this.makeChallenges()}
            ${this.hFooter()}
        </div>
      `;
  }

  makeChallenges(){
        this.challenges = "";
        let mychallenges = data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf("branch")] == this.title);
        mychallenges.forEach(x=>{

            this.challenges+=`
                <div class="card-section playerStyles">
                  <h3 style="width:100%;display:inline-flex;">
                        <div style="width:70%">${x[0]}</div>




                </div>
            `
        })
        return this.challenges;

    }
}
