const express = require ("express");
const app = express();

app.get("/", (req,res) => {
    console.log("user hit the resoure");
    res.status(200).send("Home page");
})

app.get("/about", (req,res) => {
    res.status(200).send("About page");
})

app.all("*", (req,res) => {
    res.status(404).send("<h1> page not found </h1>");
})

app.listen(5000, () => {
    console.log("server is running on port 5000");
})










// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen