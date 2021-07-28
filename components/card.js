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
    this.footer="";this.deckReport="";this.deck = "";
    ( this.img.indexOf("img")>-1 )? this.media= `<img src="${this.img}">`:this.media = `<iframe width="100%" style="height:100%;border-radius:.5em" src="${this.img}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

//get deck info
    this.cardsInDeck = data["card"].filter(x=>x[data["cardKey"].indexOf("parentCard")]==this.title);
      if  (this.cardsInDeck.length>0){ this.deckReport = `<button class="mini-deck ${this.rules.defaultColor}" onclick="breakDecks('${this.title}')">${this.cardsInDeck.length}</button>`}
    this.deck = getDeckClass(this);


//add bottom widget by card type
    this.cardWidget = "";
    ( widget[this.type] !== undefined )? this.cardWidget = widget[this.type](this):'';

//add footer, header, and menu widgets by card type rules
    if ( this.rules.fPin==true || this.rules.fFriend==true || this.rules.fReact==true || this.fAward==true){
      this.footer = new wFooter(this.rules).html()
    }

    this.cardHtml =   this.makeCardHtml();
  }

  makeCardHtml(){
      return  `
      <div class="card" id="card${this.index}">
        <div class="card-inner card${this.index}">
            ${this.makeCardFront()}
            ${this.makeCardBack()}
        </div>
      </div>
      `;
  }
  makeCardFront(){
     return `
     <div class="flip-card-front playerStylesCard ${this.rules.defaultColor} ${this.deck}">
       ${wHeader(this)}


       <h2 style="display:inline-flex;width:100%;"><div style="width:90%;">${this.deckReport} &nbsp; ${this.title}</div></h2>
       <div class="cardFrame highlight">
          ${this.media}
       </div>
         <p>${this.desc}</p>
         ${this.cardWidget}
         ${this.footer}
     </div>
     `
  }

  makeCardBack(){
    return `
    <div class="flip-card-back playerStylesCard ${this.rules.defaultColor} ${this.deck}">
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
    </div>`
  }
}


//add deck size classlist
function getDeckClass(d){
  if (d.cardsInDeck.length>49)
    { return " deck50";}
  else if (d.cardsInDeck.length>24)
    { return" deck25";}
  else if (d.cardsInDeck.length>11)
    { return" deck12";}
  else if (d.cardsInDeck.length>5)
    { return" deck6";}
  else if (d.cardsInDeck.length>1)
    { return" deck3";}
}

//get all showcase cards based on a key / value pair...
function get_cards(filterKey, filterValue){
          var myHtml = "";
          myCards.filter(x=>x[filterKey]==filterValue).forEach(x=>{
            myHtml+=x.cardHtml;
          })
          return myHtml;
}


//See a card in full screen view
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

//card initializations
var myCards = [];

function makeAllCards(){
  myCards =[];
  for ( var i = 0 ; i < data["card"].length ; i ++ ){
    myCards.push(new card(i));
  }
}
