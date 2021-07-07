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


/*

    Ok all this makes me think notifications should be stacked by item... but what does that mean.
    Like there are a finite number of base items.  But reactions and awards stack into them, I guess...





*/


//***********USERS

  const url= "https://script.google.com/macros/s/AKfycbzNLHwWzdqrQjLPE0HrIl2KTatkbSM6gLGd2UJpdDh76hwcyiX8hLbeEG472k0MNDZV/exec";


(async () => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'mode': 'no-cors'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const content = await rawResponse.json();
  console.log(content);
})();



var sampleCards = [
    {
      type:"Challenge",
      subtype:"Accepted",
      cardTitle:"You've Accepted A Challenge",
      title:"Make a Dance Video",
      subtitle:"Difficulty: <img src='img/mf_logo.png' height='16px'><img src='img/mf_logo.png' height='16px'>",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:"You've accepted this challenge.  Bring it on.",
      footerLeft:'',
      footerRight:'',

    },
    {
      type:"Challenge",
      subtype:"Available",
      cardTitle:"New Challenge",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"iframe",
      media:'  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xL-XDbMMMSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      description:'',
      footerLeft:'',
      footerRight:'',
    },
    {
      type:"Challenge",
      subtype:"Submitted",
      cardTitle:"You've Submitted A Challenge",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:'',
      footerLeft:'',
      footerRight:'',
    },
    {
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"You've Completed a Challenge",
      title:"Perform a Monologue",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
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
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Monorog Reacted to Your Video",
      title:"Perform a Monolog",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:'',
      footer:'',
    },
    {
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Monorog, Andrew, Smellduro Reacted to Your Video",
      title:"Perform a Monolog",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:``,
      footerLeft:`          <div class="playerWidget" onclick="loadMenu('mmenu')">
                  <img class="playerWidget-image" src="img/avatar/avatar_cuteawil.png">
                  <div class="playerWidget-name"><i>Spellbound</i></div>
                </div>
`,
    },
    {
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Monorog has given you an Award",
      title:"Perform a Monolog",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:'',
      footer:'',
    },
    {
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Smellduro Completed a Challenge",
      title:"Perform a Monolog",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:'',
      footer:'',
    },
    {
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Monorog has given you an Award",
      title:"Perform a Monolog",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"iframe",
      media:'  <iframe width="100%" src="https://www.youtube.com/embed/xL-XDbMMMSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      description:'',
      footer:'',
    },
    {
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"Smellduro has earned an Award",
      title:"Perform a Monolog",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:'',
      footer:'',
    },

];

sampleCards.forEach(item=>{card(item);});
