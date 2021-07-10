//header
//innerContent
//footer

class card {
  constructor(type, index) {
    this.type = type;
    this.index = index;
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
    this.badgeImg = '<img class="card-header-img" src="img/Badge/'+this.badge +'4.png">';
    this.characterImg = '<img style="height:1em;" src="img/Character/'+this.Character +'.png">';
    this.branchImg ='<img class="card-header-img" src="img/branch/'+this.branch +'.png">';
    this.mediaType = "Image";
    this.docId = this.type + this.index;
    (this.branch === undefined )? this.branch = "":'';
    if ( this.type=="Character"){
        this.Character="";
        this.badge=this.title;
        this.badgeImg='<img class="card-header-img" src="img/Character/'+this.title +'.png">';
        this.characterImg='<img style="width:1em;" src="img/Character/'+this.badge +'.png">';
        this.branchImg='';
        this.badge="";

    }

    ( brains[difficultyLevels.indexOf(this.Difficulty)] !== undefined ) ? this.brains = brains[difficultyLevels.indexOf(this.Difficulty)]: this.brains="";
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">

          <div class="card-type">
            <div style="display:inline-flex;align-items:center;">${this.characterImg} &nbsp ${this.badge.replace("_"," ")} ${this.type}</div>
          </div>
            ${HCardHeader(this)}
            ${this.makeCardInnerContent()}
          ${HCardFooter(this)}
        </div>
      `;
  }
  addToFeed(){
        document.getElementById("cards").innerHTML+=this.cardHtml;
  }
  makeCardInnerContent(){

    switch (this.type){
      case "Challenge":
                return `
                          ${HCardDescription(this)}
                          ${HCardShowcaseWidget(this)}
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
              break

          case "Showcase":
              return HCardOwnerWidget(this)
          case "Event":
              return HCardDescription(this)
          case "Character":
              return  HCardDescription(this) + HCardBadgesByCharacter(this)
          default:
              return "this card does not have an inner content type"
      }
  }


  makeCardProgressBar(){
    return `
          <div class="progressBar-outer playerStyles" style="width:50%;">
            <div class="progressBar-inner" ></div>
          </div>
            0 / ${this.maxPoints} <img src='img/menu/menu_geniusshop.png' height='32px'>`

  }

}
