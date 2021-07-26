
class section_challenge extends section{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }

  makeCardHtml(){
      return  `
        <div class="section playerStyles-bg" id="${this.docId}">
            ${widget_header(this.badgeImg,this.title,this.hSubtitle())}
            ${card_monthly_challenge(data["Challenge"][this.index] , '', '')}
            ${widget_resource(this)}
        </div>
        ${get_cards("parentCarad",this.title)}
      `;
  }

  hSubtitle(){
              return `<div class="card-subtitle">
                      <div style="font-size:.85em;padding-top:.3em;">
                          Skill: ${widget_level(this.Skill)}<br>
                          Effort:  ${widget_level(this.Effort)}
                      </div>
                      </div>`
  }
}
