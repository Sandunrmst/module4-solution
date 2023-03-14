(function(window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  var speakWord = "Hello";
  window.helloSpeaker = helloSpeaker;
}(window));