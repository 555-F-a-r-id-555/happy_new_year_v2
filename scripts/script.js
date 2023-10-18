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

    // Вызов функции обратного отсчета до Нового Года и вывод результата
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = countdownToNewYear();
}

function countdownToNewYear() {
    const currentDate = new Date();
    const newYear = new Date(currentDate.getFullYear() + 1, 0, 1); // Новый Год следующего года
    const timeLeft = newYear - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд до Нового Года`;
}


setInterval(updateDateTime, 1000);

updateDateTime();

