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

   hOwnerWidget(card){
    return `<div class="card-section">
    <div style="font-size:1.65em;">My Great Monologue</div>
          <div>
              <button class="little-button">3 <img src='img/menu/menu_geniusshop.png' height='32px'> | :) | Emoticons</button>
              <div class="playerWidget" onclick="loadMenu('mmenu')" style="width:10em !important;">
                          <img class="playerWidget-image" src="img/avatar/avatar_cuteawil.png">
                          <div class="playerWidget-name" style="font-size:.75em;width:80%">Spellbound on 09/27/21</div>
              </div>
          </div>`
  }
  hDescription(){ return `<div class="card-section playerStyles-section">${this.Description}</div>`}
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

  makeCardProgressBar(){
    return `
          <div class="progressBar-outer playerStyles" style="width:50%;">
            <div class="progressBar-inner" ></div>
          </div>
            0 / ${this.maxPoints} <img src='img/menu/menu_geniusshop.png' height='32px'>`

  }

}





class event_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  hInnerContent(){
    return this.hDescription()
  }
}



class showcase_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();

  }

  hInnerContent(){
    return hOwnerWidget(this)
  }
}
