//Объекты

var ourDog = {
    "name": "Funya",
    "legs": 4,
    "tails": 1,
    "friends": ["everyone"]
};

var newDog = {
    "name": "Funya2",
    "legs": 3,
    "tails": 2,
    "spaced attribute":2,
    "friends": []
};

var myDog = newDog.name;

var my2Dog = newDog["spaced attribute"];

console.log(myDog);
console.log(my2Dog);

var testObj = {
    12: 'ghjghj',
    16:'dfhds',
    19:'eyeterter'
};

var PlayerNumber = 16;

var player = testObj[PlayerNumber];
console.log(player);

ourDog.name = 'Baksic'; // Установка новых параметров объекта

ourDog.bark = "woof!"; //Добавление нового параметра объекту

delete ourDog.bark; // Удаление параметра объекта

//Замена switch на объект

function lookup(val){

    var result = "";

    var lookUpTable ={
        "alpha": "1",
        "beta" : "2",
        "theta": "3"
    }

    result = lookUpTable[val];

    return result;
}

console.log(lookup("alpha"));

//Проверка объекта на наличие свойства

function checkObj(prop){

    if(newDog.hasOwnProperty(prop)){

       return newDog[prop]; 
    } else {

        return "Not found";
    }

}

console.log(checkObj("tails"));

var myMusic = [

    {
        "artist": "ffdp",
        "title": "Burn MF",
        "release_year": 2005,
        "formats":[
            "CD",
            "YouTube",
            "Single"
        ],
        "gold": true
    },
    {
        "artist": "disturbed",
        "title": "Immortalised",
        "release_year": 2015,
        "formats":[
            
            "YouTube"
            
        ],
        "gold": true
    }

];


//Как вызвать внутренние свойства объекта
var myStorage = {

    "car":{

        "inside": {

            "glove box": "maps",
            "passenger seat": "crumbs"

        },
        "outside": {

            "trunk": "jackstand",
            "under the car": ["cat","dog","snacks"]

        }

    }

};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

var myPlants = [

    {
        type: "flowers",
        list: [

            "rose",
            "tulip",
            "somth"

              ]    
    },
    {

        type: "trees",
        list: [

            "fir",
            "pine",
            "birch"

        ]

    }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);

//Коллекция записей

//нихрена не успел записать. вкратце - всё обращение такое же, как и с отдельными элементами

