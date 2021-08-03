class card {
  constructor(index) {
    this.index = index;
    this.footer="";this.deckReport="";this.deck = "";
    //Add this cards info as key-object pairs for the card
    data["cardKey"].forEach((column,i)=> {this[column] = data["card"][this.index][i]});
    //Add the card type rules as key-object pairs for this card
    this.rules = {}; data["cardType"].find(x=>x[0]==this.type).forEach((x,i)=>{this.rules[data["cardTypeKey"][i]]=x;});

    //Build media frame for the card depending on imgSrc field contents
    //obviously this needs to be done in a more sophisticated way.
    this.media = getCardMediaRules(this);
    ( this.rules.img.indexOf("img")>-1 )? this.rules.media= `<img src="${this.rules.img}">`:this.rules.media = `<iframe width="100%" style="height:100%;border-radius:.5em" src="${this.rules.img}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    //get deck info, build "deck report (deck nav options)"
    this.cardsInDeck = data["card"].filter(x=>x[data["cardKey"].indexOf("parentCard")]==this.title);
    if  (this.cardsInDeck.length>0){makeDeckReport(this);}

    //Get CSS class to add offset borders for deck effect depending on the size of the deck.
    this.deck = getDeckCSSClass(this);

    //add bottom widget by card type
    this.cardWidget = "";
    ( widget[this.type] !== undefined )? this.cardWidget = widget[this.type](this):'';

    //place the parent cards widget on the back of the cards.  This probably doesn't make sense.
    //Shouldn't the card type widget be placed on the back instead?
    this.parentWidget = "";
    if ( widget[data["card"].find(x=>x[1]==this.parentCard)[0]] !== undefined ){
        this.parentWidget = widget[data["card"].find(x=>x[1]==this.parentCard)[0]](this);
    }

//add footer, header, and menu widgets by card type rules
//Probably need to be redone to include more views generally.
    if ( this.rules.fPin==true || this.rules.fReact==true || this.fAward==true){
      this.footer = new wFooter(this.rules).html()
    }
  //  this.makeCardHtml =   this.makeCardHtml();
    this.innerCardHtml = this.makeInnerCardHtml();
  }
  makeCardHtml(){
      return  `
    <div class="card-wrapper" id="${this.index}">
      ${this.makeInnerCardHtml()}
      ${this.deckReport}
    </div>
      `;
  }
  makeInnerCardHtml(){
      return  `
      <div class="card">
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
       <h2 style="display:inline-flex;width:100%;">
          <div style="width:90%;"><!--${this.parentCard}/ &nbsp; -->${this.title}</div>
       </h2>
       <div class="cardFrame highlight">
          ${this.media}
       </div>
       <div class="cardDesc">
         <h4>${getOwnerWidget(this)}</h4>
         <p>${this.desc}</p>
         ${this.cardWidget}
      </div>
         ${this.footer}
     </div>
     `
  }

  makeCardBack(){
    return `
    <div class="flip-card-back playerStylesCard ${this.rules.defaultColor} ${this.deck}">
        ${wRHeader(this)}
        <h2 style="display:inline-flex;width:100%;">
          <div style="width:90%;" onclick="breakDecks('${this.type}')">&nbsp; ${this.type}</div>
        </h2>
        <div class="cardFrame highlight">
           ${this.rules.media}
        </div>
        <div style="height:14em;">
          ${this.rules.desc}
          ${this.parentWidget}
        </div>
    </div>
    `}
}
