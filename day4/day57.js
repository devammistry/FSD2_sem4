// write node script to create a folder named "yyy" in temp folder also create file named "ghi.txt" inside that folder now, check if available physical memory is greater than 1 GB then write "sufficient" in file else write "Insufficient" in file
var ps=require("fs");
var os=require("os");
ps.mkdirSync(os.tmpdir()+"/yyy");
ps.writeFileSync(os.tmpdir()+"/yyy/"+"ghi.txt", "");
var gb=os.freemem()/1024/1024/1024;
if (gb>1) {
    ps.appendFileSync(os.tmpdir()+"/yyy/"+"ghi.txt", "sufficient");
} else {
    ps.appendFileSync(os.tmpdir()+"/yyy/"+"ghi.txt", "Insufficient");
}