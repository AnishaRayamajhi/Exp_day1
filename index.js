const express = require('express');

const app= express();

app.use(express.urlencoded({ extended : true}));

let users=['ram','hari'];
let categories=['book','copy'];

app.get('/category', (req, res) => {
    res.send(categories);
});


app.post('/add-category', (req, res) => {
    if(req.body.name)
    {
        categories.push(req.body.name);
        res.send("categories added");
    }
    else{
        res.send("Please Provide name");
    }
})
// app.get('/add-user', (req, res) => {
//     if(req.query.name)
//    {
//     users.push(req.query.name);
//     res.send("User Added");
//    } 
//    else {
//     res.send("Please provide name");
//    }
// })

app.get("/delete-category", (req, res)=> {
    if(req.query.name)
    {
        categories = categories.filter((user) => {
            return categories !== req.query.name;
        });
        res.send("Category Deleted");
    }
    else{
        res.send("Please Provide name");
    }
})


app.listen(3000, ()=> {
    console.log("Server started on port 3000 ");
});