// "use strict";

// function delayedMessage(message, delay){
//     setTimeout(() => console.log(`${message}, ${delay}`), delay);
// }
// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);
// console.log("End");
// function delayedTask(tasks){

//     // for (let i = 0; i < tasks.length; i++) {
//     //     setTimeout(() => console.log(`${tasks[i].name} `), tasks[i].time);

//     // }
//     tasks.forEach(task => {
//         setTimeout(() => console.log(task.name), task.time);
//     });

// }


// const tasks = [
//     {name:'task1', time: 1000},
//     {name:'task2', time: 2000},
//     {name:'task3', time: 1500},
//     {name:'task4', time: 4000},
//     {name:'task5', time: 5000}
// ]
// delayedTask(tasks);



// function loadData(url) {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = function () {
//         if (request.status !== 200) {
//             console.log(`Error ${request.status}: ${request.statusText}`);
//         } else {
//             console.log(`user: ${request.responseText}`);
//         }
//     };
//     request.open('GET', url, true);
//     request.send();
// }
// loadData('https://jsonplaceholder.typicode.com/users');
// async function loadData(url) {
//     let request = await fetch(url);
//     if (request.ok) {
//         console.log(request.json());
//     } else {
//         console.log(("error" + Response.status));
//     }
// }
// loadData('https://jsonplaceholder.typicode.com/users');


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//list
//sorted list
// const nameList = [];
// fetch('https://jsonplaceholder.typicode.com/users')
//     // .then((response) => response.json())
//     // .then((data) => data.forEach(element => {document.write(`${element.name} \n`)}))
//     .then(function(data){
//         return data.text()
//     })
//     .then(function())

//     data.forEach(userName => {nameList.push(userName)})

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((elem) => listUser(elem));
// const listOfUsers = document.querySelector('.list')
// function listUser(elem){
//     const userArr = [];
//     for (let i = 0; i < elem.length; i++) {
//         userArr.push(elem[i].name);
//         listOfUsers.innerHTML += elem[i].name + '<br>';
//     };
//     userArr = userArr.sort();
//     listOfUsers.innerHTML += '<br';
//     for (let j = 0; j < userArr.length; j++) {
//         listOfUsers.innerHTML += userArr[i] + '<br>';
        
//     }

// };
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((elem) => listUser(elem));
// document.getElementById("list").innerHTML = "hello((";
// let listOfUsers = document.getElementById("list");
// console.log(document.querySelector('list'));
// function listUser(elem){
// let userArr = [];
// for (let i = 0; i < elem.length; i++) {
//     console.log(elem[i].name);
//     userArr.push(elem[i].name);
    
//     listOfUsers.innerHTML += elem[i].name + '<br>';
// };
// userArr = userArr.sort();
// listOfUsers.innerHTML += '<br>';
// listOfUsers.innerHTML += '<p>sorted list</p>';
// for (let j = 0; j < userArr.length; j++) {
//     listOfUsers.innerHTML += userArr[j] + '<br>';
    
// }

// };