function updateDateTime() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const dateTimeString = `${hours}:${minutes}:${seconds} - ${day}.${month}.${year}`;

    const currentDateTimeElement = document.getElementById("currentDate");

    currentDateTimeElement.textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);

updateDateTime();

