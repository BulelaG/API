const express = require('express')
const app = express()
const port = 4444

let People = [
      
    {id:1,
    fname:"John",
    lname:"Doe",
    age: 29,
    },

    {id:2,
    fname:"Jane",
    lname:"Dwayne",
    age: 19,
    },

    {id:3,
    fname:"Peter",
    lname:"Parker",
    age: 21,
    }
]

app.get("/api",(req,res) => {
    res.send(People)
})

app.get("/api/:id",(req,res) => {

    let id = req.params.id
    let person;
    person = People.filter((Element => Element.id == id))
    res.send(person)
})

app.listen(port, () => console.log('Server Started'))