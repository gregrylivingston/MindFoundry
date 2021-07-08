/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: string         max char 40
subtitle: string      max char ?
img: string           file location of image



*/


var cards = [];
var availableCards = [];
var availableCardIterator = 0;

function setCardsByMenu(menu){
    scroller.scrollTop = 0 ;
    document.getElementById("cards").innerHTML = "";
    switch (menu){
      case "Challenge":
      case "Event":
        availableCards = shuffle(cards.filter(c=>c.type==menu));
        break
      default:
        availableCards = shuffle(cards.filter(c=>c.type=="Event" ));
        availableCards.push(... shuffle(cards.filter(c=>c.type=="Challenge")));
    }
    console.log(availableCards.length);

    availableCardIterator = 0;
    addCardsToFeed();

}

var nextCard;
var scroller =   document.getElementById("cards").parentElement;
var myTarget = undefined;
scroller.addEventListener('scroll', function() {
  if (myTarget!==undefined){
  if(myTarget.getBoundingClientRect().top <= 500){
    addCardsToFeed();
  }}
})

function addCardsToFeed(){
    for( var i = availableCardIterator + 10 ; availableCardIterator < i ;availableCardIterator++)
    {
        nextCard = availableCards[availableCardIterator];
        (nextCard !== undefined)? nextCard.addToFeed():availableCardIterator=i;
    }
    (nextCard !== undefined)?     myTarget = document.querySelector('#'+nextCard.type+nextCard.index):myTarget=undefined;

}


var mediaHTML;


class card {
  constructor(type, index) {
    this.type = type;
    this.index = index;
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});
    this.badgeImg = "img/Badge/"+this.badge +"4.png";
    this.mediaType = "Image";
    this.cardHtml = this.makeCardHtml();
  }
  makeCardHtml(){
      return  `
        <div class="card playerStyles" id="Challenge${this.index}">

          <div class="card-type">
            <div>${this.type}</div>
          </div>
            ${this.makeCardHeader()}

          <div class="media">
          Details <p>${this["Description"]}</p>
          </div>
          <div class="media">
            Showcase
          </div>
          <div class="media">
           ${this.makeCardProgressBar()}
            Submit
          </div>

          <div class="card-description">

          <div style="font-size:1.65em;">My Great Monologue</div>
                <div>
                    <button class="little-button">3 <img src='img/menu/menu_geniusshop.png' height='32px'> | :) | Emoticons</button>

                    <div class="playerWidget" onclick="loadMenu('mmenu')" style="width:10em !important;">
                                <img class="playerWidget-image" src="img/avatar/avatar_cuteawil.png">
                                <div class="playerWidget-name" style="font-size:.75em;width:80%">Spellbound on 09/27/21</div>
                    </div>
                </div>




          </div>
          ${this.makeCardFooter()}
        </div>
      `;
  }
  addToFeed(){
        document.getElementById("cards").innerHTML+=this.cardHtml;
  }
  makeCardHeader(){
    return `<div class="card-header">
      <img class="card-header-img" src=${this.badgeImg}>
      <div class="card-title-group">
        <div class="card-title">${this.title}</div>
        <div class="card-subtitle">
        </div>
      </div>
    </div>
    `;
  }
  makeCardFooter(){
    return `
    <div class="card-footer">
      <div class="card-footer-left"></div>
      <div class="card-footer-right">
          <button class="little-button">+ React</button><button class="little-button">+ Award</button>
          <button class="little-button">+ Share</button><button class="little-button">...</button>
      </div>
    </div>`
  }
  makeCardProgressBar(){
    return `
      <div class="w3-border" style="background-color:grey;width:60%;display:inline-block;border-radius:10px;">
        <div class="w3-grey" style="height:20px;width:20%;background-color:yellow;border-radius:10px;margin:2px;"></div>
      </div>
            0 / ${this.maxPoints} <img src='img/menu/menu_geniusshop.png' height='32px'>`

  }
}


// ** Initialize Cards

const eventBadges = ["Mind Foundry Heroes","Minecraft","Rocket League"];
data["Challenge"].forEach((chal,i)=>{ (chal[0].length > 1 ) ? cards.push(new card("Challenge",i)):'';});
eventBadges.forEach((badge,i)=>{
   let eventsInBadge = data["Event"].filter(b=>b[1]==badge);
   cards.push(new card("Event",i));
})


//  Utiltiies

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
