function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var meridiem = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    
    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    
    document.getElementById("time").innerHTML = timeString;
  }
  
function populateDropdowns(){
    var hourSelect = document.getElementById("hourSelect");
    var minuteSelect = document.getElementById("minuteSelect");
    var secondSelect = document.getElementById("secondSelect");
    var meridiemSelect = document.getElementById("meridiemSelect");

    for (var i = 1; i < 13; i++) {
        var option = document.createElement("option");
        option.text = i.toString().padStart(2, 0);
        hourSelect.add(option);
    }

    for (var i = 0; i < 60; i++) {
        var option = document.createElement("option");
        option.text = i.toString().padStart(2, 0);
        minuteSelect.add(option);
        secondSelect.add(option.cloneNode(true));
    }

    var optionAM = document.createElement("option");
    optionAM.text = "am";
    meridiemSelect.add(optionAM);

    var optionPM = document.createElement("option");
    optionPM.text = "pm";
    meridiemSelect.add(optionPM);
  
}
function setAlarm () {
    var hour = document.getElementById("hourSelect").value;
    var minute = document.getElementById("minuteSelect").value;
    var second = document.getElementById("secondSelect").value;
    var meridiem = document.getElementById("meridiemSelect").value;

    var alarmTime = hour + ":" + minute + ":" + second + " " + meridiem;

    console.log("Alarm set for: " + alarmTime);
}
 
  setInterval(updateTime, 1000);

  updateTime();
  window.onload = populateDropdowns;