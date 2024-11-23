let video;

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;
  console.log("Autoplay is " + video.autoplay);
  console.log("Loop is " + video.autoplay);
});

// Play the video and update the volume information.
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  console.log("Play Video");
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause the video.
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

// Slow the current video speed by 10% each time the button is clicked
// and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function () {
  console.log("slow down video");
  video.playbackRate *= 0.9;
  console.log("Speed is ", video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function () {
  console.log("speed up video");
  video.playbackRate *= 1.1;
  console.log("Speed is ", video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current video time is ", video.currentTime);
});

// Mute/unmute the video and update the text in the button.
let muteBtn = document.querySelector("#mute");
muteBtn.addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		muteBtn.textContent = "Mute";
	} else {
		video.muted = true;
		muteBtn.textContent = "Unmute";
	}
});

// Change the volume based on the slider and update the volume information.
let displayVolume = document.querySelector("#volume");
document.querySelector("#slider").addEventListener("input", function (event) {
	video.volume = event.target.value / 100;
	console.log("Video volume is ", video.volume);
	displayVolume.textContent = video.volume * 100 + "%";	
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});