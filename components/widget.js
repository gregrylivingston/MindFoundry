var widget = {};
var widget_back = {};


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

widget["Tokens"]= function(c){
  return c.desc
}

widget["Card Pack"] = widget["Tokens"];
widget["Award Pack"] = widget["Tokens"];
widget["Challenge"] = widget["Tokens"];
widget["Mind Foundry"] = widget["Tokens"];
widget["Rewards"] = widget["Tokens"];
