
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
          <img src="img/menu/menu_usercrew.png">
        `
}


function widget_fReact(){
  return `
          <img src="img/menu/react.png">
        `
}

function widget_fMenu(){
  return `
        <img onclick="addPopin_menu(this)" src="img/menu/share.png">
        `
}

function widget_fShare(){
  return `
      <!--  <button class="selectButton playerStylesButton">-->
          <img onclick="addPopin_share(this)" src="img/menu/share.png">
      <!--  </button>-->
        `
}
