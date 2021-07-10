

class event_card extends card{
  constructor(type, index){
      super(type, index);
      this.cardHtml = this.makeCardHtml();
  }
  hInnerContent(){
    return this.hDescription()
  }
  hSubtitle(){
    return `<div class="card-subtitle">
            <div style="font-size:.7em;padding-top:.3em;">
                Grades 3-5<br>

            </div>
            </div>`;

  }
}
