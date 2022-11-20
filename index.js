
// const check = require('./utils.js');
// console.log(check());
/*
//===================================================Process in NodeJS==================================
const process = require('process');
for (let i = 2; i < process.argv.length; i++) {
    const command = process.argv[i];
    let [name, value] = command.split('=');
    console.log(name+': ',value);
}
*/
/*
//=========================================Working with JSON data================================
const book = {
    title:'Think and grow rich',
    author: 'Ben Carson',
}
const bookJSON = JSON.stringify(book); //JSON.stringify converts a JavaScript object into a JSON string
const bookObj = JSON.parse(bookJSON); //JSON.parse converts a JSON string into a JavaScript object
console.log(book, bookJSON, bookObj);
*/
/*
//=======================================Arrow functions in JS==========================================
let num = process.argv[2];
const square = (x) => {
    return x**x
}
const square2 = (x) => x * x
console.log(square2(num));
console.log(square(num));
*/
/*
//====================================This binding in JS==============================================
Arrow functions don't have the this binding element in them
const book = {
    title: 'Think and grow rich',
    author: 'Ben Carson',
}
console.log(book);
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
console.log(event.printGuestList());
*/
/*
//================================================Array find method in JS=====================================
const users = [
    {
        name: 'Andrew Mead',
        age: 27
    },
    {
        name: 'George Hudson',
        age: 72
    },
    {
        name: 'Clay Klay',
        age: 45
    }
];
const george = users.findIndex(user => user.name === "George Hudson");
console.log(users[george]);
*/
/*
//========================================Asynchronous programming in JS======================================
const process = require('process');
const command = process.argv[2];
console.log("Starting");
setTimeout(() => { //setTimeout is asynchronous and non-blocking. 
    //The setTimeout call doesn’t block Node.js from running other code while it’s waiting for the 2 seconds to pass.
    console.log("1 second delay");
}, 1000);
(() => {
    console.log(command);
    console.log("waiting for user input");
})();
*/
/*
//=======================================Callback function in JS========================================== 
const geocode = function (address, callback) {
    console.time('firstTimer');
    console.time('secondTimer');
    setTimeout(() => {
        const data = {
            longitude: 0,
            latitude: 0
        };
        callback(data)
        console.timeEnd('firstTimer')
    }, 2000)
    setTimeout(() => {
        const data = {
            longitude: 0,
            latitude: 0
        };
        callback(data)
        console.timeEnd('secondTimer')
    }, 2000)
    console.log('-------------------Wait 2 seconds--------------');
}
geocode('address', (data) => {
    console.log(data);
})
*/
/* ==========================================Callback abstraction in JS================================================== 
//Callback functions can be used to abstract complex asynchronous code into a simple reusable function
const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        }else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}
geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
*/

/* 
//==============================================Callback chaining======================================================== 
// this involves running one asynchronous operation only after another asynchronous operation is complete. That’ll allow you to use the output from first function as
//as the input for second function
geocode(address, (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})
*/
/*
//==============================================Object Destructuring===========================================
const user = {
    name: 'John Doe',
    age: 32,
    location: 'Nakuru'
} 
const { age, location } = user;
console.log(location);
*/
/*
//=====================================Destructuring functional arguments==================================

const product = {
    label: 'Lemons',
    price: 43,
    stock: 300,
    salePrice: 45,
    ratings: 4.2
}
const transaction = (order, { label, ratings }) => {
    console.log(order,label,ratings);
}
transaction('order', product);
*/
/*
//================================HTTP and HTTPS modules to make requests=============================
const https = require('https');
const url = '';
const request = https.request(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { 
        data = data + chunk.toString();
    })
    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})
request.on('error', (err) => {
    console.log(err);
});
request.on('connect', (ee) => {
    console.log('connected');
})
request.on('close', () => {
    console.log('connection lost');
})
*/
/* 
//=====================================================Express Webserver=======================================
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1> Hello world</h1>');
})
//-----Serving up Static Assets
const path = require('path');
// const dir = path.resolve(__dirname + '/w');
const dir = path.join(__dirname, 'public');
app.use(express.static(dir))
console.log(dir);
app.get('/weather', (req, res) => {
    res.json({
        weather:''
    })
})
app.get('/uefa', (req, res) => {
 // Provide an object to send as JSON
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})
app.listen(3000, (err, res) => {
    console.log(err);
    console.log(res);
    console.log('Server at 3000');
})
*/
/*
//=====================================================Arrays==============================================
var realArr = ['a', 'b', 'c', 'd', 'e'];
var arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    length: 4
};
//one key difference between Arrays and Array - like Objects is that Array - like objects inherit from
//Object.prototype instead of Array.prototype. This means that Array-like Objects can't access common Array
//prototype methods like forEach(), push(), map(), filter(), and slice():
realArr.forEach(item => {
    console.log(item);
})
//this one doesn't work because this si not an array but instead it's an  object
arrayLike.forEach(item => {
    console.log(item);
});
//to convert Array-like Objects to Arrays in ES6. This however works because we've converted it  array
arrayLike = Array.from(arrayLike);
console.log(arrayLike);
arrayLike.forEach(item => {
    console.log(item);
})
var newArray = [];
for (const item of arrayLike) {
    console.log(item);
}
let destructuredObject = { ...arrayLike };
console.log(Array.from(destructuredObject));
*/

/*//===========================================Reducing Values of Arrays===================================
var letArray = [2, 3, 69, 3, 7, 2, 5, 1, 9, 0, 3, 5, 2, 5];
var y = letArray.reduce((a, b) => {
    // console.log(a, b,c,d);
    return a+b
})
console.log(y);
var arrayObject = [
    {
        key: 'one',
        value: 1
    },
    {
        key: 'two',
        value: 2
    },
    {
        key: 'three',
        value: 3
    },
    {
        key: 'four',
        value: 4
    },
    {
        key: 'five',
        value: 5
    },
];
console.log(arrayObject.reduce(function (obj, current) {
    obj[current.key] = current.value
    return obj
}, { zero: 0 }));
console.log(arrayObject.reduce((obj, current) => ({ ...obj, [current.key]: current.value }), {}));

function map(list, fn) {
    return list.reduce(function (newList, item) { 
        return newList.concat(fn(item));
    }, []);
}
*/
// Usage:
// console.log(map([1, 2, 3], function (n) { return n * n; }));
// function extFunc(item) {
//     return item+'43'
// }
// let arraySquared = [4,8, 3, 7, 3].reduce(function (newIt, item,index) {
//     // return newIt.concat(extFunc(item))
//     newIt[index] = item;
//     return newIt;
// },{});
// console.log(arraySquared);

//unique number
// console.log([3, 5, 9, 3, 6, 8, 9, 0, 2, 6, 10, 5, 2].indexOf(9))
// console.log([3, 5, 9, 3, 6, 8, 9, 0, 2, 6, 10, 5, 2].reduce((newArr, item) => {
//     if (newArr.indexOf(item) === -1) {
//         // newArr[index]=item
//         newArr.push(item);
//     }
//     return newArr;
// }, []))
/*=============================================ARRAY.REDUCE PRACTICE QUESTIONS========================
//1. Turn an array of numbers into a totla of all the numbers
function total(arr) {
    //code here 
    return arr.reduce((accumulator, item) => {
        return accumulator + item;
    })
}
console.log(total([1, 2, 3, 9, 4, 9]));
//2. Turn an array of number into a long string of all the numbers
function stringConcat(arr) {
    return arr.reduce(function (accumulator, item) {
        return (accumulator+''+item).toString()
    })
}
console.log(stringConcat([1, 2, 3, 7, 9, 3, 4])); 
//3. Turn an Array of voter objets into a coun of how many people voted
function totalVotes(arr) {
    //code here
    return arr.reduce(function (acc, item) {
        if (item.voted === true) {
            // console.log(item.name+' :voted');
            acc += 1;
        }
        return acc;
    },0)
}
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters));
//4. Given an array of all your wishlist items,
//figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    //code here
    return arr.reduce(function (acc,item) {
        return acc + item.price;
    },0)
}
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));
//5. Given an array of arrays, flatten them into a single array
function flatten(arr) {
   // your code here    
    return arr.reduce(function (acc,item) {
        if (Array.isArray(item)) {
            acc.push(...item);
        } else {
            acc.push(item)
        }
        return acc;
    },[])
}
var arrays = [ ["1", "2", "3"], [true],[4, 5, 6], 89];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//6. Given an array of potential voters, return an object representing the results of the vote
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   // your code here
    return arr.reduce(function (acc,item) {
        if (item.age>=18 && item.age<=25) {
            if (item.voted) {
                acc['numYoungVotes'] += 1;
            }
            acc.numYoungPeople += 1;
        } else if(item.age>=26 && item.age<=35) {
            if (item.voted) {
                acc.numMidVotesPeople += 1;
            }
            acc.numMidsPeople += 1;
        } else if(item.age>=36 && item.age<=55) {
            if (item.voted) {
                acc.numOldVotesPeople += 1;
            }
            acc.numOldPeople += 1;
        }
        return acc;
    }, { numYoungVotes: 0, numYoungPeople: 0,numMidVotesPeople:0, numMidsPeople:0, numOldVotesPeople:0, numOldPeople:0 })
}

console.log(voterResults(voters)); // Returned value shown below:
// const express = require('C:/Users/Oliver/AppData/Roaming/npm/node_modules/express/index.js');
*/
/*========================================================ARRAY MAPPING IN JAVASCRIPT================================== 
Mappings in JS are used because It is often necessary to generate a new array based on the values of an existing array.
console.log(['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'].map((value, index, arr) => {
    console.log(this); //this object is always the browser.you can change it by passing the documentation: "randomObject"
    return value + 2
}, {
    documentation: 'randomObject'
}));
*/
/*==============================================Filtering Object Arrays in JS============================== 
/ The filter() function accepts a test function and returns a new array containing only elements of the
original array that have passed
that test
console.log([5,7,2,5,3,1,6,3].filter(function(value,index,array) {
    return value % 2 === 0;
}))
var people = [
    {
        id: 1,
        name: "John",
        age: 28
    },
    {
        id: 2,
        name: "Jane",
        age: 31
    },
    {
        id: 3,
        name: "Peter",
        age: 55
    },
    {
        id: 4,
        name: "Leon",
        age: 21
    }
];
var young = people.filter(n => (n.name.includes('J')))
var young1 = people.filter((obj) => {
    var flag = false;
    Object.values(obj).forEach((val) => {
        // console.log(val);
        if (String(val).indexOf("J") > -1) {
            flag = true;
            return;  
        } 
    });
    if(flag) return obj;
});
console.log(young);
*/
/*============================================SORTING ARRAYS IN JAVASCRIPT====================================== 
sort() function sorts elements in an array
The default method will sort the array according to string Unicode code points. 
To sort an array numerically the .sort() method needs to have a compareFunction passed to it.
The .sort() method is impure. .sort() will sort the array in-place, i.e., instead of creating a 
sorted copy of the original array, it will re-order the original array and return it.
// console.log( ['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort());
//['s','99', 't', 'a', 'c', 'K', 'o', '-1', 'v', 'E', 'r', 'f', 'l', 'W', '2', '1']
var numbers = [5, 1, 7, 4, 8, 2, 8, 3, 17, 15, 9, 12];
let newArr = []
numbers.forEach((val, index, arr) => {
    newArr.push(val.toString())
})
console.log(newArr);
var result = newArr.sort(function (first, second) {
    console.log(first,second);
    return first.localeCompare(second)
});
console.log(result);
console.log("Server running");
//String Sorting by length. Longest first
console.log(["zebras", "dogs", "elephants", "penguins"].sort(function (a, b) {
    // console.log(b.length - a.length);
    return b.length - a.length;
}));
//String Sorting by length. Shortest first
console.log(["zebras", "dogs", "elephants", "penguins"].sort(function (a, b) {
    // console.log(a.length - b.length);
    return a.length - b.length;
}));
//Numerical Sorting (Ascending)
console.log([5,7,3,1,2,6,8,20,1000,50,12,13,56,74,4].sort(function(a,b) {
    return a - b
}))
//Numerical Sorting (Descending)
console.log([5,7,3,1,2,6,8,20,1000,50,12,13,56,74,4].sort(function(a,b) {
    return b - a
}))
//Sorting an Array of Even and ODD numbers
let numbers1 = [10, 21, 4, 15, 7, 99, 0, 12] 
numbers1.sort(function (a, b) {
    console.log(a&1, b&1);
    return (a & 1) - (b & 1) || a - b;
});
// console.log(numbers1);
// GO BACK AND LEARN ARRAY SORTING FUNCTION THEN COME BACK TO BOOK JAVASCRIPT NOTES FOR PROFESSIONALS
*/
/*==============================Finding two sum in JAVASCRIPT======================================== 
var twoSum = function (nums, target) {
    let outcome=[]
    nums.forEach(function(num,index,arr) {
        console.log('number now is', num);
        for (let i = 0; i < nums.length; i++) {
            if (i !== index && (arr[i] + num) === target && (outcome.length <= 2)) {
                outcome.push(index);
                outcome.push(i)
                return outcome;
            } 
        }
    })
    return [outcome[0],outcome[1]]
};
console.log(twoSum([2,7,18,4,7,6], 6));
//given seconds, write a function that return days
function returnDays(seconds) {
    if ((seconds / 60) <= 1) {
        return `0hrs: 0min: ${seconds} seconds`
    } else {
        console.log(Math.floor(seconds / 3600));
        let mins = Math.floor(seconds/60) > 60 ? seconds%60 : Math.floor(seconds/60)
        return ''+Math.floor(seconds/3600)+':hours '+mins+ ':minutes '+seconds%60+': seconds'
    }
}
console.log(returnDays(70))
console.log(Math.floor(Math.random(1) * 10))
*/

/* ====================practice questions 
async function queryRandomPeople() {
    let people = [];
    //create a loop for ten people
    let onePerson = { profilePic: '', name: '' };
    for (let i = 0; i < 10; i++) {
        const person = await fetch('https://randomuser.me/api/', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        //wait for the response
        const response = await person.json();
        //if the response is present
        if (response) {
            onePerson['profilePic'] = response.results[0].picture.large;
            onePerson['name'] = response.results[0].name.first + ' ' + response.results[0].name.last;
            people.push(onePerson);
            //reset the one person because it holds a reference. then change it
            onePerson = { profilePic: '', name: '' };
        }
    }
    return people;
}
const containerDiv = document.querySelector('.container')
queryRandomPeople().then(res => {
    res.forEach((r) => {
        var div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.border = '1px solid black';
        div.style.width = '400px';
        div.style.margin = '2vw';
        div.innerHTML = `<img src=${r.profilePic} alt=${r.name}> \n <h1>${r.name}</h1>`;
        containerDiv.appendChild(div);
    })
})
//================================Find the mammals=======================================
let animals = [{
    type: 'Dog',
    mammal: true,
}, {
    type: 'Snake',
    mammal: false,
}, {
    type: 'Cheetah',
    mammal: true,
},
];

//==============
console.time('Array forloop')
function findMammalsForLoop(animals) {
    const mammals = []
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].mammal === true) {
            mammals.push(animals[i])
        }
    }
    return mammals
}
findMammalsForLoop(animals);
console.timeEnd('Array forloop')

console.time('Array Reduce')
function findMammalsReduce(animals) {
    return animals.reduce(function (acc, item) {
        if (item.mammal===true) {
            acc.push(item)
        }
        return acc;
    }, []);
}
findMammalsReduce(animals)
console.timeEnd('Array Reduce')
*/