function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running

  // rewind to the soundfiles start, so you get sound every time you press the same key
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", playSound);
