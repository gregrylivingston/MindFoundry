
function getCardMediaRules(thisCard){
    if (thisCard.img.indexOf("svg")>-1 ){
       return `<img style="object-fit:fill;" src="${thisCard.img}">`
    }
    else if (thisCard.img.indexOf("img")>-1 ){
       return `<img src="${thisCard.img}">`
    } else if ( thisCard.img.indexOf("youtube")>-1){
      return `<iframe width="100%" style="height:100%;border-radius:.5em" src="${thisCard.img}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {return'';}
 }
