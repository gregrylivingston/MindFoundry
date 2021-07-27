

function widget_header(badge,title,subtitle){
      return `
              <div class="card-header">
                 ${badge}

                  <div class="card-title-group">
                   <div class="card-title">${title}
                   </div>
                   <div class="card-subtitle">
                               <div style="font-size:.7em;padding-top:.3em;">
                                  ${subtitle}
                               </div>
                   </div>
                  </div>
              </div>`
}
