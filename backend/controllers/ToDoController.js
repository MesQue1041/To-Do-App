const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
  try {
    const toDo = await ToDoModel.find();
    res.send(toDo);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.saveToDo = async (req, res) => {
  try {
    const { text } = req.body;
    const newToDo = await ToDoModel.create({ text });
    console.log("Added Successfully");
    console.log(newToDo);
    res.send(newToDo);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    await ToDoModel.findByIdAndUpdate(_id, { text });
    res.send("Updated Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.deleteToDo = async (req, res) => {
  try {
    const { _id } = req.body;
    await ToDoModel.findByIdAndDelete(_id);
    res.send("Deleted Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
