const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    task_id: Number,
	task_start: Number,
	task_time: Number
});

const ManagerModel = mongoose.model('Manager', ManagerSchema);

module.exports = ManagerModel;

