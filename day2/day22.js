// write a json object which contains array of 3 objects. each object contains 2 properties: name & age
const a={
    "arr":[
        {
            "name":"devam",
            "age":18
        },
        {
            "name":"Harit",
            "age":19
        },
        {
            "name":"Henil",
            "age":14
        }
    ]
}
console.log(a);

// var max=0;
// var arr2=[];
// for(x1 of a.arr) {
//     // if(max<x1.age) {
//     //     max=x1.age;
//     // }
//     console.log(x1.age)
//     arr2 += "" + x1.age;
// }
// console.log(arr2);

console.log(a.arr.sort((a,b)=>b.age-a.age));
console.log(a.arr.sort((a,b)=>a.age-b.age));
// b=a.arr.age.sort();
// console.log(b);