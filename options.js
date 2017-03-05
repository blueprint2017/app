function summarize() {
    console.log("summarized");
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

  var timerID = setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) { // timer = timer - 1
          clearInterval(timerID);
          summarize();
      }
  }, 1000);
}

// make submit button do something when clicked
document.getElementById("start-task").addEventListener("click", function(){
  //Set current task name to inputted task name
  var taskName = document.getElementById("task-name").value;
  document.getElementById("current-task").innerHTML = taskName;

  // store entered work and break durations into values
  var workLength = document.getElementById("work-length").value;
  var breakLength = document.getElementById("break-length").value;

  // display values in timer, display timer
  document.getElementById("next-length").innerHTML=breakLength + ":00";
  document.getElementById("timer").style.display="block";

  var parsedLength = 60 * workLength;
  var display = document.querySelector("#remaining");

  startTimer(parsedLength, display);

  $.post("http://localhost:5000/test", {"test": "Helloasdfasdf"}, function(data) {
      console.log("got reply");
      console.log(data);
  })
});
