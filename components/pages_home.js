
function getHomePage(){
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0;
  document.getElementById("cards").innerHTML =
  `
          <div class="page-section mf-yellow">
            <h1>Profile</h1>
            ${get_cards("title","Spellbound")}
            ${get_cards("title","Rewards")}

            <button class="bubbly-button">Click me!</button>



          </div>

          <div class="page-section mf-blue2">
            <h1>Events</h1>
            ${get_cards("title","Minecraft Explorers")}
          </div>

          <div class="page-section mf-yellow">
            <h1>Friends</h1>
            ${get_cards("title","Harrison")}
            ${get_cards("title","YoungerPetr")}
          </div>


          <div class="page-section mf-orange">
               <h1>Create</h1>
               ${get_cards("title","Create")}
          </div>
          <div class="page-section mf-blue2">
               <h1>Collaborate</h1>
               ${get_cards("title","Collaborate")}
          </div>
          <div class="page-section mf-purple">
               <h1>Compete</h1>
               ${get_cards("title","Compete")}
          </div>
          <div class="page-section mf-purple">
               <h1>Share</h1>
               ${get_cards("title","Share")}
          </div>
        `;
        activateCards();
}
