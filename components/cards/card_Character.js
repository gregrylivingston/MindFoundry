
function card_Character(character){
      return `
             <div class="card-section playerStylesCard">
                <h3>Attribute</h3>
                <h2>${character.title}</h2>
                <div style="width:100%;text-align:center;margin:.5em 0 .5em 0;" class="playerStyles">
                  <img style="width:50%;" src="${character.imgSrc}">
                </div>
                <div style="width:100%;display:inline-flex;justify-content:space-between;">
                    <div class="playerStylesButton attributeRow">
                        3 &nbsp; <img src="img/brain.png">
                    </div>
                    <div class="playerStylesButton attributeRow">
                        3 &nbsp; <img src="img/menu/award.png">
                    </div>
                </div>
                <div style="margin:.7em 0 .7em 0">
                  ${character.Description}
                </div>

                            ${new widget_footer(
                               [widget_fFriend()],
                               [widget_fShare(),widget_fMenu()]
                             ).html()}
             </div>`
}
