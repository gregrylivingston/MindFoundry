

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

var images = [];
var imagesLoaded = 0;
function preload() {
    for (var i = 0; i < preloadImages.length; i++) {
        let newImage = new Image();
            newImage.addEventListener("load",loadHandler,false);
            newImage.src = preloadImages[i];
            images.push(newImage);
    }
}


function loadHandler() {
    imagesLoaded++;
    if (imagesLoaded === images.length) {
        document.getElementById("loader").innerHTML = imagesLoaded + "/" + images.length;
    }
}


const preloadImages = [
  "img/brain.png",
  "img/coin.png",
  "img/leagues-hero.jpeg",
  "img/mf_logo.png",
  "img/profile.png",
  "img/token_league.png",
  "img/token_tourney.png",
  "img/tournament_hero.jpeg",
  "img/menu/award.png",
  "img/menu/challenge_complete.png",
  "img/menu/challenge.png",
  "img/menu/favorite_checked.png",
  "img/menu/favorite_unchecked.png",
  "img/menu/menu_events.png",
  "img/menu/menu_geniusshop.png",
  "img/menu/menu_settings.png",
  "img/menu/menu_squad.png",
  "img/menu/menu_usercrew.png",
  "img/menu/menu_usersolo.png",
  "img/menu/react.png",
  "img/menu/share.png",
  "img/Badge/Acting1.png",
  "img/Badge/Acting2.png",
  "img/Badge/Acting3.png",
  "img/Badge/Acting4.png",
  "img/Badge/Activism1.png",
  "img/Badge/Activism2.png",
  "img/Badge/Activism3.png",
  "img/Badge/Activism4.png",
  "img/Badge/Animation1.png",
  "img/Badge/Animation2.png",
  "img/Badge/Animation3.png",
  "img/Badge/Animation4.png",
  "img/Badge/App_Dev1.png",
  "img/Badge/App_Dev2.png",
  "img/Badge/App_Dev3.png",
  "img/Badge/App_Dev4.png",
  "img/Badge/Architecture1.png",
  "img/Badge/Architecture2.png",
  "img/Badge/Architecture3.png",
  "img/Badge/Architecture4.png",
  "img/Badge/Archaeology1.png",
  "img/Badge/Archaeology2.png",
  "img/Badge/Archaeology3.png",
  "img/Badge/Archaeology4.png",
  "img/Badge/Baking1.png",
  "img/Badge/Baking2.png",
  "img/Badge/Baking3.png",
  "img/Badge/Baking4.png",
  "img/Badge/Building1.png",
  "img/Badge/Building2.png",
  "img/Badge/Building3.png",
  "img/Badge/Building4.png",
  "img/Badge/Business1.png",
  "img/Badge/Business2.png",
  "img/Badge/Business3.png",
  "img/Badge/Business4.png",
];

preload();
