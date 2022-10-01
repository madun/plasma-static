function showTime() {
  var options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var date = new Date();
  var d = date.toLocaleDateString("id-ID", { weekday: "long" });
  var currentDate = date.toLocaleDateString("id-ID", options);
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //   var time = h + ":" + m + ":" + s + " " + session;
  var time = h + ":" + m;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  document.getElementById("current-day").textContent = d;
  document.getElementById("current-date").textContent = currentDate;

  setTimeout(showTime, 1000);
}

showTime();
