function makeDictionaryByGroup(group){
    var html = "";
    let types = data["cardType"].filter(x=>x[1]==group);
    types.forEach(myType=>html+=`
      <div class="page-section">

        <h1>${myType[0]}</h1>
        ${myCards.find(x=>x.type==myType[0]).makeCardHtml()}
        ${myCards.find(x=>x.type==myType[0]).makeCardHtmlFlipped()}

        <br>
      </div>
      `);

    document.getElementById("dictionary-inner").innerHTML = html;
}
