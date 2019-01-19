function drumBeat(action, name) {
  playAudio(action);
}

window.addEventListener('keydown', function(key) {
  playAudio(key.key.toUpperCase());
});

function playAudio(letter) {
  document.getElementById(letter).play();
  displayType(letter);
}

function displayType(letter) {
  type = "<br />"
  switch (letter) {
    case "Q":
      type = "Closed Hat";
      break;
    case "W":
      type = 'Crash Symbol';
      break;
    case "E":
      type = "Kick Drum";
      break;
    case "A":
      type = "No Snare";
      break;
    case "S":
      type = "Open Hat";
      break;
    case "D":
      type = "Rim";
      break;
    case "Z":
      type = "Snare Buzz";
      break;
    case "X":
      type = "Tambourine";
      break;
    case "C":
      type = "Trash";
      break;
    }
  document.getElementById("display").innerHTML = type;
}
