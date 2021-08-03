
widget["Create"]= function(c){
  return `
    <div class="cardBlock">
          <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;">
            Rank 9
          </div>
          <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;">
            7 <img src="img/Create.svg" style="height:1em;">
          </div>
          <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;">
             2
            <img src="img/resource.svg" style="height:1em;">
          </div>
    </div>
    <div class="cardBlock">
        <div style="width:32%;style:inline-block;">
              <button class="half-button" style="height:4em;display:inline-block;">
                <img src="img/file-play.svg" style="height:2em"><br>
                3
            </button>
            <button class="half-button" style="height:4em;display:inline-block;">
                <img src="img/file-music.svg" style="height:2em">
                0
            </button>
        </div>
        <div style="width:32%;style:inline-block;">
            <button class="half-button" style="height:4em;display:inline-block;">
                <img src="img/file-code.svg" style="height:2em">
                0
            </button>
            <button class="half-button" style="height:4em;display:inline-block;">
                  <img src="img/file-text.svg" style="height:2em">
                  0
              </button>
        </div>
        <div style="width:32%;style:inline-block;">
              <button class="half-button" style="height:4em;display:inline-block;">
                  <img src="img/file-richtext.svg" style="height:2em">
                  0
              </button>
              <button class="half-button" style="height:4em;display:inline-block;">
                  <img src="img/file-image.svg" style="height:2em">
                  0
              </button>
        </div>
    </div>



`
}

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



widget["Badge"]= function(c){
    var html = `


    `;
    c.cardsInDeck.forEach(x=>{
      html+=`<br>
      <div class="cardBlock">
        <button class="half-button" style="height:2em;width:100%;padding:0em .5em 0 .5em;">
            <div style="display:inline-block;width:80%;text-align:left;">
              <div style="font-size:1em;">${x[1]}</div>
              </div>

          <!--    <div style="font-size:1.6em;display:inline-flex;align-items:center;justify-content:space-around;width:50%;">
                0/7
                2
                2
              </div>-->
        </button>
      </div>
      `
    })
      html+=`
      <div class="cardBlock">

          <button class="half-button" style="height:3em;width:30%;">
              <div>
                <div style="font-size:1.5em;display:inline-flex;align-items:center;">22<img src="img/Create.svg" style="height:1em"></div>
                <div style="font-size:.8em;">Points</div>
              </div>
          </button>
          <button class="half-button" style="height:3em;width:30%;">
              <div>
                <div style="font-size:1.5em;display:inline-flex;align-items:center;">1/23<img src="img/challenge.svg" style="height:1em"></div>
                <div style="font-size:.8em;">Challenges</div>
              </div>
          </button>
          <button class="half-button" style="height:3em;width:30%;">
              <div>
                <div style="font-size:1.5em;display:inline-flex;align-items:center;">14<img src="img/resource.svg" style="height:1em"></div>
                <div style="font-size:.8em;">Resources</div>
              </div>
          </button>
          </div>


      `
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
