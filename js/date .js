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

function cleanAllSelected(query){
    let monthDays = document.querySelectorAll(query);
    for (const day of monthDays) {
        day.classList.remove("calendar-selected");
    }
}

let container = document.getElementById("calendar");
let row = document.createElement("div");
let dayCounter = 1;
for (const month of getDaysInMonth(10, 2022)) {
    let monthDayContainer = document.createElement("div");
    monthDayContainer.classList.add("monthDayContainer");
    row.classList.add("calendar-row");
    row.appendChild(monthDayContainer);
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

    let textContainer = document.createElement("div");
    textContainer.classList.add("day-text-container");
    textContainer.appendChild(monthDayName);
    textContainer.appendChild(monthDayNumber);

    monthDayContainer.appendChild(textContainer);
    monthDayContainer.addEventListener("click", () => {
        if(!monthDayContainer.classList.contains("sundayContainer")){
            cleanAllSelected(".monthDayContainer");
            monthDayContainer.classList.add("calendar-selected");
        }
    })
    
    if(dayCounter == 7 || month.getDate() == new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()){
        dayCounter = 1;
        container.appendChild(row);
        row = document.createElement("div");
    }else{
        dayCounter++;
    }
}

/* TIME SCHEDULES EVENT */
let schedules = document.querySelectorAll(".schedules div");
for (const schedule of schedules) {
    schedule.addEventListener("click", () =>{
        cleanAllSelected(".schedules div");
        schedule.classList.toggle("calendar-selected");
    })
}

function rangeSlide(value) {
    document.getElementById('guest-counter').innerHTML = value;
}