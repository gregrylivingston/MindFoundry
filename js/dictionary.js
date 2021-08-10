function makeDictionaryByGroup(group){
  document.getElementById("dictionary-inner").scrollTop = 0;
    var html = "";
    let types = data["cardType"].filter(x=>x[1]==group);
    types.forEach(myType=>html+=`
      <div class="page-section">

        <h1>${myType[0]}</h1>

        ${myCards.find(x=>x.type==myType[0]).makeCardBothSidesVis()}

        <br>
      </div>
      `);

    document.getElementById("dictionary-inner").innerHTML = html;
}
//        ${myCards.find(x=>x.type==myType[0]).makeCardHtmlFlipped()}
