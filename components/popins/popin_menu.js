function popin_menu(){
  return `
      <div class="popin playerStyles">
        <h3>Menu</h3>
        <button class="selectButton playerStyles">Report issue</button><br>
        <button class="selectButton playerStyles" onclick="this.parentElement.remove()">Back</button>
      </div>
  `
}

function addPopin_menu(el){
   el.parentElement.innerHTML+=popin_menu();
}
