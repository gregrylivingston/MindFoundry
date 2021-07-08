/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: string         max char 40
subtitle: string      max char ?
img: string           file location of image



*/




var mediaHTML;

function getCards(menu){
    document.getElementById("cards").innerHTML = "";
    for ( var i = 0 ; i < 10 ; i++){ createCard({index:i,type:menu,mediaType:"Image"})};

}


function createCard(cardSettings){


  let type = cardSettings.type;
  var iconDir = type;
  var mediaDir = type;

  switch(type){
    case "Challenge":
    case "Event":
        iconDir = "badge";
        mediaDir = "badge";

    default:
  }

  //get info from spreadsheet database.  data[table][row][column]
  let title = data[type][cardSettings.index][data[type + "Key"].indexOf("title")];
  let icon = "img/"+iconDir+"/"+data[type][cardSettings.index][data[type+"Key"].indexOf(iconDir)].toLowerCase() +"4.png"
  let media = "img/"+mediaDir+"/"+data[type][cardSettings.index][data[type+"Key"].indexOf(iconDir)].toLowerCase() +"4.png";

  switch (cardSettings.mediaType){
    case "Image":
          mediaHTML = "<img src='" + media + "'>";
          console.log(mediaHTML);
          break
    case "iframe":
          mediaHTML = media;
          break
    default:
          mediaHTML = "";
  }

    document.getElementById("cards").innerHTML+= `
      <div class="card">

        <div class="card-type">
          <div>${type}</div>
        </div>

        <div class="card-header">
          <img class="card-header-img" src=${icon}>
          <div class="card-title-group">
            <div class="card-title">${title}</div>
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

/*

    Ok all this makes me think notifications should be stacked by item... but what does that mean.
    Like there are a finite number of base items.  But reactions and awards stack into them, I guess...

*/
