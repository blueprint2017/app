if(window.hasOwnProperty('webkitSpeechRecognition')) {
    console.log("Attempting speech input");
    
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.lang = "en-US";
    recognition.start();
    
    recognition.onresult = function(event) {
        console.log(event);
        recognition.stop();
    }
    
    recognition.onerror = function(e) {
        console.log("An error has occurred");
        recognition.stop();
    }
}