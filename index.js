
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
//=============================================ARRAY.REDUCE PRACTICE QUESTIONS========================
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
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numYoungPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldVotesPeople: 4 
}
*/