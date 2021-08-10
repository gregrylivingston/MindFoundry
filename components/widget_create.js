
widget["Create"]= function(c){
  return `

    <div class="cardBlock">
        <div style="width:33%;style:inline-block;">
            <button class="createButton" onclick="breakDecks('Video Badges')">
                <img src="img/file-play.svg" style="height:2em"><br>
                3
            </button>
            <button class="createButton" onclick="breakDecks('Audio Badges')">
                <img src="img/file-music.svg" style="height:2em">
                0
            </button>
        </div>
        <div style="width:33%;style:inline-block;">
            <button class="createButton" onclick="breakDecks('Coding Badges')">
                <img src="img/file-code.svg" style="height:2em">
                0
            </button>
            <button class="createButton" onclick="breakDecks('Writing Badges')">
                <img src="img/file-text.svg" style="height:2em">
                0
            </button>
        </div>
        <div style="width:33%;style:inline-block;">
              <button class="createButton" onclick="breakDecks('Project Badges')">
                  <img src="img/file-richtext.svg" style="height:2em">
                  0
              </button>
              <button class="createButton" onclick="breakDecks('Image Badges')">
                  <img src="img/file-image.svg" style="height:2em">
                  0
              </button>
        </div>
    </div>
    <div class="cardBlock" style="align-items:center;margin-top:1em">
        <div style="width:60%">Update one badge from all 6 groups to reach the next level
        and unlock Level 2 Creator rewards.
        </div>
        <button class="createButton">Lvl 2 Rewards</button>
    </div>



`
}

widget["Collaborate"] = widget["Create"];

widget["Create Badges"]= function(c){
  return`
    <button class="half-button" style="height:4em">
        <div>
          <div style="font-size:2em;display:inline-flex;align-items:center;">
            0 / ${c.cardsInDeck.length}
            <img src="img/badge.svg" style="height:1em">
          </div>
          <div style="font-size:.8em;">Badges</div>
        </div>
    </button>
    <button class="half-button" style="height:4em">
        <div>
          <div style="font-size:2em;display:inline-flex;align-items:center;">22<img src="img/Create.svg" style="height:1em"></div>
          <div style="font-size:.8em;">Points</div>
        </div>
    </button>
    <button class="half-button" style="height:4em">
        <div>
          <div style="font-size:2em;display:inline-flex;align-items:center;">1/23<img src="img/challenge.svg" style="height:1em"></div>
          <div style="font-size:.8em;">Challenges</div>
        </div>
    </button>
    <button class="half-button" style="height:4em">
        <div>
          <div style="font-size:2em;display:inline-flex;align-items:center;">14<img src="img/resource.svg" style="height:1em"></div>
          <div style="font-size:.8em;">Resources</div>
        </div>
    </button>
  `
}

widget["Challenge Pack"] = function(c){
  return `
  <div class="cardBlock">

      <button class="half-button" style="height:3em">
          <div>
            <div style="font-size:1.5em;display:inline-flex;align-items:center;">
                0
                <img src="img/Create.svg" style="height:1em"></div>
            <div style="font-size:.8em;">Solo Points</div>
          </div>
      </button>
      <button class="half-button" style="height:3em;">
          <div>
            <div style="font-size:1.5em;display:inline-flex;align-items:center;">
              0 / ${c.cardsInDeck.length}
              <img src="img/challenge.svg" style="height:1em"></div>
            <div style="font-size:.8em;">Solo Challenges</div>
          </div>
      </button>
      </div>

      <div class="cardBlock">

          <button class="half-button" style="height:3em">
              <div>
                <div style="font-size:1.5em;display:inline-flex;align-items:center;">
                    0
                    <img src="img/Create.svg" style="height:1em"></div>
                <div style="font-size:.8em;">Club Points</div>
              </div>
          </button>
          <button class="half-button" style="height:3em;">
              <div>
                <div style="font-size:1.5em;display:inline-flex;align-items:center;">
                  0 / ${c.cardsInDeck.length}
                  <img src="img/challenge.svg" style="height:1em"></div>
                <div style="font-size:.8em;">Club Challenges</div>
              </div>
          </button>
          </div>
      <p>${c.desc}</p>
      <div class="cardBlock">
          <button class="half-button" style="height:3em;">
              <div>
                <div style="font-size:1.5em;display:inline-flex;align-items:center;">14<img src="img/resource.svg" style="height:1em"></div>
                <div style="font-size:.8em;">Resources</div>
              </div>
          </button>
          <button class="half-button" style="height:3em;">
              <div>
                <div style="font-size:1.5em;display:inline-flex;align-items:center;">14<img src="img/resource.svg" style="height:1em"></div>
                <div style="font-size:.8em;">Community Showcase</div>
              </div>
          </button>
      </div>
  `
}

widget_back["Challenge Pack"]= function(c){
    var html = ``;
    c.cardsInDeck.forEach((x,i)=>{
      html+=`
      <div class="cardBlock">
        <button class="half-button" style="height:2em;width:100%;padding:1em .5em 1em .5em;justify-content:space-between;">
            <div style="display:inline-block;width:10%;text-align:left;">
                <input type="checkbox">
            </div>
            <div style="display:inline-block;width:10%;text-align:left;">
                ${i+1} <img src="img/challenge.svg" style="height:1em">
            </div>
            <div style="display:inline-block;width:76%;text-align:left;">
              <div style="font-size:1em;">${x[1]}</div>
            </div>

        </button>
      </div>
      `
    })

  return html

}


widget["Club"]= function(c){return `
  <div class="cardBlock">

      <button class="half-button" style="height:3em;width:30%;">
          <div>
            <div style="font-size:1.5em;display:inline-flex;align-items:center;">3<img src="img/Create.svg" style="height:1em"></div>
            <div style="font-size:.8em;">Rank</div>
          </div>
      </button>
      <button class="half-button" style="height:3em;width:30%;">
          <div>
            <div style="font-size:1.5em;display:inline-flex;align-items:center;">1/23<img src="img/challenge.svg" style="height:1em"></div>
            <div style="font-size:.8em;">New Showcase</div>
          </div>
      </button>
      <button class="half-button" style="height:3em;width:30%;">
          <div>
            <div style="font-size:1.5em;display:inline-flex;align-items:center;">14<img src="img/collaborate.svg" style="height:1em"></div>
            <div style="font-size:.8em;">Points</div>
          </div>
      </button>
      </div>
      <p>distinguish player, club points, ways to promote club below?</p>
  `

}

widget["Badge"]= function(c){
  return `
    <div class="cardBlock">
      <div class="half-button"  style="width:31%;">
          0 / ${c.cardsInDeck.length}
          Challenge Packs
      </div>
      <div class="half-button" style="width:31%;">
          0 / ${c.cardsInDeck.length * 6}
          Challenges
      </div>
      <div class="half-button" style="width:31%;">
          7 Points
      </div>
    </div>

    <div class="cardBlock" style="align-items:center;margin-top:1em">
        <div style="width:60%">Accumulate 10 Points in ${c.title} by  responding to ${c.title} challenges.
        </div>
        <button class="createButton">Lvl 2 Rewards</button>
    </div>

`
}

widget["Create Badge"] = widget["Badge"];
widget["Collaborate Badge"] = widget["Badge"];
widget["Share Badge"] = widget["Badge"];
widget["Compete Badge"] = widget["Compete"];
