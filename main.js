
// get song
var song= new Audio("Adity.mp3");

// get the div element card
var clickedOn= document.querySelector("#one")

var flag=1;

//click event on div
clickedOn.addEventListener("click",()=>{

    
    //Play song
    if(flag==1){
        song.play();
        flag=0;
    } 
    else{
        song.pause()
        flag=1;
    }
    
})