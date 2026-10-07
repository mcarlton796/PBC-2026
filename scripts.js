function updateTime(){
    let date = new Date();
    let timeElement = document.getElementById('subhead-dt');
    // let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    let time = date.toLocaleTimeString();
    let day = date.toLocaleDateString(undefined);
    day = day.replaceAll("/", ".");
    timeElement.innerHTML = `<p id="day"> ${day}</p><p id="time"> ${time}</p>`;
}

setInterval(updateTime, 1000);
updateTime();