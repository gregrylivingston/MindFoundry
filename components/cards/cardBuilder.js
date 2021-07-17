//header
//innerContent
//footer



class card {
  constructor(type, index) {
    this.type = type;
    this.index = index;
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
    this.docId = this.type + this.index;
    this.createBadgeImage();
  }
  createBadgeImage(){
    if (this.imgSrc!==undefined&&this.imgSrc!==false){
        if (this.imgSrc.indexOf(".png")==-1&&this.imgSrc.indexOf(".jpeg")==-1){
          this.imgSrc+="1.png"
        }
        this.badgeImg = '<img class="card-header-img" src="'+this.imgSrc +'">';
      }
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

  hFooter(){
          return ``
        }
  hDescription(){ return `<div class="card-section playerStyles-section">${this.Description}</div>`}

}

var badgeHolder;
