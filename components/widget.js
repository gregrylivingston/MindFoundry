var widget = {};
var widget_back = {};

widget["Player Card"] = function (c){
  let html =
  `
    <div class="cardBlock">
      <div class="half-button mf-orange" style="display:inline-block;">

          <img src="img/Create.svg"> Create <br>
          Lvl0
          Crds:4
          Bdgs:2
      </div>
      <div class="half-button mf-blue2">
          <img src="img/Collaborate.svg">
      </div>
    </div>
    <div class="cardBlock">
      <div class="half-button mf-red">
          <img src="img/Compete.svg">
      </div>
      <div class="half-button mf-yellow">
          <img src="img/Share.svg">
      </div>
    </div>
  `;
  return html;
}


function getOwnerWidget(c){
    var challenge;
    (c.type=="Challenge")?challenge = c:challenge = myCards.find(x=>x.title==c.owner);
    var html = "";

    if (challenge !==undefined )
    {
      var branch = myCards.find(x=>x.title==challenge.owner);
              try{
                let badge = myCards.find(x=>x.title==branch.owner);
                html+=`
                <div class="half-button">
                  <div style="width:100%;">
                    ${badge.type}: ${badge.title}
                  </div><br>
                  <div>
                    <img src="${badge.img}" height="30px">
                  </div>
                </div>
                <div class="half-button">
                  <div style="width:100%;">
                    ${branch.type}: ${branch.title}
                  </div><br>
                  <div>
                    <img src="${branch.img}" height="30px">
                  </div>
                </div>
              `}
              catch{console.log("fail");}finally{
                html+=`  `;
          }
    }
    return html
}
