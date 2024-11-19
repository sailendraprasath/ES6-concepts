//Map, find, filter, some, every, includes, indexof, findIndex;

const PersonData = [
  {
    name: "Sailesh",
    age: 20,
    country: "INDIA",
  },
  {
    name: "Sailendra prasath",
    age: 22,
    country: "GERMANY",
  },
  {
    name: "Sailendra prasath N",
    age: 24,
    country: "FINLAND",
  },
  {
    name: "Sailendra prasath ",
    age: 23,
    country: "FINLAND",
  },
];

let getAllData = PersonData.map((singleperson, index) => {
  console.log(singleperson, index);

  return `${singleperson.name} age is ${singleperson.age} our country is ${singleperson.country}`;
});

console.log(getAllData);

//find
// using FIND method ur condition is satisfied return the values
// but using FILTER get all satisfied condition

let getPersonFromFIN = PersonData.find((singleperson, index) => {
  return singleperson.country === "FINLAND";
});

console.log(getPersonFromFIN);

// Filter

const getAllDataFromFIN = PersonData.filter((singleperson, index) => {
  return singleperson.country === "FINLAND";
});

console.log(getAllDataFromFIN);
