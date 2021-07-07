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
        <div class="card-footer">${data.footer}
        </div>
      </div>
    `

}


/*

    Ok all this makes me think notifications should be stacked by item... but what does that mean.
    Like there are a finite number of base items.  But reactions and awards stack into them, I guess...





*/


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
      footer:'',

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
      footer:'',

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
      footer:'',
    },
    {
      type:"Challenge",
      subtype:"Completed",
      cardTitle:"You've Completed a Challenge",
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
