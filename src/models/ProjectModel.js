const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
	_id: String,
    status: String,
	client: String,
    access: String,
    time: Date,
    favorite: Boolean,
    tasks: [],
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;
