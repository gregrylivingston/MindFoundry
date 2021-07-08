/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: string         max char 40
subtitle: string      max char ?
img: string           file location of image



*/




var mediaHTML;


function card(data){

  switch (data.mediaType){
    case "Image":
          mediaHTML = "<img src='" + data.media + "'>";
          console.log(mediaHTML);
          break
    case "iframe":
          mediaHTML = data.media;
          break
    default:
          mediaHTML = "";
  }

    document.getElementById("cards").innerHTML+= `
      <div class="card">

        <div class="card-type">
          <div>${data.cardTitle}</div>
        </div>

        <div class="card-header">
          <img class="card-header-img" src=${data.icon}>
          <div class="card-title-group">
            <div class="card-title">${data.title}</div>
            <div class="card-subtitle">${data.subtitle}</div>
          </div>
        </div>
        <div class="media">${mediaHTML}
        </div>
        <div class="card-description">${data.description}
        </div>
        <div class="card-footer">
          <div class="card-footer-left">${data.footerLeft}</div>
          <div class="card-footer-right">${data.footerRight}</div>

        </div>
      </div>
    `

}


function createCard(cardSettings){


  let type = cardSettings.type;
  var iconDir = type;
  var mediaDir = type;

  switch(type){
    case "Challenge":
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
          <div>${cardSettings.cardTitle}</div>
        </div>

        <div class="card-header">
          <img class="card-header-img" src=${icon}>
          <div class="card-title-group">
            <div class="card-title">${title}</div>
            <div class="card-subtitle">${cardSettings.subtitle}</div>
          </div>
        </div>
        <div class="media">${mediaHTML}
        </div>
        <div class="card-description">${cardSettings.description}
        </div>
        <div class="card-footer">
          <div class="card-footer-left">${cardSettings.footerLeft}</div>
          <div class="card-footer-right">${cardSettings.footerRight}</div>

        </div>
      </div>
    `

}
/*

    Ok all this makes me think notifications should be stacked by item... but what does that mean.
    Like there are a finite number of base items.  But reactions and awards stack into them, I guess...





*/
var myCards = [
    {
      index:1,
      type:"Challenge",
      subtype:"Accepted",
      cardTitle:"You've Accepted A Challenge",
      subtitle:"Difficulty: <img src='img/mf_logo.png' height='16px'><img src='img/mf_logo.png' height='16px'>",
      mediaType:"Image",
      description:"You've accepted this challenge.  Bring it on.",
      footerLeft:'',
      footerRight:'',
    },
    {
      index:6,
      type:"Challenge",
      subtype:"Accepted",
      cardTitle:"You've Accepted A Challenge",
      subtitle:"Difficulty: <img src='img/mf_logo.png' height='16px'><img src='img/mf_logo.png' height='16px'>",
      mediaType:"Image",
      description:"You've accepted this challenge.  Bring it on.",
      footerLeft:'',
      footerRight:'',

    },
    {
      index:12,
      type:"Challenge",
      subtype:"Available",
      cardTitle:"New Challenge",
      subtitle:"Difficulty: <img src='img/mf_logo.png' height='16px'><img src='img/mf_logo.png' height='16px'>",
      mediaType:"Image",
      description:'',
      footerLeft:'',
      footerRight:'',
    },
    {
      index:16,
      type:"Challenge",
      subtype:"Submitted",
      cardTitle:"You've Submitted A Challenge",
      subtitle:"Difficulty: brains brains",
      mediaType:"Image",
      description:'',
      footerLeft:'',
      footerRight:'',
    },
    {
      index:26,
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"You've Completed a Challenge",
      subtitle:"Difficulty: brains brains",
      mediaType:"Image",
      description:`<div style="font-size:1.65em;">My Great Monologue</div>
            <div>
                <button class="little-button">3 Lightbulbs | [Complete] [Awesome] | Emoticons</button>
            </div>
            <div>Posted on 09/27/21 by <div class="playerWidget" onclick="loadMenu('mmenu')" style="width:10em !important;">
                        <img class="playerWidget-image" src="img/avatar/avatar_cuteawil.png">
                        <div class="playerWidget-name"><i>Spellbound</i></div>
                      </div></div>

      `,
      footerLeft:`         <div class="playerWidget" onclick="loadMenu('mmenu')">
                  <img class="playerWidget-image" src="img/avatar/avatar_cuteawil.png">
                  <div class="playerWidget-name"><i>Spellbound</i></div>
                </div>`,
      footerRight:`  <button class="little-button">+ React</button><button class="little-button">+ Award</button>
        <button class="little-button">+ Share</button><button class="little-button">...</button>`
      ,
    },
    {
      index:30,
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Monorog Reacted to Your Video",
      subtitle:"Difficulty: brains brains",
      mediaType:"Image",
      description:'',
      footer:'',
    },
    {
      index:36,
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Monorog, Andrew, Smellduro Reacted to Your Video",
      subtitle:"Difficulty: brains brains",
      mediaType:"Image",
      description:``,
      footerLeft:`          <div class="playerWidget" onclick="loadMenu('mmenu')">
                  <img class="playerWidget-image" src="img/avatar/avatar_cuteawil.png">
                  <div class="playerWidget-name"><i>Spellbound</i></div>
                </div>
`,
    },
    {
      index:46,
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Monorog has given you an Award",
      subtitle:"Difficulty: brains brains",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:'',
      footer:'',
    },
    {
      index:56,

      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Smellduro Completed a Challenge",
      subtitle:"Difficulty: brains brains",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:'',
      footer:'',
    },
    {
      index:76,
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Monorog has given you an Award",
      subtitle:"Difficulty: brains brains",
      mediaType:"iframe",
      media:'  <iframe width="100%" src="https://www.youtube.com/embed/xL-XDbMMMSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      description:'',
      footer:'',
    },
    {
      index:86,
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Smellduro has earned an Award",
      subtitle:"Difficulty: brains brains",
      mediaType:"Image",
      description:'',
      footer:'',
    },

];

myCards.forEach(item=>{createCard(item);});
