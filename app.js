const app =()=>{
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline=document.querySelector(".moving-outline circle");
    const video=document.querySelector(".vid-container video");
   
    const sounds=document.querySelector(".sound-picker button");

    const timeDisplay=document.querySelector(".time-display");

    const outlineLength=outline.getTotalLength();
    
    let fakeDuration=600;

    outline.style.strokeDasharray=outlineLength;
    outline.style.strokeDashoffset=outlineLength;

  //Play sound
  play.addEventListener("click",()=>{
      checkPlaying(song);
  });
  
  //function to stop and play the sound
  const checkPlaying = song =>{
      if(song.paused){
          song.play();
          video.play();
          play.src="./svg/pause.svg";
      }else{
          song.pause();
          video.pause();
          play.src="./svg/play.svg";
      }
  }

  //animate the circle
song.ontimeupdate = ()=>{
    let currentTime=song.currentTime;
    let elapsed = fakeDuration - currentTime
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    

    //animate the circle
    let progress=outlineLength - (currentTime/fakeDuration)*outlineLength;
    outline.style.strokeDashoffset=progress;

    //Animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;
  }

};

app();