class wFooter{
  constructor(cardRules){
    this.leftWid = [];
    this.rightWid = [];
    (cardRules.fPin==true)?this.rightWid.push(widget_fPin()):'';
    (cardRules.fFriend==true)?this.rightWid.push(widget_fFriend()):'';
    (cardRules.fReact==true)?this.leftWid.push(widget_fReact()):'';
    (cardRules.fAward==true)?this.leftWid.push(widget_fAward()):'';

    this.leftWidgets="";
    this.rightWidgets="";
    this.leftWid.forEach(x=>this.leftWidgets+=x);
    this.rightWid.forEach(x=>this.rightWidgets+=x);
  }

  addLeft(html){this.leftWidgets+=html;}
  addRight(html){this.rightWidgets+=html;}

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

class widget_footer{
    constructor(leftWid,rightWid){
      this.leftWidgets="";
      this.rightWidgets="";
      leftWid.forEach(x=>this.leftWidgets+=x);
      rightWid.forEach(x=>this.rightWidgets+=x);
    }

    addLeft(html){this.leftWidgets+=html;}
    addRight(html){this.rightWidgets+=html;}

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
var friendHTML = '<img class="footerButton" src="img/menu/favorite_checked.png" onclick="this.parentElement.innerHTML = widget_fFriend()">';

function widget_fFriend(){
  return `
        <div style="display:inline-flex"><img class="footerButton" src="img/menu/menu_usercrew.png" onclick="this.parentElement.innerHTML=friendHTML"></div>
        `
}


function widget_fReact(){
  return `
          <img class="footerButton"  src="img/menu/react.png">
        `
}

var pinnedHTML = '<img class="footerButton" src="img/menu/favorite_checked.png" onclick="this.parentElement.innerHTML = widget_fPin()">';
function widget_fPin(){
  return `
          <div style="display:inline-flex"><img class="footerButton" src="img/menu/favorite_unchecked.png" onclick="this.parentElement.innerHTML=pinnedHTML"></div>
        `
}

function widget_fAward(){
  return `
          <img class="footerButton" src="img/menu/award.png">
        `
}

function widget_fMenu(){
  return `
        <img class="footerButton"  onclick="addPopin_menu(this)" src="img/menu/menu_expand.png">
        `
}

function widget_fShare(){
  return `
      <!--  <button class="selectButton playerStylesButton">-->
          <img class="footerButton" onclick="addPopin_share(this)" src="img/menu/share.png">
      <!--  </button>-->
        `
}


function wHeader(c){
    return `

        <div style="width:100%;display:inline-flex;align-items:center;background:rgba(255,255,255,0);">
            <div style="width:25%;background:white;border-top-left-radius:20%;border-bottom-right-radius:10px;"">
                <button class="headerButton" onclick="viewCard('card${c.index}')">
                <img src="img/mf_logo.png" style="height:1em;"><!-- flip card for menu & help -->
                </button>
            </div>
            <div style="width:50%;">

            </div>
            <div style="width:25%;background:white;border-top-right-radius:20%;border-bottom-left-radius:10px;">
              <button class="headerButton" onclick="document.getElementsByClassName('card${c.index}')[0].classList.add('flipped')">
                <h3>${c.type}</h3>
            </div>
        </div>
    `
}

function wRHeader(c){
    return `

    <div style="width:100%;display:inline-flex;background:white;">
        <div style="width:25%;">
            <button class="headerButton" onclick="viewCard('card${c.index}')">
            <img src="img/mf_logo.png" style="height:1em;"><!-- flip card for menu & help -->
            </button>



        </div>
        <div style="width:50%;">
        </div>
        <div style="width:25%;background:white;border-top-right-radius:20%;border-bottom-left-radius:10px;">
          <button class="headerButton" onclick="document.getElementsByClassName('card${c.index}')[0].classList.remove('flipped')">
            <h3>${c.type}</h3>
        </div>
    </div>
    `
}
