function cTypeRules(type){
    let rules = {};
    data["cardType"].find(x=>x[0]==type).forEach((x,i)=>{rules[data["cardTypeKey"][i]]=x;});
    return rules
}

class card {
  constructor(index) {
    this.index = index;
    data["cardKey"].forEach((column,i)=> {this[column] = data["card"][this.index][i]});
    this.rules = cTypeRules(this.type);
    this.footer = "";
    this.deck = "";
    this.cardsInDeck = data["card"].filter(x=>x[data["cardKey"].indexOf("parentCard")]==this.title);
    if (this.cardsInDeck.length>0){ this.deck=this.cardsInDeck.length;}
    if ( this.rules.fPin==true || this.rules.fFriend==true || this.rules.fReact==true || this.fAward==true){
      this.footer = new wFooter(this.rules).html()
    }
    this.cardHtml =   this.makeCardHtml();
  }

  makeCardHtml(){
      return  `
      <div class="card" id="card${this.index}">
        <div class="card-inner card${this.index}">
          <div class="flip-card-front playerStylesCard ${this.rules.defaultColor}">
            ${wHeader(this)}


            <h2>${this.title}</h2>
            <div class="cardFrame highlight">
              <img src="${this.img}">
            </div>
            <p>
              ${this.desc}
            </p>

            <!--
            <button  onclick="showPage('Tourney')" class="playerStylesButton half-button" style="height:5em;">
              <h3>Tourneys</h3>
            </button>
            <button class="playerStylesButton half-button" style="height:5em;display:inline-block;text-align:left;">
                    <p>Event Pass</p>
                    <p>+1 <img style="height:1em;" src="img/token_tourney.png"> on June 1st</p>
            </button>
            -->
              ${this.footer}
          </div>

          <div class="flip-card-back playerStylesCard ${this.rules.defaultColor}">
              ${wRHeader(this)}



              <h2>${this.type} Info</h2>

              <div style="height:14em;">
                ${this.rules.info}
              </div>
              <h4 style="text-align:left;">Menu</h4>
              <p style="display:inline-flex;width:100%;width:90%;margin:0em 5% 0em 5%;">
                  <button class="menuButton">Report issue</button><br>
                  <button class="menuButton">Ask for Help</button><br>
              </p>
              <h4>Share</h4>
              <div style="display:inline-flex;width:90%;margin:0em 5% 0em 5%;">
                  <button class="menuButton">Link</button><br>
                  <button class="menuButton">Facebook</button><br>
                  <button class="menuButton">Twitter</button><br>
                  <button class="menuButton playerStyles">Email</button>
              </div>
              <p>Receive 5 <img src="img/coin.png" style="height:1em;"> when someone joins Mind Foundry from your shared post.
              </p>




          </div>

        </div>

      </div>

      `;
  }
  addToFeed(){
  /*    let el = document.createElement("div");
      el.classList.add("playerStyles");
      el.classList.add("card");
      el.classList.add(this.docId);
      el.innerHTML = this.makeCardHtml();

      console.log("add card to masonry");
      console.log(el);
      msnry.appended(el);
  */    document.getElementById("cards").innerHTML+=this.cardHtml;
    }

}



function viewCard(c){
  var el = document.getElementById(c);
  if ( el.classList.contains("fullscreen") == true ){
    el.classList.remove("fullscreen");
    el.children[0].classList.remove("fsView");

  }
  else {
    el.classList.add("fullscreen");
    el.children[0].classList.add("fsView");
  }

}

  var myCards = [];

function makeAllCards(){
  myCards =[];
  for ( var i = 0 ; i < data["card"].length ; i ++ ){
    myCards.push(new card(i));
  }
}
