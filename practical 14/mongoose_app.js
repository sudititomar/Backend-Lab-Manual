const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testDB");

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model("Student", studentSchema);

// Insert
const addStudent = async () => {
    await Student.create({ name: "Kritika", age: 20 });

    const data = await Student.find();
    console.log(data);
};

addStudent();