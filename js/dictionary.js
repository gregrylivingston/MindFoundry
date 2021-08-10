function makeDictionaryByGroup(group){
  document.getElementById("cards").scrollTop = 0;
    var html = '<div style="width:100%;display:inline-flex;padding-top:2em;padding-left:2em;">';
    for (var i = 0 ; i < data["cardGroups"].length ; i ++ ){
      html+=`
        <button class="tutorialHeader playerStylesButton" onclick="makeDictionaryByGroup('${data["cardGroups"][i][0]}')">
          <div class="mini-deck ${[data["cardGroups"][i][2]]}">
            <img src="${data["cardGroups"][i][1]}" style="height:1.6em;">
          </div> &nbsp;
          ${data["cardGroups"][i][0]}
        </button>
        `;
    }
        html += "</div>";
    let types = data["cardType"].filter(x=>x[1]==group);
    types.forEach(myType=>html+=`
      <div class="page-section">

        <h1>${myType[0]}</h1>

        ${myCards.find(x=>x.type==myType[0]).makeCardBothSidesVis()}

        <br>
      </div>
      `);

    document.getElementById("cards").innerHTML = html;
    activateCards();
}
//        ${myCards.find(x=>x.type==myType[0]).makeCardHtmlFlipped()}
