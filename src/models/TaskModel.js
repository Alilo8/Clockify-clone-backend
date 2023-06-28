const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    _id: Number,
	text: String,
    time: Number,
    due: Number,
    assignedTo: String,
    project: String,
    run: Boolean,
    managerID: String,
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
