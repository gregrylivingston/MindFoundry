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
        console.log(this.imgSrc);
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

  hInnerContent(){ return "this card does not have an inner content type"}
  hPreTitle(){  return `
        <div class="card-type">
          <div style="display:inline-flex;align-items:center;">
              ${this.characterImg} &nbsp ${this.badge.replace("_"," ")} ${this.type}
          </div>
        </div>`
      }
  hFooter(){
          return ``
        }

   hOwnerWidget(){
    return `<div class="card-section">
    <div style="font-size:1.65em;">
        ${this.title}
    </div>
          <div>
              <button class="little-button">
                  3 <img src='img/menu/menu_geniusshop.png' height='32px'>
                  2 <img src='img/menu/react.png' height='32px'>
                  1 <img src='img/menu/award.png' height='32px'>
              </button>
              ${widget_playerByName(this.Player)}
          </div>`
  }
  hDescription(){ return `<div class="card-section playerStyles-section">${this.Description}</div>`}
  hShowcaseWidget(){
              return`          <div class="card-section playerStyles2" style="vertical-align:top;">
                                        <h3>Showcase</h3>
                                        <div style="width:100%;">
                                          <img src="img/Showcase/landscape_beach.jpeg" style="max-width:100%;object-fit:cover;">
                                        </div>
                                        <div style="width:49%;display:inline-block;">
                                          <img src="img/Showcase/music_performance.jpg" style="width:100%;object-fit:cover;">
                                        </div>
                                        <div style="width:49%;display:inline-block;">
                                          <img src="img/Showcase/music_studio.jpg" style="width:100%;">
                                        </div>
                                        <div style="width:100%;text-align:center;">
                                          <p><button class="selectButton">Showcase</button></p>
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
  hSubtitle(){
    return ""
  }
  hLeaderboardSolo(){
      return `
        <div class="card-section">
          <h3>Player Leaderboard</h3>
        </div>
          `
  }
  hLeaderboardClub(){

  }
  hLeaderboardSquad(){

  }
  makeCardProgressBar(earned = 0, max = 10){
    return `
          <div class="progressBar-outer playerStyles" style="width:40%;">
            <div class="progressBar-inner" style="width:${earned*10}%"></div>
          </div>
            ${earned} / ${max} <img src='img/menu/menu_geniusshop.png' height='32px'>`
  }
}

var badgeHolder;
