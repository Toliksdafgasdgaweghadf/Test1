function WordBlanks (myNoun, myAdjective, myVerb, myAdverb){

    var result = "";

    result += "The " + myAdjective +" "+ myNoun +" "+ myVerb + " to the store " + myAdverb;

    return result;

};

console.log(WordBlanks("dog","big", "ran", "quickly"));
console.log(WordBlanks("bike","slow", "flew", "slowly"));

var ourArray  = ["John", 23];
var myArray = ["Quincy",1];
var newArray = [["univ",42],[ "ewr" ,101010]];

console.log(newArray[0][0]);

newArray.push(["hippi","jam"]);

console.log(newArray[2][0]);

var new2Array = newArray.pop(); //Удаляет последний элемент массива или переносит его в другой массив
console.log(newArray.length);
console.log(new2Array[0]);

newArray.push(["hippi","jam"]);
var new3Array = newArray.shift(); //Удаляет первый элемент массива или переносит его в другой массив
console.log(newArray.length);
console.log(new3Array[0]);
console.log("\n");

newArray.unshift(["ЧгnIv",42]);  //Добавляет первый элемент в массив
console.log(newArray.length);
console.log(newArray[0][0]);
console.log("\n");

var myList = [["Cereal",3],["Milk",2],["Bananas",3],["Juice",2],["Eggs",12]];

function ourReusableFunction() {
    console.log("hfghdh!");
};

ourReusableFunction(); 

function FunctionWithArgs(a,b) {
    console.log(a+b);
    oopsGolbal = 3; //Такое определение автоматически сделает переменную глобальной
};

function FunctionWithArgs2(a,b) {
    console.log(a-b);
};

FunctionWithArgs(2,4);

var sum =0;

function addTree(){

    sum+=3;

};

function addFive(){

    sum+=5;

};

function nextInLine (arr, item) {

    arr.push(item);

    item = arr.shift();

    return item;

};

var testArr =[1,2,3,4,5];

console.log("Before "+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After "+JSON.stringify(testArr));

function ourTrueOrFalse(isItTrue) {

    if (isItTrue) {

        return "It is true";

    }

    return "It is false";

};

//Оператор сравнения через boolean
function testEqual(val) {

    if (val == 12) {

        return "Equal";

    }

    return "Not equal";

};

function testEqual(val) {

    if (val == 12) {

        return "Equal";

    } else return "Not equal";

};

//Строгое равно
// 3 == "3"   -правда 
// 3 != "3"   -ложь

// 3 === 3    -правда
// 3 ==='3'   -ложь
// 3 !== "3"  -правда

//Оператор case
function swatchStatement(val){

    switch(val){

     case 1:       //Используется строгое равно
            answer = "alpha";
     break;

        case 2:
          answer = "beta";
     brake;    

        case 3:
            answer = "gamma";
     brake; 

        case 4:
            answer = "delta";
        brake; 

        case 5:
        case 6:
        case 7:
            answer = "air";
        break;        

        case "bob":
            answer = "Marley";
        break;

        case 42:
            answer = "The Answer";
        break;

        
        default: answer = "stuff";
        break;
    return answer;
    };

};

 //Возврат boolean

 function isLess(a,b){

    return a<b; //Вернёт true или false

}

function abTest(a,b) {

    if(a<0 || b <0) {

        return undefined;

    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));

}


