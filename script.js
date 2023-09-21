const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextBtn = document.querySelectorAll(".icons span");

// geting new Date, current year and month

let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


const renderCalender = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(),//getting fisrt date of the month
        lastdateoftheMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),//gettig last date of the month
        lastDayoftheMonth = new Date(currentYear, currentMonth, lastdateoftheMonth).getDay(),//getting last day of the month
        lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate()//getting last date of last previous month
    let liTag = "";
    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastdateoftheMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayoftheMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayoftheMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
}
renderCalender()

prevNextBtn.forEach(icon => {
    icon.addEventListener("click", () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth, new Date().getDate());
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalender();
    });
});