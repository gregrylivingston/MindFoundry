function shuffle(array) {
  var currentIndex = array.length,  randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


/*

  using
    - an animated gif of sparkles.
    - an animated gradient as a holo effect.
    - color-dodge mix blend mode

card shininess

*/
var styleElem = document.head.appendChild(document.createElement("style"));
var x;
var allCards;


function activateCards(){

    allCards = document.getElementsByClassName("card");
    for ( var n = 0 ; n < allCards.length ; n++ ){
        allCards[n].addEventListener("mousemove",function(e){updateCardFx(e, this);});
        allCards[n].addEventListener("touchmove",function(e){updateCardFx(e, this);});
        allCards[n].addEventListener("mouseout",function(){removeCardFx(this);});
        allCards[n].addEventListener("touchend",function(){removeCardFx(this);});
        allCards[n].addEventListener("touchcancel",function(){removeCardFx(this);});
    }
}



function updateCardFx(e , theCard){
  var pos = [e.offsetX,e.offsetY];
  e.preventDefault();
  if ( e.type === "touchmove" ) {
    pos = [ e.touches[0].clientX, e.touches[0].clientY ];
  }

  var l = pos[0];
  var t = pos[1];
  var h = theCard.offsetHeight;
  var w = theCard.offsetWidth;
  var px = Math.abs(Math.floor(100 / w * l)-100);
  var py = Math.abs(Math.floor(100 / h * t)-100);
  var pa = (50-px)+(50-py);
  var lp = (50+(px - 50)/1.5);
  var tp = (50+(py - 50)/1.5);
  var px_spark = (50+(px - 50)/10);
  var py_spark = (50+(py - 50)/10);
  var p_opc = Math.abs(pa)*1.5;
  var ty = ((tp - 50)/2) * -.5;
  var tx = ((lp - 50)/1.5) * .25;
  var grad = `background-position: ${lp}% ${tp}%;`
  var sprk = `background-position: ${px_spark}% ${py_spark}%;`
  var opc = `opacity: ${p_opc/100};`
//        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
  var style = `
    .card:hover:before { ${grad} }  /* gradient */
    .card:hover:after { ${sprk} ${opc} }   /* sparkles */
  `;
 for ( var i = 0 ; i < allCards.length ; i ++ ){
    allCards[i].classList.remove("active");
    allCards[i].classList.remove("animated");

  }
  theCard.classList.remove("animated");
  theCard.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
  styleElem.innerHTML = style;

  if ( e.type === "touchmove" ) {
    return false;
  }
  clearTimeout(x);

}

function removeCardFx(theCard){
  styleElem.innerHTML = "";
  theCard.removeAttribute("style");
  x = setTimeout(function() {
    theCard.classList.add("animated");
  },2500);
}
