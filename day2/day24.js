var arr=["abc", "def", "ghi", "lmn"];
function firstlast(arr1) {
    const a={};
    a[arr1[0]]=arr1[arr1.length-1];
    return a;
}
console.log(firstlast(arr));