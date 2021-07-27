

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
