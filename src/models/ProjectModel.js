const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
	_id: String,
    status: String,
	client: String,
    access: String,
    time: Number,
    favorite: Boolean,
    tasks: [],
    managerID: String,
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;
