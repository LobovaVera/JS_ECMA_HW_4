// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

//pinkanizer
async function changeStyleDelayed(identifyer, delayTime) {
    let docId = identifyer.toString();

    setTimeout(() => document.getElementById(docId).style.color = "pink", delayTime);

}
changeStyleDelayed('myElement', 2000);