// FS module
// sync(sequence wise), async (shortest first)
// CRUD: create, read, update, delete
// create: create dir, file; content, read, append, rename, delete

// create dir: mkdirSync(path)
// create file:
// content: writeFileSync(path, data)
// read: readFileSync(path)
// append: appendFileSync(path, data)
// rename: renameSync()
// delete: unlinkSync()

// write node example with file system methods

// var ps=require("fs");
// ps.mkdirSync("day3/devam");
// ps.writeFileSync("day3/devam/demo.txt", "Hello");
// ps.appendFileSync("day3/devam/demo.txt", "LJ");
// var dm=ps.readFileSync("day3/devam/demo.txt", "utf-8");
// console.log(dm);

var ps=require("fs");
ps.mkdirSync("day3/devam");
ps.writeFileSync("day3/devam/demo.txt", "Hello");
ps.appendFileSync("day3/devam/demo.txt", "LJ");
var dm=ps.readFileSync("day3/devam/demo.txt");
console.log(dm.toString());
ps.renameSync("day3/devam/demo.txt", "day3/devam/demo2.txt");
ps.unlinkSync("day3/devam/demo2.txt");