
  var badgeHolder = "";

function widget_badgeByCharacter(card){
        badgeHolder = "";

        data["Badge"].filter(x=>x[data["BadgeKey"].indexOf("Character")] == card.title).forEach(bad=>{
          badgeHolder+=widget_badge(bad);
        })

      return `
            <div class="card-section">
              <div>
                Badges
              </div>
              <div>
                ${badgeHolder}
              </div>
            </div>
      `
}

function widget_badge(bad){
  return`
  <button class="half-button playerStyles" onclick="showBadge('${bad[data["BadgeKey"].indexOf("title")]}')">
    <img height="32px" src="${bad[data["BadgeKey"].indexOf("imgSrc")]}1.png">
    <div style="text-align:left;">
      ${bad[data["BadgeKey"].indexOf("title")]}<br>
      Level
    </div>
  </button>
  `
}
