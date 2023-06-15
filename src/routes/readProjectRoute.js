const ProjectModel = require('../models/ProjectModel');
module.exports = async (req, res) => {
	const {id} = req.params;
	let projects;
	if(id)
	    projects = await ProjectModel.findOne({_id: id});
	else
		projects = await ProjectModel.find();
    res.json(projects);
}
