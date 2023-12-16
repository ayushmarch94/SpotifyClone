
// get song
var song1= new Audio("./songs/Adity.mp3")
var song2= new Audio("./songs/Animals.mp3");
var song3= new Audio("./songs/Faded.mp3");
var song4= new Audio("./songs/Ghungroo.mp3");
var song5= new Audio("./songs/hass.mp3");
var song6= new Audio("./songs/yadav.mp3");

// get the div element card
var clickedOn1= document.querySelector("#one")
var clickedOn2= document.querySelector("#two")
var clickedOn3= document.querySelector("#three")
var clickedOn4= document.querySelector("#four")
var clickedOn5= document.querySelector("#five")
var clickedOn6= document.querySelector("#six")

var flag=1;

//click event on div
clickedOn1.addEventListener("click",()=>{


    //Play song
    if(flag==1){
        song2.pause()
        song3.pause()
        song4.pause()
        song5.pause()
        song6.pause()
        song1.play();
        flag=0;
        console.log("played");
    } 
    else{
        song1.pause()
        flag=1;
    }
    
})
clickedOn2.addEventListener("click",()=>{


    //Play song
    if(flag==1){
        song1.pause()
        song3.pause()
        song4.pause()
        song5.pause()
        song6.pause()
        song2.play();
        flag=0;
        console.log("played");
    } 
    else{
        song2.pause()
        flag=1;
    }
    
})
clickedOn3.addEventListener("click",()=>{


    //Play song
    if(flag==1){
        song2.pause()
        song1.pause()
        song4.pause()
        song5.pause()
        song6.pause()
        song3.play();
        flag=0;
        console.log("played");
    } 
    else{
        song3.pause()
        flag=1;
    }
    
})
clickedOn4.addEventListener("click",()=>{


    //Play song
    if(flag==1){
        song4.play();
        song1.pause()
        song3.pause()
        song5.pause()
        song6.pause()
        song2.pause()
        flag=0;
        console.log("played");
    } 
    else{
        song4.pause()
        flag=1;
    }
    
})
clickedOn5.addEventListener("click",()=>{


    //Play song
    if(flag==1){
        song1.pause()
        song2.pause()
        song3.pause()
        song4.pause()
        song6.pause()
        song5.play();
        flag=0;
        console.log("played");
    } 
    else{
        song5.pause()
        flag=1;
    }
    
})
clickedOn6.addEventListener("click",()=>{


    //Play song
    if(flag==1){
        song6.play();
        song1.pause()
        song2.pause()
        song3.pause()
        song4.pause()
        song5.pause()
        flag=0;
        console.log("played");
    } 
    else{
        song6.pause()
        flag=1;
    }
    
})