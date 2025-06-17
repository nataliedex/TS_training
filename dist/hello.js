"use strict";
function hello(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
hello("Natalie", new Date());
const mixedArray = ["Hello", 24, true, "GoodBYE", false, 53];
mixedArray.forEach(item => {
    if (typeof item === "string") {
        console.log(`String: ${item.toUpperCase()}`);
    }
    else if (typeof item === "number") {
        console.log(`Number: ${item * 2}`);
    }
    else if (typeof item === "boolean") {
        console.log(`Boolean: ${item ? "Yes" : "No"}`);
    }
});
async function getFavoriteNumber() {
    return 26;
}
async function showNumber() {
    const number = await getFavoriteNumber();
    console.log(number);
}
// showNumber();
function printName(name) {
    if (name.last) {
        console.log(`Your name is ${name.first} ${name.last}`);
    }
    else {
        console.log(`Your name is ${name.first}`);
    }
}
printName({ first: "Natalie", last: "Blumen" });
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log(`Welcome lone traveler ${x}`);
    }
}
welcomePeople(["Chelsea", "Natalie", "Vladi", "Nick"]);
