import express from "express";
import cors from "cors";


var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json())

var a, b, c, d, e;

app.post("/", (req, res) => {
    res.json([
        {
            name1: req.body.name,
            email1: req.body.email,
            phone1: req.body.phone,
            date1: req.body.date,
            message1: req.body.message,
        },
    ]);

    console.log("asdasdasdasdasdasd",req.body.name)
    a = req.body.name;
    b = req.body.email;
    c = req.body.phone;
    d = req.body.date;
    e = req.body.message;
    // a = JSON.parse(req.body.name);
    // b = JSON.parse(req.body.email);
    // c = JSON.parse(req.body.phone);
    // d = JSON.parse(req.body.date);
    // e = JSON.parse(req.body.message);
    console.log(a, b, c, d, e);
    


    
    // console.log(req.body.name)

    //   const response = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     phone: req.body.subject,
    //     message: req.body.message,
    //   };


})



app.get("/booking", (req, res) => {
    const f = {
        a, b, c, d, e
    };
    res.json(f);
})




app.listen(5000, () => {
    console.log("Backend server running http://localhost:5000");
})