var daysList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function getDaysInMonth(month, year) {
    var date = new Date(Date.UTC(year, month, 1));
    var days = [];
    while (date.getUTCMonth() === month) {
      days.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }
    return days;
}

function cleanAllSelected(){
    let monthDays = document.querySelectorAll(".monthDayContainer");
    for (const day of monthDays) {
        day.classList.remove("calendar-selected");
    }
}

let container = document.getElementById("calendar");

for (const month of getDaysInMonth(10, 2022)) {
    let monthDayContainer = document.createElement("div");
    monthDayContainer.classList.add("monthDayContainer");
    console.log();
    if(daysList[month.getDay()] == "Sunday"){
        monthDayContainer.classList.add("sundayContainer");
    }
    let monthDayName = document.createElement("p");
    monthDayName.classList.add("day-name")
    monthDayName.innerHTML = daysList[month.getDay()].slice(0, 3).toUpperCase();
    let monthDayNumber = document.createElement("p");
    if(month.getDate().toString().length == 1){
        monthDayNumber.innerHTML = "0" + month.getDate();
    }else{
        monthDayNumber.innerHTML = month.getDate();
    }
    monthDayContainer.appendChild(monthDayName);
    monthDayContainer.appendChild(monthDayNumber);
    monthDayContainer.addEventListener("click", () => {
        if(!monthDayContainer.classList.contains("sundayContainer")){
            cleanAllSelected();
            monthDayContainer.classList.add("calendar-selected");
        }
    })
    container.appendChild(monthDayContainer);
}

