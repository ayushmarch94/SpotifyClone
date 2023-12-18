let index=0;
let audio = new Audio('./songs/Adity.mp3');
let pauser =document.getElementById('pauser');
let seekbar = document.getElementById('seekbar');


let songs = [
    {songName: 'Kabhi kabhi Adity', filePath: './songs/Adity.mp3', coverPath :'./images/Adity.jpg'},
    {songName: 'Kabhi kabhi Adity', filePath: './songs/Adity.mp3', coverPath :'./images/Adity.jpg'},
    {songName: 'Kabhi kabhi Adity', filePath: './songs/Adity.mp3', coverPath :'./images/Adity.jpg'},
    {songName: 'Kabhi kabhi Adity', filePath: './songs/Adity.mp3', coverPath :'./images/Adity.jpg'},
    {songName: 'Kabhi kabhi Adity', filePath: './songs/Adity.mp3', coverPath :'./images/Adity.jpg'}
];


audio.addEventListener('timeupdate',()=>{
    let seek=parseInt((audio.currentTime/audio.duration)*100);
    seekbar.value=seek;
})


pauser.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        pauser.src ='./images/pause.png';
    }
    else{
        audio.pause();
        pauser.src ='../images/play.png';
    }
})

seekbar.addEventListener('change',()=>{
    audio.currentTime=seekbar.value*audio.duration/100;
})