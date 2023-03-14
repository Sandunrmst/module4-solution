

(function(window) {
  var byeSpeaker = {};
    byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }
    var speakWord = "Good Bye";
    window.byeSpeaker = byeSpeaker;
    }(window));
