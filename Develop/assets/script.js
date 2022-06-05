var displayDate = document.querySelector("#currentDay");

var currentTime = moment();
console.log(currentTime);

displayDate.textContent = currentTime.format("dddd, MMMM Do");
