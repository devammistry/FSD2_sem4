const sub={
    "FSD":[
        {
            "topic":"HTML",
            "course":"beginner",
            "content":["tags", "table", "form"]
        },
        {
            "topic":"css", 
            "course":"beginner",
            "content":["tags", "table", "form"]
        }
    ]
}

for(x in sub.FSD) {
    for(y in sub.FSD[x]) {
        console.log(sub.FSD[x][y]);
    }
}

console.log();

for(x1 of sub.FSD) {
    console.log(x1.topic);
    console.log(x1.course);
    console.log(x1.content);
    console.log(x1);
}