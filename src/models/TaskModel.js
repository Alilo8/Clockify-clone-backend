const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
	text: String,
    time: Date,
    deadline: Date,
    assignedTo: String,
    project: String,
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
