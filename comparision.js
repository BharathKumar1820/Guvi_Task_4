var obj1 = { name: "Person 1", age: "5" };

var obj2 = { age: "5", name: "Person 1" };

function getJsonFromObject(obj) {
  return JSON.stringify(obj);
}
console.log(getJsonFromObject(obj1) == getJsonFromObject(obj2));
