let wishCounter = 1; // Счетчик для нумерации сообщений

// Функция для обновления текущего времени, даты, обратного отсчета до Нового Года и обработки пожеланий пользователя
function updateDateTime() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const dateTimeString = `${hours}:${minutes}:${seconds} - ${day}.${month}.${year}`;

    // Получение элемента для вывода даты и времени
    const currentDateTimeElement = document.getElementById("currentDate");

    // Установка текста элемента равным текущей дате и времени
    currentDateTimeElement.textContent = dateTimeString;

    // Вызов функции обратного отсчета до Нового Года и вывод результата
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = countdownToNewYear();
}

// Функция для обработки нажатия клавиши Enter в поле ввода
function handleKeyPress(event) {
    if (event.key === "Enter") {
        const newYearWishesInput = document.getElementById("newYearWishes");
        const wishesText = newYearWishesInput.value;
        if (wishesText.trim() !== "") {
            // Создаем элемент <p> для отображения пожелания с номером и текстом
            const wishElement = document.createElement("p");
            wishElement.textContent = `${wishCounter}. ${wishesText}`;

            // Получение элемента для вывода пожеланий
            const wishesElement = document.getElementById("wishes");

            // Добавляем новое пожелание в блок
            wishesElement.appendChild(wishElement);

            // Увеличиваем счетчик для следующего пожелания
            wishCounter++;

            // Очищаем поле ввода пожеланий
            newYearWishesInput.value = "";
        }
    }
}

// Функция для расчета обратного отсчета до Нового Года
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

const newYearWishesInput = document.getElementById("newYearWishes");

newYearWishesInput.addEventListener("keyup", handleKeyPress);

setInterval(updateDateTime, 1000);

updateDateTime();
