function getCreatePage(){
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0;
  document.getElementById("cards").innerHTML =  `
    <div class="mf-orange page-section">
      <div class="topbar">
        <div style="width:100%;display:inline-flex;">
          <h1>Create
          </h1>

        </div>



        <div style="width:100%;display:inline-flex;">
            <p>
                <b>Create cards</b> are exciting <b>solo challenges.</b>
                Each completed challenge earns a <b>showcase card</b> and <b>coins</b> that can be exchanged
                for <b>rewards.</b>
            </p>
        </div>
    </div>

      ${get_cards("title","Create")}



    </div>


         <div class="page-section">
              <h1>Recent Challenges
                &nbsp;&nbsp;&nbsp;
                <div class="searchBar" style="display:inline-flex;" style="width:70%;">
                    <img src="img/search.svg" style="height:1em;padding:0 .5em 0 .5em;">
                  <input id="search" style="background:rgba(255,255,255,.2);font-size:.9em;border:none;" placeholder="Mind Foundry" style="width:80%;">
                </div>
                &nbsp;&nbsp;&nbsp;

              </h1>
              ${get_cards("title","New Challenge")}
              ${get_cards("title","Dance Production Studio")}
         </div>

         <div class="page-section mf-red">
              <h1>Writing Challenges</h1>
              ${get_cards("title","New Challenge")}
         </div>
          <div class="page-section mf-blue2">
               <h1>Video Challenges</h1>
               ${get_cards("title","New Challenge")}
          </div>
         <div class="page-section mf-yellow">
              <h1>Audio Challenges</h1>
              ${get_cards("title","New Challenge")}
         </div>
          <div class="page-section mf-purple">
               <h1>Project Challenges</h1>
               ${get_cards("title","New Challenge")}
          </div>
  ` + `

   `;
   activateCards();
}




function getSharePage(){
  document.getElementsByClassName("innerScrollDesktop")[0].scrollTop = 0;
  document.getElementById("cards").innerHTML =
  `
          <div class="page-section mf-yellow">
            <h1>Share</h1>


          </div>


          <div class="page-section mf-purple">
               ${get_cards("title","Share Badges")}
               ${get_cards("title","Resource Badges")}


          </div>
        `;
        activateCards();
        boxinit();

      }
