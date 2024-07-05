const array = [
    {
      name:"Naveen",
      lastname:"Kumar",
      city: [
        "Mumbai",
        "Delhi"
      ]  
    },
    {
        name:"Samarth",
        lastname:"SJ",
        city: [
            "Newyork",
            "Losangales"
        ]
    }
]

const main= array.find((data)=>{
      return data.name == "Naveen"
}).city

console.log(main);