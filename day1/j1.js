var a={
    "name":"Test",
    "age":25,
    occupation:"business",
    "isPass":false,
    "year":null,
    "address":{                                 // nesting of objects
        "city":"ahmedabad",
        "zip":"382350"
    },
    "subjects":["math", "science"]              // array
}
console.log(a);
console.log(a.age);
console.log(a["address"]);
console.log(a["address"]["city"]);
console.log(a.subjects[0]);
console.log(a.address);
console.log(a.address.city);
console.log(JSON.stringify(a));
// Hello world
// Hello amdavad