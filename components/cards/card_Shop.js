
class shop_card extends card{

  constructor(type, index) {
    super(type,index);
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
    this.badgeImg = '<img class="card-header-img" src="'+this.badge +'">';
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
//// NOTE:
  hInnerContent(){
    return this.hDescription() + this.hFakeShopWidget()
  }
  hPreTitle(){  return `
        <div class="card-type">
          <div style="display:inline-flex;align-items:center;">
              ${this.title} Shop
          </div>

        </div>`
      }
  hFakeShopWidget(){
      return `
        <div class="card-section">
          <button class="half-button">
              <img height="30px" src="img/brain.png">
              2 <img height="30px;" src="img/coin.png">
          </button>
          <button class="half-button">
              <img height="30px" src="img/brain.png">
              2 <img height="30px;" src="img/coin.png">
          </button>
          <button class="half-button">
              <img height="30px" src="img/brain.png">
              2 <img height="30px;" src="img/coin.png">
          </button>
          <button class="half-button">
              <img height="30px" src="img/brain.png">
              2 <img height="30px;" src="img/coin.png">
          </button>

              <p>${this.title} Collected: 2/17
              <br><br>
              <button class="menuButton">View All</button></p>

        </div>
      `;

  }
  hHeader(){
       return  `<div class="card-header">
          ${this.badgeImg}

      <div class="card-title-group">
        <div class="card-title">${this.title}         ${this.hSubtitle()}</div>
      </div>
        <!--  ${this.branchImg}-->
    </div>

    `

  }


}
