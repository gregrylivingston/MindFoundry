

function widget_badgeByCharacter(card){
        var badgeHolder = "";

        var myBadges = shuffle(data["Badge"].filter(x=>x[data["BadgeKey"].indexOf("Character")] == card.title));
        console.log(myBadges);
        for (var i = 0 ; i < myBadges.length ; i ++)
        {
          badgeHolder+=card_badge(myBadges[i]);
        }

      return `                ${badgeHolder}`/*

              <div class="card-section playerStyles" style="text-align:center;">
                <h3 style="text-align:left;">
                  Recommended ${card.title} Badges
                  <a style="font-size:.6em;" onclick="showPage('Badge','Character','${card.title}')">See All</a>
                </h3>

              </div>
      `*/
}

function widget_badge(bad){
  return`
  <div class="badge" onclick="showBadge('${bad[data["BadgeKey"].indexOf("title")]}')" style="background:url('${bad[data["BadgeKey"].indexOf("imgSrc")]}1.png');background-size:contain;
    background-repeat:no-repeat;">
  <!--  <img height="32px" src="${bad[data["BadgeKey"].indexOf("imgSrc")]}1.png">-->
    <div style="height:6.5em;"></div>
    <div style="width:100%;display:inline-block;">
            Level 0<br>

            Challenges Complete 0/${data["Challenge"].filter(x=>x[data["ChallengeKey"].indexOf("badge")] == bad[data["BadgeKey"].indexOf("title")]).length}
            <br>
            Awards Earned 0
      </div>
  </div>
    <div class="playerStyles-bg" style="text-align:left;padding:2%;text-align:center;">
      ${bad[data["BadgeKey"].indexOf("title")]}
    </div>
  </div>
  `
}
