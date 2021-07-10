
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


    return this.hShowcaseWidget()

  }
  hPreTitle(){  return `
        <div class="card-type">
          <div style="display:inline-flex;align-items:center;">
              ${this.title} ${this.type}
          </div>
        </div>`
      }

  hShowcaseWidget(){
              return`          <div class="card-section playerStyles2" style="vertical-align:top;height:14em;">
                                    <div style="width:50%;border-right:2px solid white;display:inline-block;height:14em;vertical-align:top;">
                                        <div style="width:100%;height:45%;border-bottom:1px black solid">Showcase Item 1</div>
                                        <div style="width:50%;height:41%;display:inline-block;border-right:1px black solid;">Showcase Item 2</div>
                                        <div style="width:47%;height:41%;display:inline-block;border-left:1px black solid;">Showcase Item 3</div>
                                        <div style="width:100%;height:15%;text-align:center;">Showcase</div>
                                    </div>
                                    <div style="width:45%;display:inline-block;">
                                      Club Leaderboard<br>
                                      <img src="img/Club/korora.png" width="80%;"><br>
                                      Korora
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


  makeCardProgressBar(){
    return `
          <div class="progressBar-outer playerStyles" style="width:50%;">
            <div class="progressBar-inner" ></div>
          </div>
            0 / ${this.maxPoints} <img src='img/menu/menu_geniusshop.png' height='32px'>`

  }
}
