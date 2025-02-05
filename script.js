"use strict";
/*let sum = (a,b) => {
    let result = a + b;
    return result;
}
console.log(sum(2,5));
*/

let userName = prompt("Введите имя", "Алиса");
let isTeaWanted = confirm("Вы хотите чаю?");

alert( "Посетитель: " + userName ); // Алиса
alert( "Чай: " + isTeaWanted ); // true
/*alert("После этого сообщения ждите ошибку");

[1,2,"Pedic"].forEach(alert);

/*let ask = (question, yes, no) => {
    confirm(question) ? yes() : no()
} 
    ask ("Тебе есть 18?",
        () => alert("o YES"),
        () => alert("lox")
    );
let sum = (a, b) => a + b;
console.log(sum(2,5))


let age = prompt("Сколько Вам лет?", 18),
    welcome = (age<18) ?
    function() { alert('Hi');    } :
    function() { alert("Hello"); };

//let welcome = (age < 18) ?
//  () => alert('Привет!') :
//  () => alert("Здравствуйте!");

welcome(); // Error: welcome is not defined
// ...не работает*/
