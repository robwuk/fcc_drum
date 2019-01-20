var headerElements = [["div", "title", "col-md-12 title", "Javascript Drumkit!", "drum-machine__title"],
                ["div", "author", "col-md-12 subtitle", "created by Robert Worth", "drum-machine__title"],
                ["div", "display", "col-md-12 drumused", "<br />", "drum-machine__title"]];

var bodyElements = [["div", "closedhat", "col-md-4 drum-pad", "Q", "drum-kit"],
                    ["div", "crash", "col-md-4 drum-pad", "W", "drum-kit"],
                    ["div", "kick", "col-md-4 drum-pad", "E", "drum-kit"],
                    ["div", "nosnare", "col-md-4 drum-pad", "A", "drum-kit"],
                    ["div", "openhat", "col-md-4 drum-pad", "S", "drum-kit"],
                    ["div", "rim", "col-md-4 drum-pad", "D", "drum-kit"],
                    ["div", "snarebuzz", "col-md-4 drum-pad", "Z", "drum-kit"],
                    ["div", "tambourine", "col-md-4 drum-pad", "X", "drum-kit"],
                    ["div", "trash", "col-md-4 drum-pad", "C", "drum-kit"]];

function drumBeat(action, name) {
  playAudio(action);
}

window.addEventListener('keydown', function(key) {
  console.log(key.key.toUpperCase())
  playAudio(key.key.toUpperCase());
});

function playAudio(letter) {

  //document.getElementById(letter).play();
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

function createPage(array, button){
  for (let i = 0; i < array.length; i++) {
    var newDiv = document.createElement(array[i][0]);
    newDiv.id = array[i][1];
    newDiv.className = array[i][2];
    newDiv.innerHTML = (array[i][3]);

    if (button) {
      newDiv.onclick = function() {
        playAudio(this.innerHTML);
      };

    }
    //newDiv.appendChild(newContent);
    var currentDiv=document.getElementById(array[i][4]);
    currentDiv.appendChild(newDiv);
  };


}

window.onload=createPage(headerElements, false);
window.onload=createPage(bodyElements, true);
