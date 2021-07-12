
class challengeGuide_card extends card{

  constructor(type, index) {
    super(type,index);
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
    this.badgeImg = '<img class="card-header-img" src="'+this.badge +'">';
    this.characterImg = '<img style="height:1em;" src="'+this.profileBadgeLeft +'">';
    this.branchImg ='<img class="card-header-img" src="'+this.profileBadgeRight +'">';
    this.docId = this.type + this.index;
    this.type = "challengeGuide";
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">


            ${this.hPreTitle()}
            ${this.hHeader()}
            ${this.hInnerContent()}
            ${this.hFooter()}
        </div>
      `;
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}

  hInnerContent(){
            return this.hPlayerFocus()
  }
  hPreTitle(){  return `
        <div class="card-type">
          <div style="display:inline-flex;align-items:center;">
              Challenge Guide
          </div>
        </div>`
      }

  hHeader(card){
       return  `<div class="card-header">
       ${widget_player( data["Player"][this.index])}


        </div>
       `/*
          ${this.badgeImg}

      <div class="card-title-group">
        <div class="card-title">${this.title}         ${this.hSubtitle()}</div>
      </div>
        <!--  ${this.branchImg}-->
    </div>
    ${widget_player( data["Player"][this.index])}

    `
*/
  }

  hPlayerFocus(){
      return `
        <div class="card-section">
          <h3>Focus Badges</h3>
          ${widget_playerByName("Spellbound")}
        </div>
      `
  }

}
