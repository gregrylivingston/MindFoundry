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
