var widget = {};

widget["Player Card"] = function(c){
  c.cardsInDeck = data["card"].filter(x=>x[data["cardKey"].indexOf("owner")]==this.title);
  return `

  <div class="cardBlock">
   ${widget_attributeSummary("Charisma" , 0)}
   ${widget_attributeSummary("Perception" , 0)}
   </div>
   <div class="cardBlock">
  ${widget_attributeSummary("Wisdom" , 1)}
  ${widget_attributeSummary("Logic" , 1)}
  </div>
  <div class="cardBlock">

   ${widget_attributeSummary("Resilience" , 3)}
   ${widget_attributeSummary("Dexterity" , 0)}
   </div>

  `

}

widget["Virtue Card"]= function (c){
  return `
  <div style="display:inline-flex;width:90%;">
    <div class="half-button">
        3 &nbsp; <img src="img/brain.png">
    </div>
    <div class="half-button">
        3 &nbsp; <img src="img/menu/award.png">
        </div>
</div>`
}

widget["Mind Foundry"]= function (c){
  return `
    An incredible online experience helping children discover their inner genius.
    <ul>
      <li>Live online events promoting healthy cooperation and competition.</li>
      <li>Challenges and rewards promoting creation, innovation, and sharing.</li>
      <li>Clubs, Prizes, Group Programs and More.</li>
    </ul>
    <div class="cardBlock">
      <button class="playerStylesButton half-button">
        Join Now
      </button>
      <a href="" class="half-button">
        Sign In
      </a>
    </div>
  `
}
