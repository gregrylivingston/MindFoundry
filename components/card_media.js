
function getCardMediaRules(thisCard){
    if (thisCard.type == "Challenge Pack" || thisCard.type =="Card Pack"){
      return `
      <div class="cardFrame highlight" style="height:20em;">
          <img style="object-fit:fill;" src="${thisCard.img}">
      </div>
      `
    } else if (thisCard.img.indexOf("svg")>-1 ){
       return `
              <div class="cardFrame highlight">
                  <img style="object-fit:fill;" src="${thisCard.img}">
              </div>`
    }
    else if (thisCard.img.indexOf("img")>-1 ){
       return `
        <div class="cardFrame highlight">
          <img src="${thisCard.img}">
        </div>
       `
    } else if ( thisCard.img.indexOf("youtube")>-1){
      return `
        <div class="cardFrame highlight">
          <iframe width="100%" style="height:100%;border-radius:.5em" src="${thisCard.img}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          `

    } else {return'';}
 }
