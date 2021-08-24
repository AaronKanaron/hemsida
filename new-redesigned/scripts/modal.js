//=------------=//
// Get Elements //
//=------------=//

//Modal / Popup Elements
const open = document.getElementById("open");
const modal_container = document.getElementById("modal-container");
const close = document.getElementById("close");
const video = document.getElementById("video");

//=------------------------=//
// Modal / Popup Close/Open //
//=------------------------=//

open.addEventListener("click", () =>{
    console.log("Klickade på show")
    modal_container.classList.add('show');
});

close.addEventListener("click", () =>{
    video.pause();
    video.currentTime = 0;
    console.log("Klickade på close")
    modal_container.classList.remove('show');
});

