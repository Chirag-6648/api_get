const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    id: Number,
    name: String,
    rno: Number,
    address: String,
    currYear: Number
})

module.exports = mongoose.model("students", studentSchema);