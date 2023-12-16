var song= new Audio("1.mp3");
var clickedOn= document.querySelector("#one")
console.log("check");
clickedOn.addEventListener("click",()=>{
    song.play();
})