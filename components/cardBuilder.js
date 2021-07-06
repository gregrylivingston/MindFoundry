/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: title          string, max char 40




*/






function card(data){
    document.getElementById("cards").innerHTML+= `
      <div class="card">
        <div class="card-header">
          <img class="card-header-img" src="img/profile.png">
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
      subtitle:"Difficulty: brains brains",
      img:"img/bandges/dancing4.png"
    },
    {
      type:"Challenge",
      subtype:"View",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      img:"img/bandges/dancing4.png"
    },
    {
      type:"Challenge",
      subtype:"Submitted",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      img:"img/bandges/dancing4.png"
    },
    {
      type:"Challenge",
      subtype:"Completed",
      title:"Make a Dance Video",
      subtitle:"Difficulty: brains brains",
      img:"img/bandges/dancing4.png"
    },



];

sampleCards.forEach(item=>{card(item);});
