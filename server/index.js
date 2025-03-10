const express = require("express");
const app = express();
require("./Api");
const student = require("./schema");
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.get("/", cors(), async (req, res) => {
    let data = await student.find();
    res.send(data)
    console.log(data);
    console.log("Connection SuccessFUll")
})
app.get("/:id", cors(), async (req, res) => {

    let id = req.params.id;
    let data = await student.find({ id: id });
    res.send(data)
    console.log(data);
    console.log("Connection SuccessFUll")
})
app.post("/insert", cors(), async (req, res) => {
    let data = new student(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result);
    console.log("data inseted SuccessFully");

})
app.delete("/delete/:id", async (req, res) => {
    let data = parseInt(req.params.id);
    console.log(data);

    let result = await student.deleteOne({ 'id': data });
    res.send(result)
    console.log(result);
})
app.put("/update/:name", async (req, res) => {
    console.log(req.params);
    let data = await student.updateOne(req.params, { $set: req.body });
    res.send(data)
})
app.listen(5000);