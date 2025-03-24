// read data from file & sort that data in ascending order using sort()
var arr=[10, 20, 30]
var ps=require("fs");
ps.writeFileSync("source.txt", arr.toString());
var dm=ps.readFileSync("source.txt", "utf-8");
dm_split=dm.split(",")
console.log(dm_split.sort((a,b)=>a-b));