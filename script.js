/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  return console.log(arr);
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(function(el){
  return console.log(el);
  })
}

function addData() {
  //Write your code here
  arr.push({id:4, name:"susan", age:"20", profession:"intern"})
  return console.log(arr);
}

function removeAdmin() {
  //Write your code here  
  const profession="admin";
  let newArr = arr.filter(function(item){
    return item.profession!=profession;
  })
  return console.log(newArr);
}

let arrNew = [
  { id: 010, designation: "HR", salary: "18000", location: "Noida" },
  { id: 020, designation: "Marketing", salary: "20000", location: "Delhi" },
  { id: 030, designation: "Counsellor", salary: "19000", location: "Banglore" },
];

function concatenateArray() {
  //Write your code here
let concateArray = arr.concat(arrNew);
return console.log(concateArray);
}
