var ps=require("fs");
ps.mkdirSync("day3/devam");
ps.writeFileSync("day3/devam/source.txt", "Hello, i am devam");
var dm=ps.readFileSync("day3/devam/source.txt");

ps.writeFileSync("day3/devam/destination.txt", dm.toString());
