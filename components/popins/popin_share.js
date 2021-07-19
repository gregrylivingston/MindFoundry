function popin_share(){
  return `
      <div class="popin playerStyles">
        <h3>Share</h3>
        <button class="selectButton playerStyles">Link</button><br>
        <button class="selectButton playerStyles">Facebook</button><br>
        <button class="selectButton playerStyles">Twitter</button><br>

        <button class="selectButton playerStyles">Email</button><br>

        <button class="selectButton playerStyles" onclick="this.parentElement.remove()">Back</button>
      </div>
  `
}

function addPopin_share(el){
   el.parentElement.parentElement.parentElement.innerHTML+=popin_share();
}
