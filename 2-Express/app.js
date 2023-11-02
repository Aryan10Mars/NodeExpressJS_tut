const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req,res) => {
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//     adding to static assest
//     SSR
// })

app.all("*",(req,res) => {
    res.status(404).send("page not found");
})






app.listen(5000, () => {
    console.log("server is running on 5000");
})