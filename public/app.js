const placeholder=document.getElementById("placeholder");
const placeholderKey=document.getElementById("placeholder-key");
const placeholderDisplay=document.getElementById("placeholder")
const placeholderCode=document.getElementById("placeholder-code");
const placeholderWhich=document.getElementById("placeholder-which");
// const keyPressed=document.getElementById("keycode")

window.addEventListener("keypress", ()=>{
    placeholderDisplay.innerHTML=event.key;
    placeholderKey.innerHTML=event.key;
    placeholderCode.innerHTML=event.code;
    placeholderWhich.innerHTML=event.which;
})


