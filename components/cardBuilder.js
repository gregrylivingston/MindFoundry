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
          <div>${data.type} ${data.subtype}</div>
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
        <div class="card-description">
        </div>
        <div class="card-footer">
        </div>
      </div>
    `

}


var sampleCards = [
    {
      type:"Challenge",
      subtype:"Accepted",
      title:"Make a Dance Video",
      subtitle:"Difficulty: <img src='img/mf_logo.png' height='16px'><img src='img/mf_logo.png' height='16px'>",
      icon:"img/badges/dancing4.png",
      mediaType:"Image",
      media:"img/badges/dancing4.png",
      description:'',
      footer:'',

    },
    {
      type:"Challenge",
      subtype:"Available",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png",
      mediaType:"iframe",
      media:'  <iframe width="100%" src="https://www.youtube.com/embed/xL-XDbMMMSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      description:'',
      footer:'',
    },
    {
      type:"Challenge",
      subtype:"Submitted",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png"
    },
    {
      type:"Challenge",
      subtype:"Completed",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      icon:"img/badges/dancing4.png"
    },



];

sampleCards.forEach(item=>{card(item);});
