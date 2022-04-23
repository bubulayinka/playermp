const musicImage = document.querySelector(".image");
const musicTitle = document.querySelector(".songName");
const musicArtistName = document.querySelector(".ArtistName");
const audio = document.querySelector(".music");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const play = document.querySelector(".play");
const download = document.querySelector(".download");
const love = document.querySelector(".love");
const vol = download.querySelector('#duration-slider')
love.addEventListener('click', function onclick(){
    love.style.color = 'tomato';
});
const musicArrary=[
    {
        musicTitle : "one",
        artistName : "oneplay",
        image:"./img/one.jpg",
        audio:"./songs/one.mp3",
    },
    {
        musicTitle : "two",
        artistName : "twoplay",
        image:"./img/two.jpg",
        audio:"./songs/two.mp3",
     },
     {
        musicTitle : "three",
        artistName : "threeplay",
        image:"./img/three.jpg",
        audio:"./songs/three.mp3",
     },
     {
        musicTitle : "four",
        artistName : "fourplay",
        image:"./img/four.jpg",
        audio:"./songs/four.mp3",
     },
     {
        musicTitle : "five",
        artistName : "fiveplay",
        image:"./img/five.jpg",
        audio:"./songs/fiv.mp3",
     },
];

let currentSong = 0;


function callSong() {
    audio.src = musicArrary[currentSong].audio;
    musicImage.src = musicArrary[currentSong].image;
    musicTitle.textContent = musicArrary[currentSong].musicTitle;
    musicArtistName.textContent = musicArrary[currentSong].artistName;
    download.href = musicArrary[currentSong].audio;
}


window.onload = callSong();


play.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
        
    }
    else{
        audio.pause();
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
    };
});
next.addEventListener("click", () =>{
    currentSong++;

    if(currentSong > musicArrary.lenght - 1){
        currentSong = 0;
    }
    callSong();
});

previous.addEventListener("click", () =>{
    currentSong--;

    if(currentSong < 0){
        currentSong = musicArrary.length - 1;
    }
    callSong();
})