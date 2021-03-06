class wFooter{
  constructor(c){
     this.c = c;
  }
  html (){
  if ( (this.c.type!="GM Card") && (this.c.type!="Coach Card")){
    return `
  <div class="card-footer">
    <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;font-size:1.5em;">
      0 <img src="img/resource.svg" style="height:1em;">
    </div>
    <div class="card-footer-left">
        <div class="rating" style="border-top-right-radius:.5em;border-top-left-radius:.5em">
        Beginner
        </div>
        <div class="rating">
            <div class="checked"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;font-size:1.3em">
       Rank #712
    </div>
  </div>
  `
} else if ( this.c.type == "GM Card"){
      return `
      <div class="card-footer">
        <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;font-size:1.5em;">
            102 <img src="img/resource.svg" style="height:1em;">
        </div>
        <div class="card-footer-left">
            <div class="rating" style="border-top-right-radius:.5em;border-top-left-radius:.5em">
               Genius
            </div>
            <div class="rating">
                <div class="checked"></div>
                <div class="checked"></div>
                <div class="checked"></div>
                <div class="checked"></div>
                <div class="checked"></div>
            </div>
        </div>
        <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;font-size:1.5em">
           Rank #3
        </div>
      </div>`

    }else{
      return `
      <div class="card-footer">
        <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;font-size:1.5em;">
            43 <img src="img/resource.svg" style="height:1em;">
        </div>
        <div class="card-footer-left">
            <div class="rating" style="border-top-right-radius:.5em;border-top-left-radius:.5em">
               Advanced
            </div>
            <div class="rating">
                <div class="checked"></div>
                <div class="checked"></div>
                <div class="checked"></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div style="width:33%;display:inline-flex;align-items:center;justify-content:center;font-size:1.5em">
           Rank #19
        </div>
      </div>`
    }
  }
}



function widget_fReact(){
  return `
          <img class="footerButton"  src="img/menu/react.png">
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


var pinnedHTML = '<img class="footerButton" src="img/bookmark-heart.svg" onclick="this.parentElement.innerHTML = widget_fPin()">';
function widget_fPin(){
  return `
          <div style="display:inline-flex"><img class="footerButton" src="img/bookmark.svg" onclick="this.parentElement.innerHTML=pinnedHTML"></div>
        `
}

function wHeader(c){
      var type = c.type;
      var topmargin ="-16px";
      var alignItems="center"
      if (c.type=="Challenge Pack" || c.type=="Card Pack" || c.type=="Demo"){
        (c.type=="Challenge Pack")? type = c.parentCard: type=c.type;
        topmargin = "0px";
        alignItems="top"
      }
      if  (type.indexOf("Badge")>0){
          let virtue = type.substring(0,type.indexOf("Bad")-1);
          let virtueImg = `<img src="img/${virtue}.svg">`
          type = virtueImg + "&nbsp;"+type.substring(type.indexOf("Bad"),type.length);
      }

    return `

        <div style="width:100%;display:inline-flex;align-items:${alignItems};height:1.4em;">
            <div style="width:32%;">

                <button class="headerButton" onclick="viewCard('${c.index}')">

                  <!-- flip card for menu & help -->
                </button>
            </div>

            <div style="width:34%;margin-top:${topmargin};background:white;border-bottom-right-radius:1em;border-bottom-left-radius:1em;">
            <button onclick='breakDecks(${type})' style="background:none;border:none;">
              <div style="display:inline-flex;align-items:center">${type}</div>
              </button>
            </div>
            <div style="width:32%;text-align:right;">
                ${widget_fPin()}

                <button class="headerButton" onclick="document.getElementsByClassName('card${c.index}')[0].classList.add('flipped')">
                <img src="img/tornado.svg" style="height:1.5em;">
                </button>

                <button class="headerButton" style="text-align:right;" onclick="viewCard('${c.index}')">
                <img src="img/eye.svg" style="height:1.5em;">
                </button>

            </div>
        </div>
    `
}

function wRHeader(c){
    return `

    <div style="width:100%;display:inline-flex;align-items:center;">
        <div style="width:32%;">

        </div>
        <div style="width:34%;border-bottom-right-radius:1em;border-bottom-left-radius:1em;">

        </div>
        <div style="width:32%;text-align:right;">
              <button class="headerButton" onclick="document.getElementsByClassName('card${c.index}')[0].classList.remove('flipped')">
              <img src="img/tornado.svg" style="height:1.5em;">
              </button>
            <button class="headerButton" style="text-align:right;" onclick="viewCard('card${c.index}')">
              <img src="img/eye.svg" style="height:1.5em;">
            </button>
        </div>
    </div>
    `

}

function widget_header(badge,title,subtitle){
      return `
              <div class="card-header">
                 ${badge}

                   <h1>${title}
                   </h1>
                   <div class="card-subtitle">
                               <div style="font-size:.7em;padding-top:.3em;">
                                  ${subtitle}
                               </div>
                  </div>
              </div>`
}
