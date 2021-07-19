
class widget_footer{
    constructor(leftWid,rightWid){
      this.leftWidgets="";
      this.rightWidgets="";
      leftWid.forEach(x=>this.leftWidgets+=x);
      rightWid.forEach(x=>this.leftWidgets+=x);
    }

    addLeft(html){this.leftWidgets+=html;}
    addRight(html){this.leftWidgets+=html;}

    html (){
      return `
    <div class="card-footer">
      <div class="card-footer-left">
          ${this.leftWidgets}
      </div>
      <div class="card-footer-right">
          ${this.rightWidgets}
      </div>
    </div>
    `
    }

}

function widget_fFriend(){
  return `
        <button class="selectButton playerStylesButton">
          <img src="img/menu/menu_usercrew.png">
        </button>
        `
}


function widget_fReact(){
  return `
        <button class="selectButton playerStylesButton">
          <img src="img/menu/react.png">
        </button>
        `
}

function widget_fMenu(){
  return `
      <button class="selectButton playerStylesButton" onclick="addPopin_menu(this)">...</button>
        `
}

function widget_fShare(){
  return `
        <button class="selectButton playerStylesButton" onclick="addPopin_share(this)"><img src="img/menu/share.png"></button>
        `
}
