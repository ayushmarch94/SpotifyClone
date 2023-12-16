// Create an object to store songs
var songs = {
    song1: new Audio("./songs/Adity.mp3"),
    song2: new Audio("./songs/Animals.mp3"),
    song3: new Audio("./songs/Faded.mp3"),
    song4: new Audio("./songs/Ghungroo.mp3"),
    song5: new Audio("./songs/hass.mp3"),
    song6: new Audio("./songs/yadav.mp3")
};

var currentSong = null;

function playOrPause(song) {
    if (currentSong !== song) {
        if (currentSong) {
            currentSong.pause();
            currentSong.currentTime = 0; // Reset song to start
        }
        currentSong = song;
        currentSong.play();
    } else {
        if (currentSong.paused) {
            currentSong.play();
        } else {
            currentSong.pause();
        }
    }
}

// Get elements by IDs
var clickedOn1 = document.getElementById("one");
var clickedOn2 = document.getElementById("two");
var clickedOn3 = document.getElementById("three");
var clickedOn4 = document.getElementById("four");
var clickedOn5 = document.getElementById("five");
var clickedOn6 = document.getElementById("six");

// Add click event listeners to each element
clickedOn1.addEventListener("click", () => {
    playOrPause(songs.song1);
});

clickedOn2.addEventListener("click", () => {
    playOrPause(songs.song2);
});

clickedOn3.addEventListener("click", () => {
    playOrPause(songs.song3);
});

clickedOn4.addEventListener("click", () => {
    playOrPause(songs.song4);
});

clickedOn5.addEventListener("click", () => {
    playOrPause(songs.song5);
});

clickedOn6.addEventListener("click", () => {
    playOrPause(songs.song6);
});

var pauser =document.getElementById("pauser");

pauser.addEventListener('click',()=>{
    currentSong.pause();
    currentSong.currentTime = 0;
})

setInterval(function(){
    let percentage=(songs.song1.currentTime/songs.song1.duration)*100;
})