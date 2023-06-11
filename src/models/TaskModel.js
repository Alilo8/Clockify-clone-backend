const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
	text: String,
    time: Date,
    project: String
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
