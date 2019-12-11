var image = [
  "image/far_cry_3.jpg",
  "image/crysis_3.jpg",
  "image/devil_hunt.jpg",
  "image/iratus.jpg",
  "image/remnant_from_the_ashes.jpg",
  "image/stay_silent.jpg",
  "image/terminator_resistance.jpg",
  "image/tom_clancy_ghost_recon_breakpoint.jpg"
]

var address = [
  "games/far_cry_3/far_cry_3.html",
  "games/crysis_3/crysis_3.html",
  "games/devil_hunt/devil_hunt.html",
  "games/iratus/iratus.html",
  "games/remnant_from_the_ashes/remnant_from_the_ashes.html",
  "games/stay_silent/stay_silent.html",
  "games/terminator_resistance/terminator_resistance.html",
  "games/tom_clancy_ghost_recon_breakpoint/tom_clancy_ghost_recon_breakpoint.html",
]

window.onload = function (){
  var picture_block = [];
  var picture = "";
  for(let i=0; i<3; i++){
    let step = Math.floor(Math.random()*8);
    var picture_block_1 = `<div class="image_list">
      <a href="${address[step]}">
        <img src="${image[step]}" width="100%" height="100%">
      </a>
    </div>`;
    if(!(picture_block[0] == picture_block_1) && !(picture_block[1] == picture_block_1)){
      picture_block.push(picture_block_1);
      picture += picture_block[i];
    }else{
      i--;
    }
  }
  document.querySelector('.image_main_list').innerHTML = picture;
}
