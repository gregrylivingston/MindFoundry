

function widget_badgeByCharacter(card){
        var badgeHolder = "";

        var myBadges = shuffle(data["Badge"].filter(x=>x[data["BadgeKey"].indexOf("Character")] == card.title));
        console.log(myBadges);
        for (var i = 0 ; i < 4 ; i ++)
        {
          badgeHolder+=widget_badge(myBadges[i]);
        }

      return `
              <div class="card-section playerStyles" style="text-align:center;">
                <h3 style="text-align:left;">
                  Recommended ${card.title} Badges
                  <a style="font-size:.6em;" onclick="showBadgesByCharacter('${card.title}')">See All</a>
                </h3>
                ${badgeHolder}

              </div>
      `
}

function widget_badge(bad){
  return`
  <div class="badge" onclick="showBadge('${bad[data["BadgeKey"].indexOf("title")]}')" style="background:url('${bad[data["BadgeKey"].indexOf("imgSrc")]}1.png');background-size:contain;
    background-repeat:no-repeat;">
  <!--  <img height="32px" src="${bad[data["BadgeKey"].indexOf("imgSrc")]}1.png">-->
    <div style="height:6.5em;"></div>
    <div style="width:100%;display:inline-block;">
      <div class="playerStyles-bg" style="width:34%;opacity:0.9;display:inline-block;padding:2%;text-align:center;">
            Lvl 1
      </div>
      <div style="width:12%;display:inline-block;">
      </div>
      <div class="playerStyles-bg" style="width:34%;display:inline-block;padding:2%;text-align:center;">
              0/${data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf("badge")] == bad[data["BadgeKey"].indexOf("title")]).length}
            X
      </div>
  </div>
    <div class="playerStyles-bg" style="text-align:left;padding:2%;text-align:center;">
      ${bad[data["BadgeKey"].indexOf("title")]}
    </div>
  </div>
  `
}
