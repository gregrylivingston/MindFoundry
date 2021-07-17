
class shop_card extends card{

  constructor(type, index) {
    super(type,index);
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">
            ${widget_cardType(this.title + " Shop")}
            ${widget_header(this.badgeImg,this.title,"")}
            ${widget_description(this.Description)}
            ${this.hFakeShopWidget()}
            ${this.hFooter()}
        </div>
      `;
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


}
