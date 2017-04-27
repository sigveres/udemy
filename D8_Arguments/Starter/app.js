/* PARAMETERS



function greet(firstname="firstname", lastname="lastname", language="en" ) {


    if (arguments.length === 0) {
        console.log("mission paramaters!");
    }


    console.log(firstname);
    console.log(lastname);
    console.log(language);
}

greet();
*/


/*

// "enter" will give ;. always use brackets on the line

function getPerson() {
    return {
        firsname: "sigve"
    }
}

console.log(getPerson());
*/

/*
// Whitespace - Comment code, you can use whitespace

var
    // firename of the person
    firstname, lastname, language;

var person = {
    firstname: "sigve",
    lastname: "resland"

}

console.log(person);

*/

/* - IFFIE
// funtion statement
function greet(name) {
    console.log("hello " + name);
}

greet("sigve");


// funciton expression
var greetFun = function(name) {
    console.log("hello " + name);

};
greetFun("snig");

// Immediately Invoked funciton expression (IIFE)
var greeting = function(name) {
    //
    return "hello " + name;
}("sigve"); // run function with parameter

console.log(greeting); // invoke the function




// IIFE EXAMPLE
//
var firstname = "sigve Inside IIFE";

// wrap () arroud function. create a function on the fly
(function(name) {
    var greeting = "hello ";
    console.log(greeting + name);

}(firstname)); //give parameter to the IIFE

*/

/* Closure
// Selv om en function er ferdig - så kan man fortsatt bruker verdien som ble laget.

function greet(whattosay) {

    return function(name) {
        console.log(whattosay + " " + name);
    }
}

var sayHi = greet("hello");

sayHi("sigve");

*/

// Closure part 2: arrays blir laget i loop - og svarer vil bli 3 - 3 - 3.
// Kan bli fikset ved bruk av let - eller en IIFE function i arr.push. se example
/*
function buildFunctions() {
    var arr = [];

    for (var i = 0; i<3; i++) {
        // let j = i; eller bytte plass med var i / let i.
        arr.push( function() {
            console.log(i);
        })
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
*/


/*
// IIFE example:
function buildFunctions() {
    var arr = [];

    for (var i = 0; i<3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))

        )
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
*/

/*
// Function Factory
function makeGreeting(language) {

    return function(firstename, lastname) {

        if (language === "en") {
            console.log("Hello " + firstename + " " + lastname);
        }

        if (language === "es") {
            console.log("Hola " + firstename + " " + lastname);
        }
    }
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("Sigve", "Resaland");

*/

/*

function sayHiLater() {
    var greeting = "Hello!";

    setTimeout( function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();

*/

////////////////////////////////////////////
// Functional programming
//
//
////////////////////////////////////////////
//*

/*

function mapForEach(arr, fn) {
    var newArr = [];

    for (var i=0; i < arr1.length; i++) {
        newArr.push(
            fn(arr[i])
        )
};
    return newArr;
}

var arr1 = [1,2,3,4];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});

var arr3 = mapForEach(arr1, function(item){
    return item > 2;
});

console.log(arr2);
console.log(arr3);


function checkPastLimit(limiter, item) {
    return item > limiter;
}

function checkPastLimitSimple(limiter){
    return function(limiter, item) {
        return item > limiter;
    }.biind(this, limiter);
};

var arr4 = mapForEach(arr1, checkPastLimitSimple(1));


console.log(arr4);
*/
//*/

////////////////////////////////////////////
// Functional programming
//
//
////////////////////////////////////////////

// HOW TO SET PROTOTYPE
/*
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("This is invoked!");
}


Person.prototype.getFullName = function() {
    return this.firstname + " " + this.lastname;
}

var john = new Person("John", "Doe");
console.log(john);

var jane = new Person("Jane", "Doe");
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + " " + this.firstname;
}


console.log(john.getFormalFullName());
*/

//Built-in prototypes
/*
String.prototype.isLengtGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("john".isLengtGreaterThan(4));

Number.prototype.isNumber = function() {
    return
}
*/

// arrays in for in loop
/*
var arr = ["jogn", "snig", "krå"];

for (var prop in arr) {
    console.log(prop + ": " + arr[prop]);
}
*/
///////////////////
// CREATE OBJECTS - Pure prototypal inheritance
///////////////////
// OBJECT.CREATE
/*
// Default creation of objects
var person = {
    firstname: "defualt",
    lastname: "default",
    greet: function() {
        return "hi" + this.firstname;
    }
}

// Other method to create objects - prototypal inheritance.
var john = Object.create(person);
john.firstname = "john";
john.lastname = "snig";
console.log(john);


// Polyfill for Object.create
*/


///////////
// ES 6 and classes
///////////

// CLASSES
// defines and object.


// ODDS AND ENDS

/*
// initialisaiton
var people = [
    {
        // jogn
        firstname: "jogn",
        lastname: "snig",
        adress: [
            "111 st.",
            "333 st"
        ]
    },
    {
        // jørge object
        firstname: "jørgen",
        lastname: "resa",
        adress: [
            "333. st",
            "444. st"
        ]
    }
]

*/
/*
var people = {
  firstname: "sigve",
  lastname: "resaland"
}

console.log(people.firstname + " " + people.lastname);
*/
/////////////////////////
//TYPEOF
/////////////////////////
/*
var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

// .call() - parameter sier hva som er this, her sjekker man toString med this (d)

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);
*/

/////////////////////////
// STRICT MODE
/////////////////////////
// Got to declare all variables before you use them
/*
"use strict";
var person;

persom = {};
console.log(persom);
*/



/////////////////////////
// DEEP DIVE - Jquery
/////////////////////////
/*
var q = $("ul.people li");
console.log(q);

*/

/////////////////////////
// MY LIBRARY
/////////////////////////



var g = G$("john", "snig");

g.greet().setLang("es").greet(true).log();

$("#login").click(function() {
  var loginGrtr = G$("john", "Doe");

  $("#logindiv").hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});












/////////////////////////
// STRICT MODE
/////////////////////////






/////////////////////////
// STRICT MODE
/////////////////////////
