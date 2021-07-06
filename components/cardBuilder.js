/*

cards have...

notification: bool    will keep reappearing in feed until user action.
title: title          string, max char 40




*/






function card(data){
    return `
      <div class="card">
        <p>${data.title}</p>
      </div>
    `

}
