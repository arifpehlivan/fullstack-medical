import express from "express";
import cors from "cors";

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json())

var name, email, phone, date, hours, message;

app.post("/", (req, res) => {
    res.json([
        {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            date: req.body.date,
            hours: req.body.hours,
            message: req.body.message,
        },
    ]);
    name = req.body.name;
    email = req.body.email;
    phone = req.body.phone;
    date = req.body.date;
    hours = req.body.hours;
    message = req.body.message;
})



app.get("/booking", (req, res) => {
    const data = {
        name, email, phone, date, hours, message
    };
    res.json(data);
})




app.listen(5000, () => {
    console.log("Backend server running http://localhost:5000");
})