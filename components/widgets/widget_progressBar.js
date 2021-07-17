function widget_progressBar(earned = 0, max = 10){
  return `
        <div class="progressBar-outer playerStyles" style="width:40%;">
          <div class="progressBar-inner" style="width:${earned*10}%"></div>
        </div>
          ${earned} / ${max} <img src='img/menu/menu_geniusshop.png' height='32px'>`
}
