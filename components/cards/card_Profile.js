
class player_card extends card{

  constructor(type, index) {
    super(type,index);
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
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
            return `
            ${widget_showcase("Player",this.title)}
            `
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
       ${widget_player( data["Player"][this.index])}


        </div>
       `
  }

  hFooter(){
          return `
          <div class="card-footer">
            <div class="card-footer-left">
                  <button class="selectButton playerStyles"><img src="img/menu/menu_usercrew.png"></button>

                  </div>
            <div class="card-footer-right">
              <button class="selectButton playerStyles"><img src="img/menu/share.png"></button>
              <button class="selectButton playerStyles">...</button>
            </div>
          </div>`
        }
}

function addMediaPreview(mediaItem){

  let img1 = mediaItem[data["ShowcaseKey"].indexOf("src")];
  let img1Title = mediaItem[data["ShowcaseKey"].indexOf("title")];
  let img1Chal = mediaItem[data["ShowcaseKey"].indexOf("Challenge")];
  return `
                <div class="layer2">
                  <p>${img1Title}</p>
                </div>
                <div class="media">


                  <img src="${img1}" style="max-width:100%;object-fit:cover;">
                  <div class="bottom-layer2">
                  </div>
                </div>
                <p>${img1Chal}</p>

            </div>
`
}

function addShowcaseButton(){
return ` <div class="layer2">
    <p></p>
  </div>
  <div class="media">

        +
        Add a showcase to your player card from your completed challenges.
    <div class="bottom-layer2">
      <p></p>
    </div>
  </div>
</div>`
}
