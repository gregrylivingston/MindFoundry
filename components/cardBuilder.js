

class card {
  constructor(type, index) {
    this.type = type;
    this.index = index;
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
    this.badgeImg = '<img class="card-header-img" src="img/Badge/'+this.badge +'4.png">';
    this.characterImg = '<img class="card-header-img" src="img/Character/'+this.Character +'.png">';
    this.mediaType = "Image";
    this.docId = this.type + this.index;
    if ( this.type=="Character"){
        this.Character="";
        this.badge=this.title;
        this.badgeImg='<img class="card-header-img" src="img/Character/'+this.badge +'4.png">';
        this.characterImg='<img class="card-header-img" src="img/Character/'+this.badge +'.png">';
        this.badge="";
        this.badgeImg="";

    }

    ( brains[difficultyLevels.indexOf(this.Difficulty)] !== undefined ) ? this.brains = brains[difficultyLevels.indexOf(this.Difficulty)]: this.brains="";
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="${this.docId}">

          <div class="card-type">
            <div>${this.type}</div>
          </div>
            ${this.makeCardHeader()}
            ${this.makeCardInnerContent()}
          ${this.makeCardFooter()}
        </div>
      `;
  }
  addToFeed(){
        document.getElementById("cards").innerHTML+=this.cardHtml;
  }
  makeCardInnerContent(){

    switch (this.type){
      case "Challenge":
                return `
                        <div class="card-section playerStyles">

                          <p>${this["Description"]}</p>
                        </div>
                        <div class="card-section playerStyles" style="vertical-align:top;height:14em;">
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
                        </div>

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
              `
              break

          case "Showcase":
              return makeCardOwnershipWidet()
          case "Event":
              return "hello world Events"
          case "Character":
              return this.getCharacterWidget()
          default:
              return "this card does not have an inner content type"
      }
  }
  makeCardOwnershipWidget(){
    return `<div class="card-description">

    <div style="font-size:1.65em;">My Great Monologue</div>
          <div>
              <button class="little-button">3 <img src='img/menu/menu_geniusshop.png' height='32px'> | :) | Emoticons</button>

              <div class="playerWidget" onclick="loadMenu('mmenu')" style="width:10em !important;">
                          <img class="playerWidget-image" src="img/avatar/avatar_cuteawil.png">
                          <div class="playerWidget-name" style="font-size:.75em;width:80%">Spellbound on 09/27/21</div>
              </div>
          </div>`
  }
  makeCardHeader(){
    let headerDetails = "";
    let subtitle = "";
    if ( this.type == "Challenge" || this.type == "Event"){
         headerDetails= ` <div class="" style="width:18%;display:inline-block;text-align:left">${this.Character}</div>
           <div class="" style="width:60%;display:inline-block;text-align:center">${this.brains}</div>
           <div class="" style="width:18%;display:inline-block;text-align:right;">${this.badge.replace("_"," ")}</div>
           `;
          (this.type == "Challenge")?subtitle=`<div class="card-subtitle">Incomplete</div>`:'';
     } else if (this.type == "Character"){
       subtitle= `<div class="card-subtitle">
               <div style="font-size:.7em;padding-top:.3em;">
               Lvl 0
               <div class="progressBar-outer playerStyles" style="width:50%;">
                 <div class="progressBar-inner" ></div>
               </div>
               0 / 10 L
               </div>
               </div>`;
      }
       return  `<div class="card-header">
          ${this.characterImg}

      <div class="card-title-group">
        <div class="card-title">${this.title}</div>
         ${subtitle}
      </div>
          ${this.badgeImg}
          ${headerDetails}
    </div>

    `

  }
  makeCardFooter(){
    return `
    <div class="card-footer">
      <div class="card-footer-left"></div>
      <div class="card-footer-right">
      <button class="little-button">+ React</button><button class="little-button">+ Favorite</button>
          <button class="little-button">+ React</button><button class="little-button">+ Award</button>
          <button class="little-button">+ Share</button><button class="little-button">...</button>
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

  getCharacterWidget(char){

      let mychar =  data["Character"].filter(x=>x[0] == this.title)[0];
          badgeHolder = "";
          data["Badge"].filter(x=>x[1]==this.title).forEach((x,i)=>{
            badgeHolder+='<img src="img/Badge/' + x[0] + '2.png" style="display:inline;width:5em;">';
            (i==5)?badgeHolder+='<br>':'';
          })
      return `
      <div class="card-section playerStyles">
        ${this.description}
      </div>
      <div class="card-section playerStyles">
        <div>
          <h3>Badges</h3>
        </div>
        <div>${badgeHolder}</div>
      </div>

      `

  }
}


// ** Initialize Cards

const eventBadges = ["Mind Foundry Heroes","Minecraft","Rocket League"];
const difficultyLevels = ["Very Easy","Easy","Medium","Hard","Very Hard"];
const brains = [
        "<img src='img/brain.png'>",
        "<img src='img/brain.png'><img src='img/brain.png'>",
        "<img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'>",
        "<img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'>",
        "<img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'><img src='img/brain.png'> <img src='img/brain.png'>",
      ];
//build challenge cards
data["Challenge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new card("Challenge",i)):'';});
//build event cards
eventBadges.forEach((badge,i)=>{
   let eventsInBadge = data["Event"].filter(b=>b[1]==badge);
   cards.push(new card("Event",i));
})
//build character chards
data["Character"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new card("Character",i)):'';});
