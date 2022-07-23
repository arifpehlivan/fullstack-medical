import  express  from "express";

var app = express();

app.use(express.json())

app.use("/admin", (req,res) => {
    res.json("Everything ok")
})

app.listen(5000, () => {
    console.log("Backend server running http://localhost:5000");
})