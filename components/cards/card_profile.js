
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

  hShowcaseWidget(){

              let playerKey = data["ShowcaseKey"].indexOf("Player");
              let titleKey = data["ShowcaseKey"].indexOf("title");
              let challengeKey = data["ShowcaseKey"].indexOf("Challenge");
              let srcKey = data["ShowcaseKey"].indexOf("src");
              var imgSources = data["Showcase"].filter(x=>x[playerKey]==this.title);
              let html="";
              let htmlAppend="";

              if (  imgSources[0] !== undefined ){
                let img1 = ( imgSources[0] !== undefined )? imgSources[0][srcKey]: '';
                let img1Title = ( imgSources[0] !== undefined )? imgSources[0][titleKey]: '';
                let img1Chal = ( imgSources[0] !== undefined )? imgSources[0][challengeKey]: '';
                html+=` <div class="card-section playerStyles2" style="vertical-align:top;">
                          <div style="width:100%;text-align:center;" class="playerStylesButtonHighlight selectButton">
                              ${this.title}'s Showcase ----  ${imgSources.length} <img src="img/menu/menu_challenges.png"> &nbsp 4 <img src="img/menu/react.png"> &nbsp 2 <img src="img/menu/award.png">
                              </div>

                              <div style="width:100%;">

                              <div class="media">
                                <div class="layer">
                                  <p>${img1Title}</p>
                                </div>
                                <div class="bottom-layer">
                                  <p>${img1Chal}</p>
                                </div>
                                <img src="${img1}" style="max-width:100%;object-fit:cover;">
                              </div>
                          </div>
                                          `
                        htmlAppend="</div>";
              }
              if ( imgSources[2] !== undefined){
                  let img2 = ( imgSources[1] !== undefined )? imgSources[1][srcKey]: '';

                  let img2Title = ( imgSources[1] !== undefined )? imgSources[1][titleKey]: '';
                  let img2Chal = ( imgSources[1] !== undefined )? imgSources[1][challengeKey]: '';
                  let img3 = ( imgSources[1] !== undefined )? imgSources[1][srcKey]: '';

                  let img3Title = ( imgSources[2] !== undefined )? imgSources[2][titleKey]: '';
                  let img3Chal = ( imgSources[2] !== undefined )? imgSources[2][challengeKey]: '';
                  html+=`    <div style="width:49%;display:inline-block;">


                      <div class="media">
                        <div class="layer">
                          <p>${img2Title}</p>
                        </div>
                        <div class="bottom-layer">
                          <p>${img2Chal}</p>
                        </div>
                        <img src="${img2}" style="max-width:100%;object-fit:cover;">
                      </div>

                      </div>

                      <div style="width:49%;display:inline-block;">


                      <div class="media">
                        <div class="layer">
                          <p>${img3Title}</p>
                        </div>
                        <div class="bottom-layer">
                          <p>${img3Chal}</p>
                        </div>
                        <img src="${img3}" style="max-width:100%;object-fit:cover;">
                      </div>


                      </div>`;
              }
              html+=htmlAppend;

              return html

  }
}
