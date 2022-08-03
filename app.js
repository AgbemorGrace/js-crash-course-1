//declearing a variales
//keyword identifier/variables = value
var firstName = "Grace";
let lastName = "Agbemor";
let age =27;
let ismarried = true;
let children = ["Bright","Simon","Patric"];
let other ={
favoritecolor: "Gold",
favoritefruit: "orange",
favoritesport: "soccer",
};
const fullName = firstName + " " + lastName; //concatenation
const myself = `my name is ${firstName} ${lastName}.`;
console.log(myself);

//string
let sentence = "This is a story about Grace Agbemor in Bling spot"
console.log(sentence.length);
console.log(sentence.split("Grace"));
console.log(sentence.replace("Grace","Patrick"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("This"));
console.log(sentence.endsWith("Spot"));
//ARRAY
const days =["Monday","Tuesday","Wednesday","Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.indexOf("Friday"));
console.log(days[2]);
days[0] = "Sunday";
console.log(days);

//OBJECT
let person = {
    firstName: "Grace",
    lastName: "Agbemor",
    age: 27,
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));