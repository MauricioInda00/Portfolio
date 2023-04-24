const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Select media stream, pass to video element and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Error Handling
    console.log("Something went wrong :c", error);
  }
}

button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;
  //Start PiP
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disabled = false;
});

//On load
selectMediaStream();
