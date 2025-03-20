const a={
    "a":"LJU",
    "b":["CSE", "IT", "CE"],
    "c":[
        {
            "d":"Hi",
            "e":["are", 4, {"f":["semester", "we"]}]
        }
    ],
    "g":{
        "h":"students",
        "i":["of", "!"]
    },
    "j":[
        {
            "k":"python",
            "l":"branch"
        },
        "FSD-2"
    ]
}

console.log(a.c[0].d + a.g.i[1] + " " + a.c[0].e[2].f[1] + " " + a.c[0].e[0] + " " + a.g.h + " " + a.g.i[0] + " " + a.c[0].e[2].f[0] + " " + a.c[0].e[1] + " " + a.g.i[0] + " " + a.b[0] + " " + a.j[0].l);
console.log(""+2+a.c[0].e[1]);
console.log("2"+a.c[0].e[1]);
console.log(a.c[0].e[1]+2+"");
