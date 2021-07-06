/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: title          string, max char 40




*/






function card(data){
    return `
      <div class="card">
        <div class="card-header">
          <img class="card-header-img" src="img/profile.png">
          <div class="card-title-group">
            <div class="card-title">${data.title}</div>
            <div class="card-subtitle">${data.subtitle}</div>
          </div>
        </div>
      </div>
    `

}
