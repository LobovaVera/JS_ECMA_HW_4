"use strict";

// TASK 1 
//""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// async function getUserData(ID) {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if(response.ok) {
//             let usersJson = await response.json();
//             if(usersJson[ID - 1] == undefined){
//                 return "user not found";
//             }else {
//                 return usersJson[ID - 1];
//             }
//         } else {
//             console.log(("error" + Response.status));
//         }
// }
// console.log(getUserData(8));
// console.log(getUserData(111));
