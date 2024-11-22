let video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is " +video.autoplay)
	console.log("Loop is " +video.autoplay)
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function(){
	video.play()
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 +"%"
});
document.querySelector("#pause").addEventListener("click", function(){
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down video")
	video.playbackRate *= .90
	console.log("Speed is ", video.playbackRate)
});