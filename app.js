// // Сворити масив нецензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// // - Сворити масив нецензцрних слів.

// let inp = document.getElementById('inp');

// const swearArr = [
//     'fuck',
//     'blya',
//     'faggot',
//     'suka'
// ];

// function swearCheck() {
//     for (const elem of swearArr) {
//         //console.log(inp.value);
//         if (inp.value === elem) alert('stop swearing')
//     }
    
// }


// Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let inp = document.getElementById('inp');

// const swearArr = [
//     'fuck',
//     'blya',
//     'faggot',
//     'suka'
// ]; 

// function swearCheck() {
//     let inpArr = inp.value.split(' ');
//     for (const elem of inpArr) {
//         for (const swear of swearArr) {
//             if (elem === swear) {
//                 alert('stop swearing!!!')
//                 return;
//             }
//         }
//     }
// }

// Взяти масив юзерів

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

let flsChk = document.getElementById('flsChk');
let oldChk = document.getElementById('oldChk');
let kyivChk = document.getElementById('kyivChk');



let newArr = JSON.parse(JSON.stringify(usersWithAddress))
console.log(newArr);
function chk(){
    if (flsChk.checked) {
        newArr = newArr.filter(user => user.isMarried === false)
    }

    if (oldChk.checked) {
        newArr = newArr.filter(user => user.age >= 29)
    }

    if (kyivChk.checked) {
        newArr = newArr.filter(user => user.address.city === 'Kyiv')
    }

    newArr.forEach(user => {
        document.write(`user id = ${user.id} <br>
        name = ${user.name} <br>
        age = ${user.age} <br>
        isMarried = ${user.isMarried} <br>
        user address:  <br>
        city = ${user.address.city} <br>
        street = ${user.address.street} <br>
        number = ${user.address.number} <br>
        <br> <br>`)
    });
}