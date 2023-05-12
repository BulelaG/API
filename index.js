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

app.use(express.json())


// Root Endpoint
app.get("/api",(req,res) => {
    res.send("Api exits")
})


// get all people
app.get("/people",(req,res) => {
    res.send(People)
})



//   get 1 person
app.get("/api/people/:id",(req,res) => {

    let id = req.params.id
    let person;
    person = People.filter((Element => Element.id == id))
    res.send(person)
})

// create/post 1 person
app.post("/people",(req,res) => {
  let person = {
     id: People.length + 1,
     fname:req.body.fname,
     lname:req.body.lname,
     age:req.body.age
     }
     People.push(person)
     res.send(People) 
  
})


// update certain person
app.put("/people/:id",(req,res) => {
    let id = req.params.id
    let person = People.find(element => element.id == id)
  
    if (person) {
      person.fname = req.body.fname || person.fname
      person.lname = req.body.lname || person.lname
      person.age = req.body.age || person.age
      res.send(People)
    } else {
      res.status(404).send("Person not found")
    }
  })
  
 // upd certain person
 app.delete("/delete/:id",(req,res) => {

    let id = req.params.id
    const index = People.findIndex((person) => person.id === parseInt(id));
    People.splice(index, 1);
    res.send(People)
  
  })




app.listen(port, () => console.log('Server Started'))























// app.get("/api/:fnames",(req,res) => {
//     let  fname  = req.params.fname
//     const fnames = People.map(person => person.fname == fname);
//     // console.log(fnames)
//     res.send(fnames)
// })