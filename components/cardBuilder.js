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
    this.docId = this.type + this.index;
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">


            ${this.hPreTitle()}
            ${HCardHeader(this)}
            ${this.hInnerContent()}
          ${this.hFooter(this)}
        </div>
      `;
  }
  addToFeed(){document.getElementById("cards").innerHTML+=this.cardHtml;}

  hInnerContent(){ return "this card does not have an inner content type"}
  hPreTitle(){  return `
        <div class="card-type">
          <div style="display:inline-flex;align-items:center;">
              ${this.characterImg} &nbsp ${this.badge.replace("_"," ")} ${this.type}
          </div>
        </div>`
      }
  hFooter(){
          return `
          <div class="card-footer">
            <div class="card-footer-left">
                  <button class="topnav-button playerStyles"><img src="img/menu/favorite_unchecked.png"></button>
                  <button class="topnav-button playerStyles"><img src="img/menu/react.png"></button>
                  <button class="topnav-button playerStyles"><img src="img/menu/award.png"></button>

                  </div>
            <div class="card-footer-right">
              <button class="topnav-button playerStyles"><img src="img/menu/share.png"></button>
              <button class="topnav-button playerStyles">...</button>
            </div>
          </div>`
        }
  makeCardProgressBar(){
    return `
          <div class="progressBar-outer playerStyles" style="width:50%;">
            <div class="progressBar-inner" ></div>
          </div>
            0 / ${this.maxPoints} <img src='img/menu/menu_geniusshop.png' height='32px'>`

  }

}


class challenge_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  hInnerContent(){
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

  }
}


class character_card extends card{
  constructor(type, index){
      super(type, index);
      this.Character="";
      this.badge=this.title;
      this.badgeImg='<img class="card-header-img" src="img/Character/'+this.title +'.png">';
      this.characterImg='<img style="width:1em;" src="img/Character/'+this.badge +'.png">';
      this.branchImg='';
      this.cardHtml = this.makeCardHtml();
  }
  hInnerContent(){
    return  HCardDescription(this) + HCardBadgesByCharacter(this)
  }
}


class event_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  hInnerContent(){
    return HCardDescription(this)
  }
}



class shocase_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();

  }

  hInnerContent(){
    return HCardOwnerWidget(this)
  }
}
