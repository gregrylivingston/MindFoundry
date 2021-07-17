

function widget_badgeByCharacter(card){
        var badgeHolder = "";

        var myBadges = shuffle(data["Badge"].filter(x=>x[data["BadgeKey"].indexOf("Character")] == card.title));

        for (var i = 0 ; i < 2 ; i ++)
        {
          badgeHolder+=widget_badge(myBadges[i]);
        }

      return `
              <div class="card-section">
                <h3 style="text-align:left;">
                  Recommended Badges
                  <a style="font-size:.6em;">See All</a>
                </h3>
              </div>
                ${badgeHolder}
      `
}

function widget_badge(bad){
  return`
  <div class="card-section playerStyles" onclick="showBadge('${bad[data["BadgeKey"].indexOf("title")]}')">
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
