//Оператор Spread

const arr1 = ['JAN','FEB','MAR','APR','MAY'];

let arr2;

(function(){

    arr2 = arr1; // Так arr1 и arr2 будут меняться одновременно

    arr2 = [...arr1]; // А так - нет!

    arr1[0]='potato';

})();

console.log(arr2);

// Использование деструктуризирующих присвоений (???) для присвоения значения переменным из объектов

var voxel = {x:3.6, y:7.4,z:6.54};

var x = voxel.x; //Это обычное присвоение
var y = voxel.y;
var z = voxel.z;

const {x:a,y:b,z:c} = voxel; //Деструктуризирующее присвоение

const AVG_TEMPERATURES = {

    today: 77.5,
    tomorrow: 79
    
}

function getTempOfTmrw(avgTemperatures){

    "use strict";

    const {tomorrow :tempOfTomorrow} = avgTemperatures; //Достаёт поле tomorrow из объекта AVG_TEMPERATURES и присваивает его переменной

    return tempOfTomorrow;

}

console.log(getTempOfTmrw(AVG_TEMPERATURES));


//То же с составными объектами
const LOCAL_FORECAST ={

    today: {min: 72, max:83},
    tomorrow : {min:73.3, max: 84.6}

};

function getMaxOfTmrw(forecast){

    const {tomorrow:{max:maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//То же с массивами

const[z,x, , y] = [1,2,3,4,5,6];
console.log(z,x);

let a=8, b=6;
(() => {

    "use strict";



})();

