
class player_card extends card{

  constructor(type, index) {
    super(type,index);
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
    this.badgeImg = '<img class="card-header-img" src="'+this.badge +'">';
    this.characterImg = '<img style="height:1em;" src="'+this.profileBadgeLeft +'">';
    this.branchImg ='<img class="card-header-img" src="'+this.profileBadgeRight +'">';
    this.docId = this.type + this.index;
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
            return           this.hPlayerProgress() +
            this.hPlayerFocus() +
            this.hShowcaseWidget() +
            this.hReactFeed() +
            this.hTrophyFeed()
  }
  hPreTitle(){  return `
        <div class="card-type">
          <div style="display:inline-flex;align-items:center;">
              Player Card
          </div>
        </div>`
      }

  hHeader(card){
       return  `<div class="card-header">
          ${this.badgeImg}

      <div class="card-title-group">
        <div class="card-title">${this.title}         ${this.hSubtitle()}</div>
      </div>
        <!--  ${this.branchImg}-->
    </div>

    `

  }

  hReactFeed(){
     return `
        <div class="card-section">
            <h3>Recent Reactions</h3>
            <button class="half-button">
                Yup
            </button>
            <button class="half-button">
                +1
            </button>
            <button class="half-button">
                Yeehaw
            </button>
            <button class="half-button">
                Brew
            </button>
            <p><button class="topnav-button playerStyles">More Reactions</button></p>
        </div>
     `
  }

  hTrophyFeed(){
    return `
       <div class="card-section">
           <h3>Recent Trophies</h3>
           <button class="half-button">
               Yup
           </button>
           <button class="half-button">
               +1
           </button>
           <button class="half-button">
               Yeehaw
           </button>
           <button class="half-button">
               Brew
           </button>
           <p><button class="topnav-button playerStyles">More Trophies</button></p>

       </div>
    `

  }

  hPlayerProgress(){
    return `
        <div class="card-section">
          <h3>Player Progress</h3>
        </div>
        <div class="card-section">
          <h3>Top Character   |   Top Badges</h3>
        </div>
    `
  }

  hPlayerFocus(){
      return `
        <div class="card-section">
          <h3>Focus Badges</h3>
        </div>
      `
  }

}
