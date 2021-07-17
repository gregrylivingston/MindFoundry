
class branch_card extends card{
  constructor(type, index){
      super(type, index);
      this.Character="";
      this.badgeImg='<img class="card-header-img" src="img/Character/'+this.badge +'.png">';
      this.characterImg='<img style="width:1em;" src="img/Character/'+this.badge +'.png">';
      this.branchImg='';
      this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType(this.title + " Badge")}


            <div class="card-header">
               ${this.badgeImg}

                <div class="card-title-group">
                 <div class="card-title">${this.title} ${this.hSubtitle()}
                 </div>
                </div>
            </div>

            ${this.hDescription()}
            ${this.makeChallenges()}
            ${this.hFooter()}
        </div>
      `;
  }


  hSubtitle(){
            return `<div class="card-subtitle">
                        ${widget_progressBar()}
                    </div>`;
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
