let musicBtn = document.getElementById("musicBtn");
const osc = new Tone.Oscillator().toDestination();
Tone.Transport.bpm.value = 185;
let counter = 0;
let introDone = false;
let cycles = 0;

musicBtn.onclick = function () {
  if (musicBtn.innerHTML == "Play Lamarr's P5 Work Out by J Cole") {
    musicBtn.innerHTML = "Pause Lamarr's P5 Work Out by J Cole";
    Tone.Transport.start();
  } else {
    musicBtn.innerHTML = "Play Lamarr's P5 Work Out by J Cole";
    Tone.Transport.stop();
  }
};
// start/stop the oscillator every quarter note
Tone.Transport.scheduleRepeat((time) => {
  if (counter == 0) {
    cycles++;
  }
  counter++;
  console.log(time);
  let wofm = new Tone.Player("day4Notes/hook/WOFM.m4a").toDestination();
  if (!introDone) {
    intro(counter);
    if (counter == 31) {
      introDone = true;
      counter = -9;
    } else {
      counter %= 31;
    }
  }
  if (counter == -7) {
    wofm.autostart = true;
  }
  console.log(counter);
  console.log(cycles);
  if (
    introDone &&
    cycles != 4 &&
    cycles != 6 &&
    cycles != 7 &&
    cycles != 8 &&
    cycles != 16 &&
    cycles != 17 &&
    cycles != 18
  ) {
    hook(counter);
    background(counter);
    drums(counter);
    counter %= 31;
  } else if (
    introDone &&
    cycles == 4 &&
    cycles == 6 &&
    cycles == 7 &&
    cycles == 16 &&
    cycles == 18
  ) {
    drums(counter);
    hook(counter);
    counter %= 31;
  } else if (introDone) {
    drums(counter);
    counter %= 31;
  }
}, "4n");
function intro(counter) {
  let audio1 = new Tone.Player("day4Notes/intro/1.m4a").toDestination();
  let audio1Array = [1];
  let audio2 = new Tone.Player("day4Notes/intro/2.m4a").toDestination();
  let audio2Array = [9];
  let audio3 = new Tone.Player("day4Notes/intro/3.m4a").toDestination();
  let audio3Array = [17, 23];
  let audio4 = new Tone.Player("day4Notes/intro/4.m4a").toDestination();
  let audio4Array = [24, 29];
  let audio5 = new Tone.Player("day4Notes/intro/5.m4a").toDestination();
  let audio5Array = [25];
  for (i = 0; i < counter; i++) {
    if (counter == audio1Array[i]) {
      audio1.autostart = true;
    }
    if (counter == audio2Array[i]) {
      audio2.autostart = true;
    }
    if (counter == audio2Array[i]) {
      audio2.autostart = true;
    }
    if (counter == audio3Array[i]) {
      audio3.autostart = true;
    }
    if (counter == audio4Array[i]) {
      audio4.autostart = true;
    }
    if (counter == audio5Array[i]) {
      audio5.autostart = true;
    }
  }
}
function drums(counter) {
  let dum = new Tone.Player("day4Notes/background/bottom.m4a").toDestination();
  let dumArray = [26];
  let doom = new Tone.Player(
    "day4Notes/background/doom_quiet.MP3"
  ).toDestination();
  let doomArray = [1, 4, 6, 8, 9, 12, 14, 16, 17, 20, 22, 24, 27, 28, 29, 30];
  let dash = new Tone.Player(
    "day4Notes/background/dash_quiet.MP3"
  ).toDestination();
  let dashArray = [3, 7, 11, 15, 19, 23, 28];
  let ding = new Tone.Player(
    "day4Notes/background/ding_quiet.MP3"
  ).toDestination();
  let dingArray = [25];
  for (i = 0; i < counter; i++) {
    if (counter == dumArray[i]) {
      dum.autostart = true;
    }
    if (counter == dingArray[i]) {
      ding.autostart = true;
    }
    if (counter == doomArray[i]) {
      doom.autostart = true;
    }
    if (counter == dashArray[i]) {
      dash.autostart = true;
    }
  }
}
function background(counter) {
  let audio1 = new Tone.Player("day4Notes/intro/1.MP3").toDestination();
  let audio1Array = [1];
  let audio2 = new Tone.Player("day4Notes/intro/2.MP3").toDestination();
  let audio2Array = [9];
  let audio3 = new Tone.Player("day4Notes/intro/3.MP3").toDestination();
  let audio3Array = [17, 23];
  let audio4 = new Tone.Player("day4Notes/intro/4.MP3").toDestination();
  let audio4Array = [24, 29];
  let audio5 = new Tone.Player("day4Notes/intro/5.MP3").toDestination();
  let audio5Array = [25];
  for (i = 0; i < counter; i++) {
    if (counter == audio1Array[i]) {
      audio1.autostart = true;
    }
    if (counter == audio2Array[i]) {
      audio2.autostart = true;
    }
    if (counter == audio2Array[i]) {
      audio2.autostart = true;
    }
    if (counter == audio3Array[i]) {
      audio3.autostart = true;
    }
    if (counter == audio4Array[i]) {
      audio4.autostart = true;
    }
    if (counter == audio5Array[i]) {
      audio5.autostart = true;
    }
  }
}
function hook(counter) {
  let audio1 = new Tone.Player("day4Notes/hook/1.12.m4a").toDestination();
  let audio1Array = [1, 9, 17];
  let audio2 = new Tone.Player("day4Notes/hook/2.12.m4a").toDestination();
  let audio2Array = [2, 10, 18];
  let audio3 = new Tone.Player("day4Notes/hook/3.12.m4a").toDestination();
  let audio3Array = [3, 7, 11, 15, 19, 23];
  let audio4 = new Tone.Player("day4Notes/hook/4.12.m4a").toDestination();
  let audio4Array = [4, 12, 20];
  let audio5 = new Tone.Player("day4Notes/hook/5.12.m4a").toDestination();
  let audio5Array = [5, 13, 21];
  let wofm = new Tone.Player("day4Notes/hook/WOFM.m4a").toDestination();
  let wofmArray = [24];
  for (i = 0; i < counter; i++) {
    if (counter == audio1Array[i]) {
      audio1.autostart = true;
    }
    if (counter == audio2Array[i]) {
      audio2.autostart = true;
    }
    if (counter == audio2Array[i]) {
      audio2.autostart = true;
    }
    if (counter == audio3Array[i]) {
      audio3.autostart = true;
    }
    if (counter == audio4Array[i]) {
      audio4.autostart = true;
    }
    if (counter == audio5Array[i]) {
      audio5.autostart = true;
    }
    if (counter == wofmArray[i]) {
      wofm.autostart = true;
    }
  }
}
