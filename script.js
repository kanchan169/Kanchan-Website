console.log("Welcome to Kansic");

// Intitialize the variables
let songIndex=0;
let audioElement = new Audio("music/Mero Solta.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songs = [
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"},
  {songName:"Mero Solta", filePath:"music/Mero Solta.mp3", coverPath:"cover/Mero Solta.jpg"}
]
// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play(); // Play Audio
      masterPlay.classList.remove("fa-regular", "fa-circle-play");
      masterPlay.classList.add("fa-solid", "fa-circle-pause");
  } else {
      audioElement.pause(); // Pause Audio
      masterPlay.classList.remove("fa-solid", "fa-circle-pause");
      masterPlay.classList.add("fa-regular", "fa-circle-play");
  }
  })
// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
  console.log('timeupdate')
  //
})