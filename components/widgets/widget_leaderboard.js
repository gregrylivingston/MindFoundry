function widget_leaderboard(){
    return `


    <div class="card-section">
      ${leaderboard_row(11, "Spellbound")}
      ${leaderboard_row(12, "Harrison")}
      ${leaderboard_row(13,"Kawanabe")}
      ${leaderboard_row(14, "Davinci")}
      ${leaderboard_row(15, "Luchos")}
      <br>
    </div>
    `

}

function leaderboard_row(rank , myName){
    return `
          <div style="display:inline-flex;align-items:center;width:100%;">
            <div style="display:inline-block;width:15%">
                ${rank}
            </div>
            <div style="display:inline-block;width:87%">
                ${widget_playerByName(myName)}
            </div>
          </div>
          `
}
