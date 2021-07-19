function popin_menu(){
  return `
      <div class="popin playerStyles">
        Menu<br>
        <button class="selectButton playerStyles">Report issue</button><br>
        <button class="selectButton playerStyles" onclick="this.parentElement.remove()">Back</button>
      </div>
  `
}

function addPopin(el){
   el.parentElement.parentElement.parentElement.innerHTML+=popin_menu();
}
