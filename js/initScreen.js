
var newplayer= data["Player"][0];
document.getElementById("user_options_new").innerHTML+=`
    <div class="card-section" style="max-height:2em;">
    <button style="width:100%" onclick="intialize('${newplayer[0]}')" class="playerStyles">${widget_player(data["Player"][0])}</button>
    </div>`;

  data["Player"].filter(x=>x[data["PlayerKey"].indexOf("club")]=="Korora").forEach(x=>{
    if ( x[data["PlayerKey"].indexOf("userType")] !== "Player")
      {document.getElementById("user_options_korora").innerHTML += "<br><h3>" + x[data["PlayerKey"].indexOf("userType")]} + "</h3>";

      document.getElementById("user_options_korora").innerHTML+=`
          <div class="card-section" style="max-height:2em;">
          <button style="width:100%" onclick="intialize('${x[0]}')" class="playerStyles">${widget_player(x)}</button>
          </div>
      `;
  });

    data["Player"].filter(x=>x[data["PlayerKey"].indexOf("club")]=="Headstart Academy").forEach(x=>{
        x[data["PlayerKey"].indexOf("club")] = "Piwa";
        if ( x[data["PlayerKey"].indexOf("userType")] !== "Player")
          {document.getElementById("user_options_piwa").innerHTML += "<br><h3>" + x[data["PlayerKey"].indexOf("userType")]} + "</h3>";

        document.getElementById("user_options_piwa").innerHTML+=`
            <div class="card-section" style="max-height:2em;">
            <button style="width:100%"  onclick="intialize('${x[0]}')" class="playerStyles">${widget_player(x)}</button>
            </div>
        `;
    });

  function intialize(p){
    ( p !== newplayer) ? data["Player"].unshift( data["Player"].find(x=>x[0]==p) ) : '' ;
    document.getElementById("loadingScreen").remove();
    init();

  }
