



function card_badge(bad){
  return `
  <div class="card playerStylesCard" onclick="showBadge('${bad[data["BadgeKey"].indexOf("title")]}')">
    <h3>Badge</h3>
    <h4>      ${bad[data["BadgeKey"].indexOf("title")]}
    </h4>
    <div style="width:100%;text-align:center;border:1px solid white;">
      <img style="width:50%" src="${bad[data["BadgeKey"].indexOf("imgSrc")]}1.png">
    </div>
    <div style="width:100%;display:inline-block;">
          Level 0<br>

          Challenges Complete 0/${data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf("badge")] == bad[data["BadgeKey"].indexOf("title")]).length}
          <br>
          Awards Earned 0

    </div>
            ${new widget_footer(
               [widget_fPin()],
               [widget_fShare(),widget_fMenu()]
             ).html()}
  </div>
  `;
}
