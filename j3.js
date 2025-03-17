const user={
    "name":["ABC", "DEF", "GHI"],
    "age":25,
    "course":["FSD", "DE", "FSD2"],
    "address":["T1", "T2", {"t3":"give again"}]
}
console.log(user.address[2].t3);