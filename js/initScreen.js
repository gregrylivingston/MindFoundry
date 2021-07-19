



//New Player
var newplayer= data["Player"][0];


function init_getKorora(){
//Korora
document.getElementById("user_options_1").innerHTML = "<h3>Select a Player - Club Korora</h3>";

  data["Player"].filter(x=>x[data["PlayerKey"].indexOf("club")]=="Korora").forEach(x=>{
    if ( x[data["PlayerKey"].indexOf("userType")] !== "Player")
      {document.getElementById("user_options_1").innerHTML += "<br><h3>" + x[data["PlayerKey"].indexOf("userType")]} + "</h3>";

      document.getElementById("user_options_1").innerHTML+=`
          <div class="card-section" style="max-height:2em;" onclick="intialize('${x[0]}')">
            ${widget_player(x)}
          </div>
      `;
  });
}

function init_getHeaderstart(){
  document.getElementById("user_options_1").innerHTML = "<h3>Select a Player - Headstart Academy</h3>";

  //Headstart
      data["Player"].filter(x=>x[data["PlayerKey"].indexOf("club")]=="Headstart Academy").forEach(x=>{
          x[data["PlayerKey"].indexOf("club")] = "Piwa";
          if ( x[data["PlayerKey"].indexOf("userType")] !== "Player")
            {document.getElementById("user_options_1").innerHTML += "<br><h3>" + x[data["PlayerKey"].indexOf("userType")]} + "</h3>";

          document.getElementById("user_options_1").innerHTML+=`
              <div class="card-section" onclick="intialize('${x[0]}')">
                  ${widget_player(x)}
              </div>
          `;
      });

}


  function intialize(p){
    ( p !== newplayer) ? data["Player"].unshift( data["Player"].find(x=>x[0]==p) ) : '' ;
    document.getElementById("loadingScreen").remove();
    init();

  }




  document.getElementById("user_options_0").innerHTML=`
        <div class="card-section">
          <h1>Mind Foundry 2021 Technical Demo</h1>
        </div>`;

  document.getElementById("user_options_1").innerHTML=`
        <div class="card-section">
          <h2>Select Demo Type</h2>
          <h3>New User</h3>
          <div onclick="intialize('${newplayer[0]}')">
            ${widget_player(data["Player"][0])}
          </div>
          <h3>Online Club</h3>
          <div class="playerStyles" onclick="init_getKorora()" style="padding:1em;">
            Club Korora
          </div>

          <h3>Private Club</h3>
          <div class="playerStyles" onclick="init_getKorora()" style="padding:1em;">
            Headstart Academy
          </div>
        </div>`;

  document.getElementById("user_options_2").innerHTML=`
        <div class="card-section" style="text-align:left;">
          <h3>Features</h3>
          <div>Mobile First Designs</div>
          <div>Improved curriculum and resource structures</div>
          <div>Improved user widgets</div>
          <div>Improved challenge cards</div>
          <div>Full club functionality and leaderboards</div>

          <div>Mobile First Designs</div>

        </div>`;
