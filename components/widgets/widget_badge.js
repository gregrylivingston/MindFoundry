

function widget_badgeByCharacter(card){
        var badgeHolder = "";

        data["Badge"].filter(x=>x[data["BadgeKey"].indexOf("Character")] == card.title).forEach(bad=>{
          badgeHolder+=widget_badge(bad);
        })

      return `
              <h3>
                Badges
              </h3>
                ${badgeHolder}
      `
}

function widget_badge(bad){
  return`
  <div style="width:35%;display:inline-block;margin:0px;" class="card-section playerStyles" onclick="showBadge('${bad[data["BadgeKey"].indexOf("title")]}')">
    <img height="32px" src="${bad[data["BadgeKey"].indexOf("imgSrc")]}1.png">
    <div style="text-align:left;">
      ${bad[data["BadgeKey"].indexOf("title")]}
    </div>
    <div>Next Badge: Level 1</div>
    ${widget_progressBar()}
    <div>0 /
    ${data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf("badge")] == bad[data["BadgeKey"].indexOf("title")]).length}
    Challenges</div>

  </div>
  `
}
