var correct = 1;

function overlay_off() {
  document.getElementById("overlay").style.display = "none";
}


function passWord() {
    var inputPSWD = document.getElementById('inputPSWD').value;
    var myPSWD = "amazon";
    if (inputPSWD === myPSWD){
        overlay_off();
    }
    else {
        document.getElementById("inputPSWD").style.backgroundColor = "rgba(255, 100, 124, .05)";
        document.getElementById("inputContact").style.border = "solid 1px rgba(255, 100, 124, 1)";
        correct = 0;
    }
}

function backToNormal(e) {
    var keyPress = e.which || e.keyCode;
    if (correct == 0 && keyPress != 13) {
        document.getElementById("inputPSWD").style.backgroundColor = "transparent";
        document.getElementById("inputContact").style.border = "solid 1px rgba(0, 0, 0, .1)";
        correct = 1;
    }
}

