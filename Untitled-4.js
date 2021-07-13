//Циклы

var myArray=[];

var i=0;

while (i<5){

    myArray.push(i);
    i++;
}

//console.log(myArray);

//Цикл for

var ourArray =[];

for (var i =0; i<5; i++){

    ourArray.push(i);

};

//console.log(ourArray);

var ourArr = [9,10,11,12];
var ourTotal =0;

for (var i =0; i< ourArr.length; i++){

    ourTotal += ourArr[i];

}

//console.log(ourTotal);

//Цикл do-while

myArray = [];

i = 10;

do {
    
    myArray.push(i);

    i++;

} while (i<5)

//console.log(i , myArray);

//Поиск по профилю

var contacts = [

    {

        "firstName":"Akira1",
        "lastName":"Laine",
        "number": "43534",
        "likes": ["one","two","three"]

    },
    {

        "firstName":"Akira2",
        "lastName":"Laine2",
        "number": "43534",
        "likes": ["one2","two2","three2"]

    },
    {

        "firstName":"Akira3",
        "lastName":"Laine3",
        "number": "43534",
        "likes": ["one3","two3","three3"]

    },
    {

        "firstName":"Ttt",
        "lastName":"Laine4",
        "number": "43534",
        "likes": ["one4","two4","three4"]

    }

]

function lookUpProfile(name,prop){

    for(var i=0; i< contacts.length; i++){

        if(contacts[i].firstName === name){

            return contacts[i][prop] || "No such property";  // Условный оператор || (или) использован для того, чтобы выдать сообщение если свойство не существует

        }

        return "No such contact";
    }

}

var data = lookUpProfile("Akira2","lastName");

//console.log(data);

//Случайные числа

function randomFraction(){

    return Math.random();

}

//console.log(randomFraction());

//Случайные целые числа

var randomNumber0to19 = Math.floor(Math.random()*20);

function randomWholeNum(){

    return Math.floor(Math.random()*10);

}

console.log(randomWholeNum());

//Случайные числа в диапазоне

function ourRandomRange(ourMin,ourMax){

    return Math.floor(Math.random()*(ourMax-ourMin+1))+ourMin;

}

console.log(ourRandomRange(5,9));

//Функция parseString

function convertToInteger(str){

    return  parseInt(str);

}

console.log(convertToInteger(56));

function convertToIntegerBin(str){

    return  parseInt(str, 2);

}

console.log(convertToIntegerBin(10011));

//Использование тернарных операторов

function checkEqual(a,b){

    return a === b ? true:false; //Вернуть true если a === b, если нет - вернуть false/

}

console.log(checkEqual(2,3));

// Использование нескольких тернарных операторов

function checkSign(num) {

    return num > 0 ? "positive": num < 0 ? "negative": "zero";

}

console.log(checkSign(0));

// Различия между объявлениями var и let

let catName = 'gdfgdf';
let quote;

catName ="Beau"; // let не позволяет определять переменные дважды

function catTalk(){

    "use strict"; // Включает жёсткий режим, который ловит ошибки

    catName = "Oliver";

    quote = catName +" says Meow!";

}

console.log(catTalk());

// var определяет переменную либо глобально, либо локально в функции.
// let ограничен блоком или выражением, в котором он используется.

function checkScope(){

    "use strict";

    let i = "function scope"; //Это i ...

    if (true) {

        let i = "block scope" // ...и это i - разные переменные

        console.log("Block scope i is: ",i);

    }

    console.log("Function scope is: ", i);

    return i;

}

checkScope();

function checkScope2(){

    "use strict";

    //var i = "function scope";

    if (true) {

        var i = "block scope" // Теперь переменная только одна

        console.log("Block scope i is: ",i);

    }

    console.log("Function scope is: ", i);

    return i;

}

checkScope2();

function checkScope3(){

    "use strict";

    //var i = "function scope";

    if (true) {

        let i = "block scope" // Теперь эта переменная только здесь...

        console.log("Block scope i is: ",i);

    }

    console.log("Function scope is: ", i); // ... а тут не она. Если i не определена через var до этого момента, то будет ошибка!

    return i;

}

checkScope3();

// const имеет те же эффекты, что и let, но не может быть изменена.

function printManyTimes(str){

    "use strict";

    var sentence = str + " is cool!";

    sentence = str + "is amazing!";  // Сейчас значение sentence изменяется.

    for(var i =0; i < str.length; i+=2){

        console.log(sentence);

    }

}

printManyTimes("fgdfg");

function printManyTimes2(str){

    "use strict";

    const SENTENCE = str + " is cool!";

    //SENTENCE = str + "is amazing!";  // Теперь SENTENCE изменять нельзя.

    for(let i =0; i < str.length; i+=2){ //Лучше использовать let а не var.

        console.log(SENTENCE);

    }

}

printManyTimes2("fgdfg");

