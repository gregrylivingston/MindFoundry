function getCardTypeRules(type){
  console.log(type);
    let rules = {};
    data["cardType"].find(x=>x[0]==type).forEach((x,i)=>{rules[data["cardTypeKey"][i]]=x;});
    return rules
}


function nextCard(el){
    let myCardDiv = el.parentElement.parentElement;
    let card = myCards.find(x=>x.index==myCardDiv.id);
    let deckIt = document.getElementById("deckIt" + myCardDiv.id).innerHTML;
    deckIt = Number(deckIt)+1;
    if ( deckIt > card.cardsInDeck.length ){ deckIt = 0}
    myCardDiv.removeChild(myCardDiv.firstChild);myCardDiv.removeChild(myCardDiv.firstChild);myCardDiv.removeChild(myCardDiv.firstChild);
    if (deckIt != 0 )
    {
      myCardDiv.innerHTML = myCards.find(x=>x.title==card.cardsInDeck[deckIt-1][1]).innerCardHtml + myCardDiv.innerHTML;
      document.getElementById("deckIt" + myCardDiv.id + "Parent").style.display = "inline-block";
    }
    else
    {
      myCardDiv.innerHTML = card.innerCardHtml + myCardDiv.innerHTML;
      document.getElementById("deckIt" + myCardDiv.id + "Parent").style.display = "none";
    }
    document.getElementById("deckIt" + myCardDiv.id).innerHTML = Number(deckIt);
}

function previousCard(el){
  let myCardDiv = el.parentElement.parentElement;
  let card = myCards.find(x=>x.index==myCardDiv.id);
  let deckIt = document.getElementById("deckIt" + myCardDiv.id).innerHTML;
  deckIt =  deckIt - 1;
  if ( deckIt < 0 ){ deckIt = card.cardsInDeck.length;}
  myCardDiv.removeChild(myCardDiv.firstChild);myCardDiv.removeChild(myCardDiv.firstChild);myCardDiv.removeChild(myCardDiv.firstChild);
  document.getElementById("deckIt" + myCardDiv.id).innerHTML = deckIt;
  if ( deckIt != 0 ){ //FOR NON TITLE  CARD OF DECK
    myCardDiv.innerHTML = myCards.find(x=>x.title==card.cardsInDeck[deckIt-1][1]).innerCardHtml + myCardDiv.innerHTML;
    document.getElementById("deckIt" + myCardDiv.id + "Parent").style.display="inline-block";
  } else { // FOR TITLE CARD OF DECK
    myCardDiv.innerHTML = card.innerCardHtml + myCardDiv.innerHTML;
    document.getElementById("deckIt" + myCardDiv.id + "Parent").style.display="none";
  }
}

class card {
  constructor(index) {
    this.index = index;
    data["cardKey"].forEach((column,i)=> {this[column] = data["card"][this.index][i]});
    this.footer="";this.deckReport="";this.deck = "";
    this.rules = getCardTypeRules(this.type);
    this.getCardMediaRules();


//get deck info
    this.cardsInDeck = data["card"].filter(x=>x[data["cardKey"].indexOf("parentCard")]==this.title);
      if  (this.cardsInDeck.length>0)
      { this.makeDeckReport();}
    this.deck = getDeckClass(this);


//add bottom widget by card type
    this.cardWidget = "";
    ( widget[this.type] !== undefined )? this.cardWidget = widget[this.type](this):'';

    this.parentWidget = "";
    if ( widget[data["card"].find(x=>x[1]==this.parentCard)[0]] !== undefined ){
        this.parentWidget = widget[data["card"].find(x=>x[1]==this.parentCard)[0]](this);
    }

//add footer, header, and menu widgets by card type rules
    if ( this.rules.fPin==true || this.rules.fReact==true || this.fAward==true){
      this.footer = new wFooter(this.rules).html()
    }
    this.cardHtmlNoDeckReport =   this.makeCardHtmlNoDeckReport();
    this.cardHtml =   this.makeCardHtml();
    this.innerCardHtml = this.makeInnerCardHtml();
  }
  makeCardHtmlNoDeckReport(){
      return `
    <div class="card-wrapper" id="${this.index}">
      <div class="card">
        <div class="card-inner card${this.index}">
            ${this.makeCardFront()}
            ${this.makeCardBack()}
        </div>
      </div>
    </div>
      `;
  }
  makeCardHtml(){
      return  `
    <div class="card-wrapper" id="${this.index}">
      <div class="card">
        <div class="card-inner card${this.index}">
            ${this.makeCardFront()}
            ${this.makeCardBack()}
        </div>
      </div>
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
          <div style="width:90%;">${this.parentCard}/ &nbsp; ${this.title}</div>
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

        <!--<h4 style="text-align:left;">Menu</h4>
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
        </p>    -->
    </div>
`
  }
  makeDeckReport(){
    this.deckReport = `
    <h2 style="width:80%;text-align:center;padding:0 5% 0 5%">
      <button class="playerStylesButton" style="height:2em;width:4em;width:30%;max-width:10em" onclick="previousCard(this)"><</button>
        <div style="width:30%;display:inline-flex;justify-content:center;max-width:10em">
          <div id="deckIt${this.index}Parent" style="display:none;">
            <div id="deckIt${this.index}" style="display:inline-block;">
              0
            </div>
            / &nbsp;
          </div>
          <button class="mini-deck ${this.rules.defaultColor}" onclick="breakDecks('${this.title}')">
             ${this.cardsInDeck.length}
          </button>
        </div>
      <button class="playerStylesButton" style="height:2em;width:4em;width:30%;max-width:10em" onclick="nextCard(this)">></button>
    </h2>
      `;
  }
  getCardMediaRules(){
    if (this.img.indexOf("svg")>-1 ){
      this.media= `<img style="object-fit:fill;" src="${this.img}">`
    }
    else if (this.img.indexOf("img")>-1 ){
      this.media= `<img src="${this.img}">`
    } else if ( this.img.indexOf("youtube")>-1){
      this.media = `<iframe width="100%" style="height:100%;border-radius:.5em" src="${this.img}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {this.media='';}
   ( this.rules.img.indexOf("img")>-1 )? this.rules.media= `<img src="${this.rules.img}">`:this.rules.media = `<iframe width="100%" style="height:100%;border-radius:.5em" src="${this.rules.img}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
  else if (d.cardsInDeck.length>0)
    { return" deck2";}
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

function getOwnerWidget(c){
    var challenge;
    (c.type=="Challenge")?challenge = c:challenge = myCards.find(x=>x.title==c.owner);
    var html = "";

    if (challenge !==undefined )
    {
      var branch = myCards.find(x=>x.title==challenge.owner);

              try{
                let badge = myCards.find(x=>x.title==branch.owner);
                html+=`
                <div class="half-button">
                  <div style="width:100%;">
                    ${badge.type}: ${badge.title}
                  </div><br>
                  <div>
                    <img src="${badge.img}" height="30px">
                  </div>
                </div>
                <div class="half-button">
                  <div style="width:100%;">
                    ${branch.type}: ${branch.title}
                  </div><br>
                  <div>
                    <img src="${branch.img}" height="30px">
                  </div>
                </div>

              `}
              catch{console.log("fail");}finally{
                html+=`

            `;

          }
    }
    return html


}
