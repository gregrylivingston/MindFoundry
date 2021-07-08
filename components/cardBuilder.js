/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: string         max char 40
subtitle: string      max char ?
img: string           file location of image



*/


const eventBadges = ["Mind Foundry Heroes","Minecraft","Rocket League"];
var mediaHTML;
var cards = [];
var availableCards = [];
var availableCardIterator = 0;

function setCardsByMenu(menu){
    scroller.scrollTop = 0 ;
    document.getElementById("cards").innerHTML = "";
        availableCards = cards.filter(c=>c.type==menu);
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



/*

    window.onscroll = function(){
      console.log(document.getElementById(nextCard.type + nextCard.index));
      console.log(document.getElementById(nextCard.type + nextCard.index).getBoundingClientRect().bottom)
        if(document.getElementById(nextCard.type + nextCard.index).getBoundingClientRect().bottom <= 1000){
          addCardsToFeed();
        }
    }*/
}




class card {
  constructor(type, index) {
    this.type = type;
    this.index = index;
    //for Each column in the spreadsheet give this add a key and object pair
    data[this.type+"Key"].forEach((column,i)=> {this[column] = data[this.type][this.index][i]});

    this.badgeImg = "img/Badge/"+this.badge +"4.png";
    this.mediaType = "Image";
  }
  addToFeed(){

      let media = this.badgeImg;

      switch (this.mediaType){
        case "Image":
              mediaHTML = "<img src='" + media + "'>";
              break
        case "iframe":
              mediaHTML = media;
              break
        default:
              mediaHTML = "";
      }

        document.getElementById("cards").innerHTML+= `
          <div class="card playerStyles" id="Challenge${this.index}">

            <div class="card-type">
              <div>${this.type}</div>
            </div>

            <div class="card-header">
              <img class="card-header-img" src=${this.badgeImg}>
              <div class="card-title-group">
                <div class="card-title">${this.title}</div>
                <div class="card-subtitle">
                  <div class="w3-border" style="background-color:grey;width:60%;display:inline-block;border-radius:10px;">
                    <div class="w3-grey" style="height:20px;width:20%;background-color:yellow;border-radius:10px;margin:2px;"></div>
                  </div>


                          0 / 30 <img src='img/menu/menu_geniusshop.png' height='32px'>

                </div>
              </div>
            </div>

            <button class="menuButton">Details</button>
            <button class="menuButton">Showcase</button>
            <button class="menuButton">Submit</button>

            <div class="media">${mediaHTML}
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
            <div class="card-footer">
              <div class="card-footer-left"></div>
              <div class="card-footer-right">
                  <button class="little-button">+ React</button><button class="little-button">+ Award</button>
                  <button class="little-button">+ Share</button><button class="little-button">...</button>
              </div>

            </div>
          </div>
        `;
  }
}

data["Challenge"].forEach((chal,i)=>{cards.push(new card("Challenge",i))});
eventBadges.forEach((badge,i)=>{
   let eventsInBadge = data["Event"].filter(b=>b[1]==badge);
   cards.push(new card("Event",i));
   console.log("event card created + " +  badge);
})
