/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: string         max char 40
subtitle: string      max char ?
img: string           file location of image



*/






function card(data){
    document.getElementById("cards").innerHTML+= `
      <div class="card">
        <div class="card-type">
          <div>${data.type} ${data.subtype}</div>
        </div>
        <div class="card-header">
          <img class="card-header-img" src=${data.img}>
          <div class="card-title-group">
            <div class="card-title">${data.title}</div>
            <div class="card-subtitle">${data.subtitle}</div>
          </div>
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
      img:"img/badges/dancing4.png"
    },
    {
      type:"Challenge",
      subtype:"Available",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      img:"img/badges/dancing4.png"
    },
    {
      type:"Challenge",
      subtype:"Submitted",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      img:"img/badges/dancing4.png"
    },
    {
      type:"Challenge",
      subtype:"Completed",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      img:"img/badges/dancing4.png"
    },



];

sampleCards.forEach(item=>{card(item);});
