let [make, model] = ["Audi", "A8"];
console.log(make); //Audi
console.log(model); //A8

let [lastName, firstName, ...otherWords] = "Cristiano Ronaldo plays for Juventus".split(" ");
console.log(lastName); //Cristiano
console.log(firstName); //Ronaldo
console.log(otherWords); //[ 'plays', 'for', 'Juventus' ]

let [team, teamCountry = "UK"] = ["Arsenal"];
console.log(team); //Arsenal
console.log(teamCountry); //UK

let address = {
    country: "UK",
    city: "London"
};
let {country, city} = address;
console.log(country); //UK
console.log(city); //London