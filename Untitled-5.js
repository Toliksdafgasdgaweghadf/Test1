// Мутация массива

const s = [5,7,2];

function editInPlace(){

    "use strict";

    //s = [2,5,7]; //- так сделать нельзя, потому что s - константа.

    s[0] = 2; s[1] = 5; s[2] = 7; // - а так сделать можно.
}

editInPlace();

//console.log(s);

// Как предотвратить мутацию

function freezeObj(){

    "use strict";

    const MATH_CONSTANTS = {PI:3.14};

    try {

        MATH_CONSTANTS.PI = 99;

    }

    catch (ex) { console.log(ex); }

    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

//console.log(PI); // Тут константа изменилась на 99

//function freezeObj2(){

  //  "use strict";

 //   const MATH_CONSTANTS = {PI:3.14};

  //  Object.freeze(MATH_CONSTANTS); // Тут она заморозилась и теепрь не изменится.

  //  try {

        //MATH_CONSTANTS.PI = 99; // Теперь эта строка выдаёт ошибку!

 //   }

  //  catch (ex) { console.log(ex); }

  //  return MATH_CONSTANTS.PI;
//}

//const PI = freezeObj2();

//console.log(PI); // Тут константа изменилась на 99

//Анонимные функции и стрелочные (???)  функции

var magic = function(){ //Анонимная функция

    return new Date();

}

var magic2 = () => { //Стрелочная функция 

    return new Date();

}

const magic3 = () => new Date(); //Самая короткая запись

//Стрелочные функции с параметрами

var arr1=[1,2];

var arr2 = [3,4,5];

const myConcat = (arr1, arr2) => arr1.concat(arr2); 

//Стрелочная функция высокого порядка

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {

    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num >0 ).map(x => x*x);

    return squaredIntegers;

}

const squaredIntegers = squareList(realNumberArray);

//console.log(squaredIntegers);

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

//console.log(increment(5,2));
//console.log(increment(5));

//Использование оператора rest с параметрами функции 
//для создания функции, принимающей переменное количество аргументов

const sum = (function(){  //Без оператора Rest

    return function sum(x,y,z) {

        const args = [x,y,z];

        return args.reduce((a,b) => a + b,0);

    };

})();

console.log(sum(1,2,3));

const sum2 = (function(){  //С оператором Rest

    return function sum2(...args) { // ...args - это и есть оператор Rest

        //const args = [x,y,z]; - это мы убрали

        return args.reduce((a,b) => a + b,0);

    };

})();

console.log(sum2(1,2,3));




